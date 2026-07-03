# VPS Deployment Guide - Motive Solutions Website

This guide details the steps to build, containerize, and deploy the **Motive Solutions** (motivesolutions.uk) frontend application on a Virtual Private Server (VPS) using Docker and Nginx.

---

## 🚀 Local Operations & Commands

### 1. Local Setup & Testing
```bash
# Install dependencies
npm install

# Run hot-reloading development server
npm run dev

# Run static analysis and linting
npm run lint

# Compile production build locally
npm run build
```

---

## 🐳 Docker Deployment on VPS

We use Next.js **Standalone Output** to keep the Docker image size under 150MB.

### 1. Build the Docker Image
```bash
docker build -t motive-solutions-frontend .
```

### 2. Run the Container Standalone
```bash
docker run -d \
  -p 127.0.0.1:3062:3000 \
  --name motive-solutions-app \
  --restart always \
  -e PORT=3000 \
  -e HOSTNAME=0.0.0.0 \
  motive-solutions-frontend
```

Alternatively, use the provided `docker-compose.yml` to build and launch in detached mode:
```bash
docker compose up -d --build
```

---

## 🛡️ Nginx Reverse Proxy Setup (with SSL)

Deploy Nginx on your VPS host to proxy traffic from port `80` (HTTP) and `443` (HTTPS) to our container running at `127.0.0.1:3062`.

### 1. DNS Configuration
Before initiating SSL certificates, make sure your domain's DNS **A record** is pointing to your VPS public IPv4 address:
```text
Type: A
Name: @ (and/or www)
Value: [Your VPS Public IP]
```

### 2. Nginx Server Configuration File
Create an Nginx configuration file (e.g. `/etc/nginx/sites-available/motivesolutions.uk`):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name motivesolutions.uk www.motivesolutions.uk;

    location / {
        proxy_pass http://127.0.0.1:3062;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the configuration and reload Nginx:
```bash
ln -s /etc/nginx/sites-available/motivesolutions.uk /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 3. Obtain Free Let's Encrypt SSL via Certbot
```bash
# Install Certbot and the Nginx plugin
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Request certificate
sudo certbot --nginx -d motivesolutions.uk -d www.motivesolutions.uk
```
Follow the interactive prompts to enable automatic HTTP-to-HTTPS redirect.

---

## 📌 Brand Asset Deploy Checklist
- [ ] Place final favicon under `public/favicon.ico`.
- [ ] Upload default Open Graph preview share image to `public/og/default-share.jpg`.
- [ ] Put logo assets inside `public/logos/`.

# 🚀 CI/CD Deployment Guide - ZeroWaste Frontend

## 📌 Infrastructure Info
- **Frontend EC2:** `http://13.212.26.236`
- **Backend API:** `http://18.140.52.216:3000`
- **Method:** GitHub Actions → SSH to EC2 → Auto Deploy

---

## ⚡ Quick Setup (3 Steps)

### ✅ Prerequisites
- [ ] GitHub Secrets sudah ditambahkan (5 secrets)
- [ ] SSH Key: `project-key.pem` ada di Downloads
- [ ] AWS Security Group port 22 & 80 sudah open

---

### 1️⃣ Setup EC2 (Sekali Aja)

**SSH dari Windows CMD:**

```cmd
:: Buka folder Downloads di File Explorer
:: Ketik "cmd" di address bar → Enter
:: Paste command ini:

ssh -i "project-key.pem" ubuntu@13.212.26.236
```

**Kalau muncul "Are you sure?" → ketik `yes`**

**Setelah masuk EC2, copy-paste ini (SEMUA SEKALIGUS):**

```bash
sudo apt update && sudo apt install nginx -y
sudo chown -R $USER:$USER /var/www/html && sudo chmod -R 755 /var/www/html
sudo tee /etc/nginx/sites-available/default > /dev/null <<'EOF'
server {
    listen 80;
    server_name 13.212.26.236;
    root /var/www/html;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF
sudo nginx -t && sudo systemctl restart nginx && sudo systemctl enable nginx
exit
```

**✅ EC2 Setup Done!**

---

### 2️⃣ Push ke GitHub

**Di Windows CMD:**

```cmd
cd /d D:\fe-uts-kwh
git add .
git commit -m "Setup CI/CD deployment"
git push origin main
```

**Auto deploy akan jalan!** 🚀

---

### 3️⃣ Monitor & Test

1. **Monitor:** `https://github.com/YOUR-USERNAME/YOUR-REPO/actions`
2. **Wait:** ~2-3 menit sampai ✅
3. **Test:** `http://13.212.26.236`

**DONE!** Website live!

---

## 🔐 GitHub Secrets Setup

**URL:** `https://github.com/YOUR-USERNAME/YOUR-REPO/settings/secrets/actions`

Tambahkan 5 secrets ini:

| Secret Name | Value |
|-------------|-------|
| `EC2_SSH_KEY` | Isi file `project-key.pem` (include BEGIN & END) |
| `EC2_HOST` | `13.212.26.236` |
| `EC2_USER` | `ubuntu` |
| `EC2_TARGET_DIR` | `/var/www/html` |
| `VITE_API_URL` | `http://18.140.52.216:3000` |

**Copy SSH Key:**
```cmd
:: Dari folder Downloads
type project-key.pem | clip

:: Atau buka Notepad
notepad project-key.pem
```

---

## 🔑 SSH Commands

### Quick SSH (dari folder Downloads):
```cmd
cd %USERPROFILE%\Downloads
ssh -i "project-key.pem" ubuntu@13.212.26.236
```

### SSH dengan Full Path:
```cmd
ssh -i "%USERPROFILE%\Downloads\project-key.pem" ubuntu@13.212.26.236
```

### Atau pindah ke .ssh folder (Best Practice):
```cmd
mkdir %USERPROFILE%\.ssh
copy %USERPROFILE%\Downloads\project-key.pem %USERPROFILE%\.ssh\
powershell -Command "icacls '%USERPROFILE%\.ssh\project-key.pem' /inheritance:r; icacls '%USERPROFILE%\.ssh\project-key.pem' /grant:r '%USERNAME%:(R)'"
ssh -i %USERPROFILE%\.ssh\project-key.pem ubuntu@13.212.26.236
```

---

## 🔧 Troubleshooting

### Error: "Connection timed out"

**Fix:** Buka AWS Security Group, add rule SSH:
- Type: SSH
- Port: 22
- Source: 0.0.0.0/0 (atau My IP)

### Error: "Permission denied"

**Fix Permission file .pem:**
```cmd
powershell -Command "icacls 'project-key.pem' /inheritance:r; icacls 'project-key.pem' /grant:r '%USERNAME%:(R)'"
```

### Deploy Failed di GitHub Actions

**Check:**
1. Semua 5 secrets sudah benar?
2. SSH key include BEGIN dan END?
3. EC2 instance Running?
4. Port 22 open di Security Group?

**Test SSH manual:**
```cmd
ssh -i "project-key.pem" ubuntu@13.212.26.236
```

### Website 404 atau Blank

**SSH ke EC2, cek files:**
```bash
ls -la /var/www/html
```

**Harus ada:** `index.html`, `assets/`, dll

**Cek Nginx:**
```bash
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
```

---

## 🏗️ Architecture

```
┌──────────────┐    git push     ┌──────────────────┐
│   GitHub     │ ───────────────> │ GitHub Actions   │
│  Repository  │                  │  (Build & Test)  │
└──────────────┘                  └────────┬─────────┘
                                           │ SSH Deploy
                                           ▼
                                  ┌──────────────────┐
                                  │  EC2 Frontend    │
                                  │  13.212.26.236   │
                                  │  Nginx + React   │
                                  └────────┬─────────┘
                                           │ API Calls
                                           ▼
                                  ┌──────────────────┐
                                  │  EC2 Backend     │
                                  │ 18.140.52.216    │
                                  │  Node.js API     │
                                  └──────────────────┘
```

---

## 📊 Workflow File

**Location:** `.github/workflows/deploy-ec2.yml`

**What it does:**
1. Checkout code dari GitHub
2. Install Node.js 20
3. `npm ci` (install dependencies)
4. `npm run build` (build React app)
5. SSH ke EC2
6. Upload `dist/` folder ke `/var/www/html`
7. Done!

**Triggers:**
- Auto: Push ke branch `main`
- Manual: GitHub Actions UI → Run workflow

---

## 🔄 Daily Usage

### Deploy Changes:
```cmd
cd /d D:\fe-uts-kwh
git add .
git commit -m "Update feature X"
git push origin main
```

**Auto deploy!** No extra steps needed.

### Manual Trigger:
1. GitHub → Actions
2. Deploy to AWS EC2
3. Run workflow

### Check Deployment:
```bash
# SSH ke EC2
ssh -i "project-key.pem" ubuntu@13.212.26.236

# Lihat files
ls -la /var/www/html

# Nginx logs
sudo tail -f /var/log/nginx/access.log

# Exit
exit
```

---

## 🆘 Emergency

### Rollback Deploy:
```cmd
git revert HEAD
git push origin main
```

### Clear & Redeploy:
```bash
# SSH ke EC2
ssh -i "project-key.pem" ubuntu@13.212.26.236

# Clear old files
sudo rm -rf /var/www/html/*

# Restart Nginx
sudo systemctl restart nginx
exit

# Trigger redeploy dari GitHub Actions
```

### Fix Security Group (Port Closed):
1. AWS Console → EC2 → Security Groups
2. Find your SG → Edit inbound rules
3. Add: SSH (22), HTTP (80)
4. Source: 0.0.0.0/0
5. Save

---

## ✅ Deployment Checklist

### One-Time Setup:
- [x] File `project-key.pem` available
- [x] 5 GitHub Secrets added
- [x] SSH to EC2 success
- [x] Nginx installed & configured
- [x] `/var/www/html` permissions set
- [x] Security Group ports 22 & 80 open
- [x] Workflow file exists

### Every Deploy:
- [ ] `git add .`
- [ ] `git commit -m "message"`
- [ ] `git push origin main`
- [ ] Check GitHub Actions (green ✓)
- [ ] Test: `http://13.212.26.236`

---

## 📞 Quick Links

- **GitHub Actions:** `https://github.com/YOUR-USERNAME/YOUR-REPO/actions`
- **GitHub Secrets:** `https://github.com/YOUR-USERNAME/YOUR-REPO/settings/secrets/actions`
- **Frontend:** `http://13.212.26.236`
- **Backend API:** `http://18.140.52.216:3000`
- **AWS Console:** `https://console.aws.amazon.com/ec2`

---

## 🎓 Tips

### Faster SSH:
Create SSH config:
```cmd
notepad %USERPROFILE%\.ssh\config
```

Paste (ganti USERNAME):
```
Host zerowaste
    HostName 13.212.26.236
    User ubuntu
    IdentityFile C:\Users\USERNAME\.ssh\project-key.pem
```

Now just:
```cmd
ssh zerowaste
```

### Watch Deployment Live:
```bash
# Terminal 1: Access logs
ssh zerowaste
sudo tail -f /var/log/nginx/access.log

# Terminal 2: Error logs
ssh zerowaste
sudo tail -f /var/log/nginx/error.log
```

### Test Build Locally First:
```cmd
npm install
npm run build
npm run preview
```

Visit: `http://localhost:4173`

---

## 🎉 Success Indicators

✅ GitHub Actions workflow = Green check
✅ No error logs in terminal
✅ Files present in `/var/www/html`
✅ Nginx status = active (running)
✅ Website loads at `http://13.212.26.236`
✅ API calls work (check browser console)

---

**Setup by: ZeroWaste DevOps Team**
**Last Updated: 2025**
**Happy Deploying! 🚀**

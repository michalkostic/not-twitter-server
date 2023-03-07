
    
sudo yum install docker
sudo yum update -y
sudo yum install -y gcc gcc-c++ make openssl-devel git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
chmod u+x ~/.nvm/nvm.sh
. ~/.nvm/nvm.sh
nvm install 16
node -e "console.log('Running Node.js ' + process.version)"
npm install pm2@latest -g


# nginx - web server/reverse proxy
sudo amazon-linux-extras enable nginx1
yum clean metadata
sudo yum install nginx

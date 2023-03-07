
# Docker
sudo yum install docker
# enable and start docker service

sudo usermod -a -G docker ec2-user
id ec2-user
# Reload a Linux user's group assignments to docker w/o logout
newgrp docker

sudo systemctl enable docker.service
sudo systemctl start docker.service


# Docker compose    
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install node.js
sudo yum update -y
sudo yum install -y gcc gcc-c++ make openssl-devel git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
chmod u+x ~/.nvm/nvm.sh
. ~/.nvm/nvm.sh
nvm install 16
node -e "console.log('Running Node.js ' + process.version)"

# git
sudo yum install git

# Get code to server
# Normally this would be done on the build server and only build artifacts (like docker image) would be uploaded to the server, building on the same server for simplicity.
mkdir repos
cd repos
git clone https://github.com/michalkostic/not-twitter-server.git
git clone https://github.com/michalkostic/not-twitter.git

# Install node process manager so it keeps running after logout
npm install pm2@latest -g
pm2 completion install
pm2 start ecosystem.config.js

# TODO: host react app

# nginx - web server/reverse proxy
sudo amazon-linux-extras enable nginx1
yum clean metadata
sudo yum install nginx

 # Create reverse proxy record - see not_twitter.conf file in external-configs
 sudo vim /etc/nginx/conf.d/not_twitter.conf
 sudo service nginx restart

 # SSL/TLS certificat using Let's encrypt
sudo amazon-linux-extras install epel -y
sudo yum install certbot

sudo pip3 install certbot certbot-nginx
sudo /usr/local/bin/certbot --nginx

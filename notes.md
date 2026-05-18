# Deploying Nextjs applicaiton on AWS

## Note:- keep your project handy and install filezilla

1. Create EC2 instance - ubuntu - create key pair - Allow HTTPS, HTTP
2. Go to security groups and set the port range to 3000 as it runs on that port. anywhere and 0.0.0.0/0
3. Login to EC2 instance and run below commands

```bash
sudo apt update

# Installing nodejs
curl -sL https://deb.nodesource.com/setup_20.x|sudo -E bash -

sudo apt-get install nodejs -y

sudo npm install -g npm@latest
```
## Next we need Filezilla
1. Press Ctrl+s and add site name in the left side and on the right select the SFTP and provide the hostname em2-54-* and set the login type to keyfile and set the key file that you have downloaded.
2. Click connect.
3. Now select the local directorly(left) and ubuntu directory(right) select the files from local and upload then to ec2.

## Now go back to Ec2
1. Check the file contents

```bash
npm install

# if its a static site
npm run build

npm start

# if its not a static site
npm run dev
```
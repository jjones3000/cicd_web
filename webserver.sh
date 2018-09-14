#!/bin/bash/
sudo ssh -i /home/ec2-user/cicd_web.pem ec2-user@54.145.211.128
cd /var/www/html/
git clone https://github.com/jjones3000/cicd_web.git/ /var/www/html/
#!/bin/bash/
sudo ssh -i /home/ec2-user/cicd_web.pem ec2-user@52.91.156.49
sudo git pull https://github.com/jjones3000/cicd_web.git /var/www/html/
## Background:
-Domain Registration Origination: namecheap.com<br> 

-Domain Name: unit-3-project.alexanderjpoy.me<br> 

-Transfer of DNS to Digital Ocean from that domain registrar: Within Namecheap's advanced DNS settings (Domain List=>Mange=>Nameservers), three nameservers must be specified (ns1.digitalocean.com, ns2.digitalocean.com, ns3.digitalocean.com).<br> 

-Digital Ocean A Record Subdomain: In Digital Ocean an A record for an subdomain can be created by first created a droplet (VM). Once that is set up by navigating to the Digital Ocean Homepage, entering the Networking page, entering a domain and choosing the droplet you would like to host the domain. Within the domain, there is the section to create a new record. Make sure A is selected and the desired subdomain name is typed within the Hostname Field. In the next field an IP can be manually specified or a droplet can be selected to use its public IP. TTL is left as default and a record can then be created by hitting the "Create Record" button. <br> 

-Reverse Proxy: In the created VM a reverse proxy was set up by installing nginx on our VM and using ranger to navigate to /etc/nginx/sites-availble/default and creating a server block to run our server at port 8000.<br> 

-SSL Certification: Let's Encrypt offers free TLS/SSL certificates and does that through Certbot. For this project (with our server running Ubuntu 22.04 and having our domain havining an associated A record pointing to our server's public IP) SSL Certification was achieved through the use of the command "certbot --nginx" in after<br> 

## Icebox items:
-Add modal for login/signup <br>
-Add modal for cart/checkout <br>
-Upon checkout dsplay "purchased" jpgs <br>
-Overlay images on site with div item to precent copying and saving <br> 
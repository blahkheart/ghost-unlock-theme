# Ghost Unlock Theme

 A clean, minimal theme inspired by Ghost's default Casper theme for the Ghost publishing platform integrating Unlock Protocol. 
 [Unlock Protocol](https://unlock-protocol.com) is a web3 protocol for memberships, which allows creators to token-gate content, events, and more using programmable decentralized blockchain technology on ethereum.


**Install ghost CLI if you don't have it installed already** 
```bash
npm install ghost-cli@latest -g 
```

**Clone the repo:** 

```bash
# clone repo
git clone https://github.com/blahkheart/ghost-unlock-theme.git` 

# go to `current` directory
cd ghost-unlock-theme/current

# install dependencies
yarn install
```

**Set up `config.development.json`**
```bash
# go to project root directory
cd ..

# copy and rename sample config file
cp sample.config.development.json config.development.json

```

- Edit `"contentPath": "path/to/ghost-unlock-theme/content"` to the appropriate folder location on your file system

- Set up mail service:
```json
"mail": {
    "transport": "SMTP",
    "options": {
      "host": "smtp.mailtrap.io", // can be any mail provider or create an account with mailtrap 
      "port": 2525,
      "auth": {
        "user": "get_from_mail_provider",
        "pass": "get_from_mail_provider"
      }
    }
}
```

- Ensure `"filename": "path/to/database-file.db"` points to the correct location on your file system i.e 
`".../ghost-unlock-theme/content/data/ghost-local.db"`

**Navigate to content directory**

```bash
# go to theme root directory
cd ghost-unlock-theme/content/themes/unlock

# install dependencies
yarn install
```

Run `ghost start` 

Your app will be started on `http:localhost:2368`

Checkout `content/themes/unlock/README.md` for more information.

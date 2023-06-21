Using node version >= 16.14.2

Create `.env.local` in root folder and copy these variables:

```
NEXT_PUBLIC_API_URL = https://cms.v2.papagroup.net/api/
NEXT_PUBLIC_BASE_URL = https://cms.v2.papagroup.net/
```

Create `.env.sample` in root folder and copy these variables:

```
PROJECT_NAME=papasite
PROJECT_BASE_URL=v2.papagroup.net
SSL_EMAIL=papagroup.net+papasite-dev@gmail.com

STACK_NAME=papasite
PROJECT_ROOT=/home/papagroup/papasite/papagroupdotnet

DOCKER_IMAGE=papagroup/private:papasite--nextjs-dev-1.0
APP_PORT=3000

NEXT_PUBLIC_API_URL = https://cms-v2.papagroup.net/api/
NEXT_PUBLIC_BASE_URL = https://cms-v2.papagroup.net/
NEXT_PUBLIC_CMS_DOMAIN = cms-v2.papagroup.net/
```

Set up with : npm install

Run dev with : npm run dev

open browser : http://localhost:3000

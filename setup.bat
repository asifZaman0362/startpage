echo 'Setting up custom startpage for Firefox...'
echo 'Git Repo: https://github.com/asifZaman0362/startpage'

xcopy autoconfig.js 'c:\Program Files\Mozilla Firefox\defaults\pref\autoconfig.js'
xcopy firefox.cfg 'c:\Program Files\Mozilla Firefox\firefox.cfg'

echo 'Successfully installed New Tab page.'
echo > NUL

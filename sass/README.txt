/---------------------------------Read Me Carefully---------------------------------/

To start using SASS follow these instructions thoroughly: 

install ruby from http://rubyinstaller.org/downloads/
(ideally a 64bit latest version - check OS before you download)
on installation destination check the 3 checkboxes

	1 - Install Tc/Tk Support
	2 - Add Ruby executable path
	3 - Associate .rb and .rbw

------ check all the boxes.

After successful installation 
open command prompt and put following command

	gem install sass -v 3.4.3


if you face this error :
	ERROR:  Could not find a valid gem 'sass' (= 3.4.3), here is why:
          Unable to download data from https://rubygems.org/ - Errno::ETIMEDOUT: Failed to open TCP connection to api.rubygems.org:443 (A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond. - connect(2) for "api.rubygems.org" port 443) (https://api.rubygems.org/specs.4.8.gz)

try this command:
	gem install --http-proxy http://dev01isa01:8080 sass -v 3.4.3

This should install your sass application and your ready to compile sass.

Navigate your command prompt to you sass folder.
	cd d:\37-Online\xyz\
you should  find your "sass" and "css" folders at the same level.

once in xyz folder,

run this command to start compiling you scss file to css


Sass Commond To compile and genrate Css Output.

sass --watch sass\style.scss:css\style.css --sourcemap=none --style compressed

in your css folder you should be able to see "style.css"
and thats your file for checking into teamsite.


Also, if you have any IE specific changes (ie8 and below namely)
add your code in to files mentioned in "ie.scss"
Similar command to compile your ie css as well.

sass --watch sass\ie.scss:css\ie.css --sourcemap=none --style compressed


/---Css Out put after compile  -

1-Style.css

For Example :-

D:\37-Online\Online_UI\UI\Web.UIAssets\UIAssets\GB\Rewards\default>sass --watch
 sass\style.scss:css\style.css --sourcemap=none --style compressed

 2-ie.css

For Example :-

 D:\37-Online\Online_UI\UI\Web.UIAssets\UIAssets\GB\Rewards\default>sass --watch
 sass\ie.scss:css\ie.css --sourcemap=none --style compressed
---/

# Join URI QR Code

This component displays the current Flow's JoinURI on a page as a QR code.




## Setup

- Grab the files from the /build folder and import into your tenant.

- Add the files to your player code like this: -

        requires: ['core', 'bootstrap3'],
        customResources: [
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/JoinQRCode.js',
                ],


- Add a component to your page, any type, save it then change it's "componentType" to "JoinQRCode" in the metadata editor and save it.
e.g. 
            "componentType": "JoinQRCode",

-Set the "width" of the component to control the QR Code's size in pixels.


## Extra Configuration

You can add attributes to the component to control it's appearance: -

- logo          - the url of an image to use as the QR background.
- logoWidth     - the pixel width of the logo - default is size * 0.2
- logoHeight    - the pixel height of the logo - default is size * 0.2
- logoOpacity   - the opacity of the logo between 0 & 1.


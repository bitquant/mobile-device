# mobile-device
Detection of mobile devices based on user-agent

## Install
```
$ npm install mobile-device
```

## Usage
```javascript
const isMobileDevice = require("mobile-device");

// isMobileDevice => true
const ipadUserAgent = 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1';
const iphoneUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';
const androidTabletUserAgent = 'Mozilla/5.0 (Linux; Android 7.1.1; SM-T555 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.96 Safari/537.36';
const androidPhoneUserAgent = 'Mozilla/5.0 (Linux; Android 6.0.1; RedMi Note 5 Build/RB3N5C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36';

// isMobileDevice => false
const windowsDesktopChrome = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36';
const linuxDesktopFirefox = 'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:24.0) Gecko/20100101 Firefox/24.0';
const macDesktopSafari = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15';

console.log(`ipadUserAgent: ${isMobileDevice(ipadUserAgent)}`);
console.log(`iphoneUserAgent: ${isMobileDevice(iphoneUserAgent)}`);
console.log(`androidTabletUserAgent: ${isMobileDevice(androidTabletUserAgent)}`);
console.log(`androidPhoneUserAgent: ${isMobileDevice(androidPhoneUserAgent)}`);
console.log(`windowsDesktopChrome: ${isMobileDevice(windowsDesktopChrome)}`);
console.log(`linuxDesktopFirefox: ${isMobileDevice(linuxDesktopFirefox)}`);
console.log(`macDesktopSafari: ${isMobileDevice(macDesktopSafari)}`);

/*
ipadUserAgent: true
iphoneUserAgent: true
androidTabletUserAgent: true
androidPhoneUserAgent: true
windowsDesktopChrome: false
linuxDesktopFirefox: false
macDesktopSafari: false
*/
```

## License
MIT license; see [LICENSE](./LICENSE).

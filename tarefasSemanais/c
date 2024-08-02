[33mcommit e483f702b9810acd4da7f643cd8bb9ed77897305[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: Geovanne <geovanheewofc123@gmail.com>
Date:   Tue Mar 26 13:58:04 2024 -0300

     primeira versao

[1mdiff --git a/.expo-shared/assets.json b/.expo-shared/assets.json[m
[1mnew file mode 100644[m
[1mindex 0000000..1e6decf[m
[1m--- /dev/null[m
[1m+++ b/.expo-shared/assets.json[m
[36m@@ -0,0 +1,4 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "12bb71342c6255bbf50437ec8f4441c083f47cdb74bd89160c15e4f43e52a1cb": true,[m
[32m+[m[32m  "40b842e832070c58deac6aa9e08fa459302ee3f9da492c7e77d93d2fbf4a56fd": true[m
[32m+[m[32m}[m
[1mdiff --git a/.gitignore b/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..ec8a36a[m
[1m--- /dev/null[m
[1m+++ b/.gitignore[m
[36m@@ -0,0 +1,14 @@[m
[32m+[m[32mnode_modules/[m
[32m+[m[32m.expo/[m
[32m+[m[32mdist/[m
[32m+[m[32mnpm-debug.*[m
[32m+[m[32m*.jks[m
[32m+[m[32m*.p8[m
[32m+[m[32m*.p12[m
[32m+[m[32m*.key[m
[32m+[m[32m*.mobileprovision[m
[32m+[m[32m*.orig.*[m
[32m+[m[32mweb-build/[m
[32m+[m
[32m+[m[32m# macOS[m
[32m+[m[32m.DS_Store[m
[1mdiff --git a/App.js b/App.js[m
[1mnew file mode 100644[m
[1mindex 0000000..42b4fd0[m
[1m--- /dev/null[m
[1m+++ b/App.js[m
[36m@@ -0,0 +1,46 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m[32mimport { View, ScrollView } from 'react-native';[m
[32m+[m[32mimport viewStyles from "./src/components/styles/viewStyles";[m
[32m+[m[32mimport { Card, Header } from "./src/components/body/body";[m
[32m+[m
[32m+[m[32mexport default function App() {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <ScrollView contentContainerStyle={viewStyles.scroll} showsVerticalScrollIndicator={false}>[m
[32m+[m[32m      <View style={viewStyles.container}>[m
[32m+[m[32m      <Header/>[m
[32m+[m[32m        <Card[m
[32m+[m[32m          title="Tomar café e me preparar para o dia"[m
[32m+[m[32m          description="Acordar às 09:00 e preparar-me para o dia ate as 12:00"[m
[32m+[m[32m          imageUrl="https://cdn.worldvectorlogo.com/logos/c--4.svg"[m
[32m+[m[32m          percent="12.5"[m
[32m+[m[32m        />[m
[32m+[m[32m        <Card[m
[32m+[m[32m          title="Ir para a escola"[m
[32m+[m[32m          description="Ficar na escola das 12:00 até as 19:00."[m
[32m+[m[32m          imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg"[m
[32m+[m[32m          percent="29.2"[m
[32m+[m[32m        />[m
[32m+[m[32m        <Card[m
[32m+[m[32m          title="Estudar programação"[m
[32m+[m[32m          description="Estudar programação das 19:00 até as 21:00."[m
[32m+[m[32m          imageUrl="https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg"[m
[32m+[m[32m          percent="8.3"[m
[32m+[m[32m        />[m
[32m+[m[32m        <Card[m
[32m+[m[32m          title="Lazer"[m
[32m+[m[32m          description="Tempo livre das 21:00 às 00:00."[m
[32m+[m[32m          imageUrl="https://www.svgrepo.com/show/303206/javascript-logo.svg"[m
[32m+[m[32m          percent="12.5"[m
[32m+[m[32m        />[m
[32m+[m[32m        <Card[m
[32m+[m[32m          title="Dormir à meia-noite"[m
[32m+[m[32m          description="Ir para a cama às 00:00 para descansar até as 09:00"[m
[32m+[m[32m          imageUrl="https://cdn.worldvectorlogo.com/logos/c.svg"[m
[32m+[m[32m          percent="37.5"[m
[32m+[m[32m        />[m
[32m+[m[32m      </View>[m
[32m+[m[32m    </ScrollView>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// Por Geovanne e Maria E. S.[m
\ No newline at end of file[m
[1mdiff --git a/app.json b/app.json[m
[1mnew file mode 100644[m
[1mindex 0000000..ce307d3[m
[1m--- /dev/null[m
[1m+++ b/app.json[m
[36m@@ -0,0 +1,32 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "expo": {[m
[32m+[m[32m    "name": "projetoExpo",[m
[32m+[m[32m    "slug": "projetoExpo",[m
[32m+[m[32m    "version": "1.0.0",[m
[32m+[m[32m    "orientation": "portrait",[m
[32m+[m[32m    "icon": "./assets/icon.png",[m
[32m+[m[32m    "splash": {[m
[32m+[m[32m      "image": "./assets/splash.png",[m
[32m+[m[32m      "resizeMode": "contain",[m
[32m+[m[32m      "backgroundColor": "#ffffff"[m
[32m+[m[32m    },[m
[32m+[m[32m    "updates": {[m
[32m+[m[32m      "fallbackToCacheTimeout": 0[m
[32m+[m[32m    },[m
[32m+[m[32m    "assetBundlePatterns": [[m
[32m+[m[32m      "**/*"[m
[32m+[m[32m    ],[m
[32m+[m[32m    "ios": {[m
[32m+[m[32m      "supportsTablet": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "android": {[m
[32m+[m[32m      "adaptiveIcon": {[m
[32m+[m[32m        "foregroundImage": "./assets/adaptive-icon.png",[m
[32m+[m[32m        "backgroundColor": "#FFFFFF"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "web": {[m
[32m+[m[32m      "favicon": "./assets/favicon.png"[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/assets/adaptive-icon.png b/assets/adaptive-icon.png[m
[1mnew file mode 100644[m
[1mindex 0000000..03d6f6b[m
Binary files /dev/null and b/assets/adaptive-icon.png differ
[1mdiff --git a/assets/favicon.png b/assets/favicon.png[m
[1mnew file mode 100644[m
[1mindex 0000000..e75f697[m
Binary files /dev/null and b/assets/favicon.png differ
[1mdiff --git a/assets/icon.png b/assets/icon.png[m
[1mnew file mode 100644[m
[1mindex 0000000..a0b1526[m
Binary files /dev/null and b/assets/icon.png differ
[1mdiff --git a/assets/splash.png b/assets/splash.png[m
[1mnew file mode 100644[m
[1mindex 0000000..0e89705[m
Binary files /dev/null and b/assets/splash.png differ
[1mdiff --git a/babel.config.js b/babel.config.js[m
[1mnew file mode 100644[m
[1mindex 0000000..2900afe[m
[1m--- /dev/null[m
[1m+++ b/babel.config.js[m
[36m@@ -0,0 +1,6 @@[m
[32m+[m[32mmodule.exports = function(api) {[m
[32m+[m[32m  api.cache(true);[m
[32m+[m[32m  return {[m
[32m+[m[32m    presets: ['babel-preset-expo'],[m
[32m+[m[32m  };[m
[32m+[m[32m};[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..e927378[m
[1m--- /dev/null[m
[1m+++ b/package-lock.json[m
[36m@@ -0,0 +1,13019 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "meu-app",[m
[32m+[m[32m  "version": "1.0.0",[m
[32m+[m[32m  "lockfileVersion": 3,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "packages": {[m
[32m+[m[32m    "": {[m
[32m+[m[32m      "name": "meu-app",[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@expo/metro-runtime": "~3.1.3",[m
[32m+[m[32m        "expo": "~50.0.8",[m
[32m+[m[32m        "expo-status-bar": "~1.11.1",[m
[32m+[m[32m        "react": "18.2.0",[m
[32m+[m[32m        "react-dom": "18.2.0",[m
[32m+[m[32m        "react-native": "0.73.4",[m
[32m+[m[32m        "react-native-web": "~0.19.6"[m
[32m+[m[32m      },[m
[32m+[m[32m      "devDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.20.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@ampproject/remapping": {[m
[32m+[m[32m      "version": "2.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-lFMjJTrFL3j7L9yBxwYfCq2k6qqwHyzuUl/XBnif78PWTJYyL/dfowQHWE3sp6U6ZzqWiiIZnpTMO96zhkjwtg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@jridgewell/gen-mapping": "^0.3.0",[m
[32m+[m[32m        "@jridgewell/trace-mapping": "^0.3.9"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/code-frame": {[m
[32m+[m[32m      "version": "7.23.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.23.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-CgH3s1a96LipHCmSUmYFPwY7MNx8C3avkq7i4Wl3cfa662ldtUe4VM1TPXX70pfmrlWTb6jLqTYrZyT2ZTJBgA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/highlight": "^7.23.4",[m
[32m+[m[32m        "chalk": "^2.4.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/compat-data": {[m
[32m+[m[32m      "version": "7.23.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.23.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-uU27kfDRlhfKl+w1U6vp16IuvSLtjAxdArVXPa9BvLkrr7CYIsxH5adpHObeAGY/41+syctUWOZ140a2Rvkgjw==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/core": {[m
[32m+[m[32m      "version": "7.24.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.24.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-fQfkg0Gjkza3nf0c7/w6Xf34BW4YvzNfACRLmmb7XRLa6XHdR+K9AlJlxneFfWYf6uhOzuzZVTjF/8KfndZANw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@ampproject/remapping": "^2.2.0",[m
[32m+[m[32m        "@babel/code-frame": "^7.23.5",[m
[32m+[m[32m        "@babel/generator": "^7.23.6",[m
[32m+[m[32m        "@babel/helper-compilation-targets": "^7.23.6",[m
[32m+[m[32m        "@babel/helper-module-transforms": "^7.23.3",[m
[32m+[m[32m        "@babel/helpers": "^7.24.0",[m
[32m+[m[32m        "@babel/parser": "^7.24.0",[m
[32m+[m[32m        "@babel/template": "^7.24.0",[m
[32m+[m[32m        "@babel/traverse": "^7.24.0",[m
[32m+[m[32m        "@babel/types": "^7.24.0",[m
[32m+[m[32m        "convert-source-map": "^2.0.0",[m
[32m+[m[32m        "debug": "^4.1.0",[m
[32m+[m[32m        "gensync": "^1.0.0-beta.2",[m
[32m+[m[32m        "json5": "^2.2.3",[m
[32m+[m[32m        "semver": "^6.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/babel"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/generator": {[m
[32m+[m[32m      "version": "7.23.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.23.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-qrSfCYxYQB5owCmGLbl8XRpX1ytXlpueOb0N0UmQwA073KZxejgQTzAmJezxvpwQD9uGtK2shHdi55QT+MbjIw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.23.6",[m
[32m+[m[32m        "@jridgewell/gen-mapping": "^0.3.2",[m
[32m+[m[32m        "@jridgewell/trace-mapping": "^0.3.17",[m
[32m+[m[32m        "jsesc": "^2.5.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-annotate-as-pure": {[m
[32m+[m[32m      "version": "7.22.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.22.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-LvBTxu8bQSQkcyKOU+a1btnNFQ1dMAd0R6PyW3arXes06F6QLWLIrd681bxRPIXlrMGR3XYnW9JyML7dP3qgxg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.22.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {[m
[32m+[m[32m      "version": "7.22.15",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.22.15.tgz",[m
[32m+[m[32m      "integrity": "sha512-QkBXwGgaoC2GtGZRoma6kv7Szfv06khvhFav67ZExau2RaXzy8MpHSMO2PNoP2XtmQphJQRHFfg77Bq731Yizw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.22.15"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-compilation-targets": {[m
[32m+[m[32m      "version": "7.23.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.23.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-9JB548GZoQVmzrFgp8o7KxdgkTGm6xs9DW0o/Pim72UDjzr5ObUQ6ZzYPqA+g9OTS2bBQoctLJrky0RDCAWRgQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/compat-data": "^7.23.5",[m
[32m+[m[32m        "@babel/helper-validator-option": "^7.23.5",[m
[32m+[m[32m        "browserslist": "^4.22.2",[m
[32m+[m[32m        "lru-cache": "^5.1.1",[m
[32m+[m[32m        "semver": "^6.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-create-class-features-plugin": {[m
[32m+[m[32m      "version": "7.24.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.24.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-QAH+vfvts51BCsNZ2PhY6HAggnlS6omLLFTsIpeqZk/MmJ6cW7tgz5yRv0fMJThcr6FmbMrENh1RgrWPTYA76g==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-annotate-as-pure": "^7.22.5",[m
[32m+[m[32m        "@babel/helper-environment-visitor": "^7.22.20",[m
[32m+[m[32m        "@babel/helper-function-name": "^7.23.0",[m
[32m+[m[32m        "@babel/helper-member-expression-to-functions": "^7.23.0",[m
[32m+[m[32m        "@babel/helper-optimise-call-expression": "^7.22.5",[m
[32m+[m[32m        "@babel/helper-replace-supers": "^7.22.20",[m
[32m+[m[32m        "@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",[m
[32m+[m[32m        "@babel/helper-split-export-declaration": "^7.22.6",[m
[32m+[m[32m        "semver": "^6.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-create-regexp-features-plugin": {[m
[32m+[m[32m      "version": "7.22.15",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.22.15.tgz",[m
[32m+[m[32m      "integrity": "sha512-29FkPLFjn4TPEa3RE7GpW+qbE8tlsu3jntNYNfcGsc49LphF1PQIiD+vMZ1z1xVOKt+93khA9tc2JBs3kBjA7w==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-annotate-as-pure": "^7.22.5",[m
[32m+[m[32m        "regexpu-core": "^5.3.1",[m
[32m+[m[32m        "semver": "^6.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-define-polyfill-provider": {[m
[32m+[m[32m      "version": "0.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-NovQquuQLAQ5HuyjCz7WQP9MjRj7dx++yspwiyUiGl9ZyadHRSql1HZh5ogRd8W8w6YM6EQ/NTB8rgjLt5W65Q==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-compilation-targets": "^7.22.6",[m
[32m+[m[32m        "@babel/helper-plugin-utils": "^7.22.5",[m
[32m+[m[32m        "debug": "^4.1.1",[m
[32m+[m[32m        "lodash.debounce": "^4.0.8",[m
[32m+[m[32m        "resolve": "^1.14.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-environment-visitor": {[m
[32m+[m[32m      "version": "7.22.20",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.22.20.tgz",[m
[32m+[m[32m      "integrity": "sha512-zfedSIzFhat/gFhWfHtgWvlec0nqB9YEIVrpuwjruLlXfUSnA8cJB0miHKwqDnQ7d32aKo2xt88/xZptwxbfhA==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-function-name": {[m
[32m+[m[32m      "version": "7.23.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.23.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-OErEqsrxjZTJciZ4Oo+eoZqeW9UIiOcuYKRJA4ZAgV9myA+pOXhhmpfNCKjEH/auVfEYVFJ6y1Tc4r0eIApqiw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/template": "^7.22.15",[m
[32m+[m[32m        "@babel/types": "^7.23.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-hoist-variables": {[m
[32m+[m[32m      "version": "7.22.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.22.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-wGjk9QZVzvknA6yKIUURb8zY3grXCcOZt+/7Wcy8O2uctxhplmUPkOdlgoNhmdVee2c92JXbf1xpMtVNbfoxRw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.22.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-member-expression-to-functions": {[m
[32m+[m[32m      "version": "7.23.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.23.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-6gfrPwh7OuT6gZyJZvd6WbTfrqAo7vm4xCzAXOusKqq/vWdKXphTpj5klHKNmRUU6/QRGlBsyU9mAIPaWHlqJA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.23.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-module-imports": {[m
[32m+[m[32m      "version": "7.22.15",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.22.15.tgz",[m
[32m+[m[32m      "integrity": "sha512-0pYVBnDKZO2fnSPCrgM/6WMc7eS20Fbok+0r88fp+YtWVLZrp4CkafFGIp+W0VKw4a22sgebPT99y+FDNMdP4w==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.22.15"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-module-transforms": {[m
[32m+[m[32m      "version": "7.23.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.23.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-7bBs4ED9OmswdfDzpz4MpWgSrV7FXlc3zIagvLFjS5H+Mk7Snr21vQ6QwrsoCGMfNC4e4LQPdoULEt4ykz0SRQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-environment-visitor": "^7.22.20",[m
[32m+[m[32m        "@babel/helper-module-imports": "^7.22.15",[m
[32m+[m[32m        "@babel/helper-simple-access": "^7.22.5",[m
[32m+[m[32m        "@babel/helper-split-export-declaration": "^7.22.6",[m
[32m+[m[32m        "@babel/helper-validator-identifier": "^7.22.20"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-optimise-call-expression": {[m
[32m+[m[32m      "version": "7.22.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.22.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-HBwaojN0xFRx4yIvpwGqxiV2tUfl7401jlok564NgB9EHS1y6QT17FmKWm4ztqjeVdXLuC4fSvHc5ePpQjoTbw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.22.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-plugin-utils": {[m
[32m+[m[32m      "version": "7.24.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.24.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-9cUznXMG0+FxRuJfvL82QlTqIzhVW9sL0KjMPHhAOOvpQGL8QtdxnBKILjBqxlHyliz0yCa1G903ZXI/FuHy2w==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-remap-async-to-generator": {[m
[32m+[m[32m      "version": "7.22.20",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.22.20.tgz",[m
[32m+[m[32m      "integrity": "sha512-pBGyV4uBqOns+0UvhsTO8qgl8hO89PmiDYv+/COyp1aeMcmfrfruz+/nCMFiYyFF/Knn0yfrC85ZzNFjembFTw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-annotate-as-pure": "^7.22.5",[m
[32m+[m[32m        "@babel/helper-environment-visitor": "^7.22.20",[m
[32m+[m[32m        "@babel/helper-wrap-function": "^7.22.20"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-replace-supers": {[m
[32m+[m[32m      "version": "7.22.20",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.22.20.tgz",[m
[32m+[m[32m      "integrity": "sha512-qsW0In3dbwQUbK8kejJ4R7IHVGwHJlV6lpG6UA7a9hSa2YEiAib+N1T2kr6PEeUT+Fl7najmSOS6SmAwCHK6Tw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-environment-visitor": "^7.22.20",[m
[32m+[m[32m        "@babel/helper-member-expression-to-functions": "^7.22.15",[m
[32m+[m[32m        "@babel/helper-optimise-call-expression": "^7.22.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-simple-access": {[m
[32m+[m[32m      "version": "7.22.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.22.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-n0H99E/K+Bika3++WNL17POvo4rKWZ7lZEp1Q+fStVbUi8nxPQEBOlTmCOxW/0JsS56SKKQ+ojAe2pHKJHN35w==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.22.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {[m
[32m+[m[32m      "version": "7.22.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.22.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-tK14r66JZKiC43p8Ki33yLBVJKlQDFoA8GYN67lWCDCqoL6EMMSuM9b+Iff2jHaM/RRFYl7K+iiru7hbRqNx8Q==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.22.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-split-export-declaration": {[m
[32m+[m[32m      "version": "7.22.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.22.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-AsUnxuLhRYsisFiaJwvp1QF+I3KjD5FOxut14q/GzovUe6orHLesW2C7d754kRm53h5gqrz6sFl6sxc4BVtE/g==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.22.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-string-parser": {[m
[32m+[m[32m      "version": "7.23.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.23.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-803gmbQdqwdf4olxrX4AJyFBV/RTr3rSmOj0rKwesmzlfhYNDEs+/iOcznzpNWlJlIlTJC2QfPFcHB6DlzdVLQ==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-validator-identifier": {[m
[32m+[m[32m      "version": "7.22.20",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.22.20.tgz",[m
[32m+[m[32m      "integrity": "sha512-Y4OZ+ytlatR8AI+8KZfKuL5urKp7qey08ha31L8b3BwewJAoJamTzyvxPR/5D+KkdJCGPq/+8TukHBlY10FX9A==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-validator-option": {[m
[32m+[m[32m      "version": "7.23.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.23.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-85ttAOMLsr53VgXkTbkx8oA6YTfT4q7/HzXSLEYmjcSTJPMPQtvq1BD79Byep5xMUYbGRzEpDsjUf3dyp54IKw==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-wrap-function": {[m
[32m+[m[32m      "version": "7.22.20",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.22.20.tgz",[m
[32m+[m[32m      "integrity": "sha512-pms/UwkOpnQe/PDAEdV/d7dVCoBbB+R4FvYoHGZz+4VPcg7RtYy2KP7S2lbuWM6FCSgob5wshfGESbC/hzNXZw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-function-name": "^7.22.5",[m
[32m+[m[32m        "@babel/template": "^7.22.15",[m
[32m+[m[32m        "@babel/types": "^7.22.19"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helpers": {[m
[32m+[m[32m      "version": "7.24.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.24.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ulDZdc0Aj5uLc5nETsa7EPx2L7rM0YJM8r7ck7U73AXi7qOV44IHHRAYZHY6iU1rr3C5N4NtTmMRUJP6kwCWeA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/template": "^7.24.0",[m
[32m+[m[32m        "@babel/traverse": "^7.24.0",[m
[32m+[m[32m        "@babel/types": "^7.24.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/highlight": {[m
[32m+[m[32m      "version": "7.23.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.23.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-acGdbYSfp2WheJoJm/EBBBLh/ID8KDc64ISZ9DYtBmC8/Q204PZJLHyzeB5qMzJ5trcOkybd78M4x2KWsUq++A==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-validator-identifier": "^7.22.20",[m
[32m+[m[32m        "chalk": "^2.4.2",[m
[32m+[m[32m        "js-tokens": "^4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/parser": {[m
[32m+[m[32m      "version": "7.24.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.24.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-QuP/FxEAzMSjXygs8v4N9dvdXzEHN4W1oF3PxuWAtPo08UdM17u89RDMgjLn/mlc56iM0HlLmVkO/wgR+rDgHg==",[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "parser": "bin/babel-parser.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": {[m
[32m+[m[32m      "version": "7.23.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression/-/plugin-bugfix-safari-id-destructuring-collision-in-function-expression-7.23.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-iRkKcCqb7iGnq9+3G6rZ+Ciz5VywC4XNRHe57lKM+jOeYAoR0lVqdeeDRfh0tQcTfw/+vBhHn926FmQhLtlFLQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-plugin-utils": "^7.22.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {[m
[32m+[m[32m      "version": "7.23.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.23.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-WwlxbfMNdVEpQjZmK5mhm7oSwD3dS6eU+Iwsi4Knl9wAletWem7kaRsGOG+8UEbRyqxY4SS5zvtfXwX+jMxUwQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-plugin-utils": "^7.22.5",[m
[32m+[m[32m        "@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",[m
[32m+[m[32m        "@babel/plugin-transform-optional-chaining": "^7.23.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.13.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": {[m
[32m+[m[32m      "version": "7.23.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly/-/plugin-bugfix-v8-static-class-fields-redefine-readonly-7.23.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-LlRT7HgaifEpQA1ZgLVOIJZZFVPWN5iReq/7/JixwBtwcoeVGDBD53ZV28rrsLYOZs1Y/EHhA8N/Z6aazHR8cw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-environment-visitor": "^7.22.20",[m
[32m+[m[32m        "@babel/helper-plugin-utils": "^7.22.5"
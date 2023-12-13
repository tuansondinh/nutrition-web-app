'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "976e4d93c81b67d64452f673562039dc",
"index.html": "b2be7357ed90ea2ddd2b3d6570b1356c",
"/": "b2be7357ed90ea2ddd2b3d6570b1356c",
"main.dart.js": "6e1d73394217b288dae0fcde34cb67ac",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1565c7c32c736adc4019d7d5a46cffcc",
".git/config": "958cd2d670ecc6cea82029d51953e7e7",
".git/objects/61/a385adb0cc4af8f18f530cd395693986388cd3": "1e878a3ce3347c5c91344ddd52411fcc",
".git/objects/61/cd605eb30d24e3b5292dd211889926870655c0": "9399f7d58814ecefaba13e2ebf21cab2",
".git/objects/59/50f9d9c5871026bb18cfe48533351e4e0363a1": "1c9c6ccd571b6b2ef766df4a8d33cc60",
".git/objects/66/3cbb501d9803a11a76ea6c3c43c094b6c67a12": "8f2d5d9026ebff0986c53e16bcac23ca",
".git/objects/57/ab06e5cf743dfe0d39edebd599836023156738": "1fc685b20bd5e68ef98d516078c12445",
".git/objects/03/5c5cb61f9a9c6b32da1534565f5dcc3576b85d": "9001eeef21fca2cedc712ae2ed3ad1d6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/ca579873ce32258acb17ea2afeaf5695324b61": "7a9f47f670be65fce6d87c269315aef1",
".git/objects/32/4c433e4912e4412cada58ea8f65bb039dbf99e": "7f1133a34685e6a7e0b5cdc647c16bbc",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/50c40727fae7383854472102672cc5069a9f2b": "a6ea614b398787b123da75821827b844",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/5a/eb5570d131daba8c3a93e0ac7cbbdad40e70b2": "40f32879a36253b03d4ea1923f6113b5",
".git/objects/05/b0649de6cae2c17b59e45aa097c43f8a775296": "bbb9e2cea30206bf92a649e80e2d81a3",
".git/objects/ad/cc270535c6096b3e9b938858a2c6271eba19d9": "29827369de616f2095a9b0e9cf58bfae",
".git/objects/ad/6d4f8af9212a00f4d6670922fe34cec38cd37e": "34bf00b432049261760c127aa583cb94",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/8b27ee878e623e99d0cd4e2d133472bd88b4b7": "5cf9ee0f824a7393591f1121cd37b5c3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/bd/78f1b34fe6b2a56285ae88b442f3530c5b24ac": "1ebe3836ff05fa0be8a2dd87fb9a8670",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/96614cc93f20a5d7bd39836a98c7501afaf843": "c0e976150e8b954ea0f09564b1e15ade",
".git/objects/d8/d8630f3591fd37bf77327b01ae3d46b8d689b5": "258e91d777f11b5b8b361380b11a10e0",
".git/objects/ab/5b3bbf50ab1fc70405f8601a4bc23ce8956e28": "85d7dc5476ce3e63f0ed8eb09b83e200",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/232b7bfc6f2412eeb0448b5c7fc1f56ac310db": "678bad403218b5d7fde988f6a6c505bc",
".git/objects/f3/bc1c80432aafb432c008553aba25638446af21": "ab3b5323d0d04f3c6f9b2e760aa755b6",
".git/objects/f3/5de0352f1c370712bc16e523706d4c647754c3": "d06c9cc4711af9ca383f65bfdd20d27a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/2626a2d8a899c8650ff00157ee248638fa1e8b": "23191a943d8e15f6ddb98618dfa3baca",
".git/objects/ee/3c5a79180d72a33cb3e8fc2c61b6ddfc866170": "51e564696de3dc64c489ee728ae085e8",
".git/objects/ee/a37345a44f72d9fff0265562345d3e7996371d": "6eefbdb9e4c08dc1d514838d92ea4d8c",
".git/objects/c9/e8c28f42db67cb0ab43709e7cd4063db15a65d": "f93a4fe66599505e7f575ecde0111785",
".git/objects/c9/d37c7767bac3c34dede3a9ed3bfb4aeb9d95c1": "3a5fa28bc0fc59cceca38d15400bfeeb",
".git/objects/fc/9e3599849635acc8e31ccae3f3ab0678ea56ea": "04269e46d2ef909f15bd468ff71de443",
".git/objects/fd/aad03e091a7e7fd25ee605611201d328463b0f": "0899edcfa05b89c150db8fcca6467ace",
".git/objects/f2/b9645a15bdb5156571ad374af67e7939c76b11": "bfbfe5b8ba7f39f66a83b6df18606d35",
".git/objects/f5/f8c38d5765b9cd895ac2dad82b420164b1a94c": "560a69af62eced96cd49b5b82130e715",
".git/objects/e3/a08c64d09fd08b930423719f4bfbe23e2c850d": "c01e87cc958c2b68ca145715672773d3",
".git/objects/e3/8c484ddcb9c673b375c180eeee443022e3fe33": "9f99b33f87eceb28e7221487b1e1d048",
".git/objects/e4/a00a738c7d6377d7efc80bb7dfda44d517d02e": "f1db1b1f0fa7f6cf1fdce098e47c370d",
".git/objects/c8/02d23da5c42de0ee4984c5268066302d34bc49": "ef3f04e82ae5136f2d1e8b52759a5a29",
".git/objects/fb/e65d9881f8241441ec7f8eaa07178bdd537736": "478fbbf03e6b9479ffd1a985c7f1b3dc",
".git/objects/4e/2c8be02a2537e8024e51b37a525d55471bcf81": "e37f86d7c628e5be3b03e61aaca7b751",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/faf2cc073af337538ce625263fef45c2e3901e": "5e064ebb92f35076152eca8cdecb3d28",
".git/objects/4b/1898d27ef238066db7b00091727a4e74bded05": "a99d1be308642034cc954432d8845eee",
".git/objects/7c/9843ec9e1eb9b0e7a98590c189e77a2e8d8758": "f9dfd7e27c06435366ecdddebb995dba",
".git/objects/89/fc07d46880b1ae28d0be706bafb9c839373950": "225e362473225630bda33947ef85d3e5",
".git/objects/73/a92d82ebfcdd18808229c4a8c6d2ec6300c5d0": "c0e4dfcef52d639b82984dcd1af6de8c",
".git/objects/73/b330d89d4e4f8014813e58d4d63d76e853337f": "a6fc1407317724224f6a734b04598d97",
".git/objects/74/27d7dc7d23e60f5d1531db0f53405fcfdc8802": "6ce4fdca39a723a7b4e794ee88871b0b",
".git/objects/1a/7ffd9578da85c360d117c705ddbf1d11929aa2": "a71dc393b900b7adbe1d47c1a89060ed",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/4c/611d43c220a4550e2885ae3d6d465a9929c256": "9895c52a54d0070d5a1c7d94f357520d",
".git/objects/26/775bb2da6edc091e377ab10e91c99f50a5ce2f": "d27bc8ee91096b8f3e317641c624de7f",
".git/objects/2a/e056c6cab6987d335be1da8af767485155570f": "6fc89351916906884de9ad7c08a607fb",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/06c6b93f438e67bfd19f8f77b972cb50047e18": "c635fcac88b28d4c9be0a23d2561bc8f",
".git/objects/6b/f181f7ce49264d2508f4ef853fd8126e2351e2": "bfa61b372229158a7e8db6e02c556a72",
".git/objects/00/2d4641ee1523f3cb9dac073904cf9f64861f42": "c4c92e7852bbb8d8f620407dec6186b1",
".git/objects/5c/c2b978d35249a2d5cd3064ac3e3f18fffd74fe": "157429a5d2ad363912aaff1785c173c6",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/96/70418470156bed46639ba8a48bed16c3b8adbd": "aa085952cb1de812bd9c3fe86e23b66e",
".git/objects/3a/39d95b4587c6a65b69fb5b2a550b799b5bc854": "d7b881497094420a2c1a97a1ae4d6b74",
".git/objects/98/8b480dda1df781dda776dbe7ab6ae7964af2ef": "0fe027ef47f07cd3f98eb1eb4b84e9cb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/08/1b54b4bd7405b87c02caab8d9c17f285194472": "70148e3aa530cd8c3dd0ae3d4e1a0aa2",
".git/objects/39/bc627ff46722ec4576bcc4f474eee723084a11": "bb92b3a180142dacd96f023d7fcda9e8",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/360944e5720aa501cdbae6a9a8421231af8a67": "e8d33e8fa1efcebbde118e30ccd74b09",
".git/objects/63/08938ae6dbd5c0a7bb3ccb3beac9e65f1cfbf5": "73d2e5c2510a971b4c3f516e499d9b43",
".git/objects/0a/d4aa80eca16e47ba8a5d12d67414a57eff1735": "a062070bee0aed489a1722da7be05192",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a0/1fc35dbd2a5891a71b300e8b0980d7be1860a0": "e41d6fd30ebd23453f56bfb6b2fd3b9c",
".git/objects/b6/0897248f50c70a4490fddf6242950bca4ce7ec": "6aa3d5ad5894a69ac629f077c3436ffd",
".git/objects/d5/1026bcab4d2654c887c8b09ef16b4e6c17f485": "b010b1a8f6ec75e94e4ef7677b4980e1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/c57e15ec7383c6f8bf00052b6b401956612568": "c477044647e25b871e54e4543efe4ca3",
".git/objects/de/7ce08473e15be3f38402212c821a678cfc1696": "7920aa7e758048d3c1df70463639dfb1",
".git/objects/a6/477ca777914d309160aac293be22a39aff4ab5": "60b4b0328566f7022a03495181958623",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0763143278fd5f2789d21a68b15882d0bfea32": "7488c4536fa0ba23456c52677043a23a",
".git/objects/a1/ccbc78d5473aeb9772a47cce2c5d6dd9fcd54f": "a69b37b4b69bb67428b2f6121c286032",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/58d49017423ce3b95c4d152ebb690ab4bf7354": "065279aadea28eb9d43626da89ec7402",
".git/objects/ea/abf37e45e59d2c8bc74cb942d8e7343a4121ae": "128e5eaebb059b6ab1bc75bcffb089ff",
".git/objects/e6/001cfe18c331ea5b99c4dbeab48db3d2f38210": "3875d86e0c07ccafad9581e9cc8570f4",
".git/objects/e6/24a7c61628f9208db9ca16f13628a3bef1994c": "e6d066e9ed3d1866aab592dbad952eeb",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/e9/502e59ac34f795831540d1eaedcc088d94a5b1": "83ff106dc46144df40d7e7d425d86b52",
".git/objects/e7/f96da4593f0a15ea5523ecbe60c3351aaeaf1a": "7efb19bf2abd658dba181f673d7a2248",
".git/objects/cb/f9071c87e5aa592ded3addd85cdd453dc5b656": "a5ba3a85a5484effc88f09dd9c4293ab",
".git/objects/cb/dcf044c326c7f900c9ce23aef88c408852411d": "858861b8c7c4779ee5d71c81643ca560",
".git/objects/f8/623ee41cd94a2605076902c5c28822601a5830": "468e640dd8bae156ae80c7df22660125",
".git/objects/e0/17b27a6bd06abe14e52d9e9ed9fa4bc7708066": "0a6334b93cf43378399d67ed41f78e1f",
".git/objects/e0/f0874ffd38e4ba6f0f31d6cc4613747a07a0e5": "f781574a46841e5cd705de69bdaf53a6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/ba341a5291d9f6aa8afaa2952f09f6c3234d3f": "02853b17e53341f0511a0a6f196be268",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/005593ea4a440cd4b8bb9d600ea306c502f12d": "650ea27424f8517fb9a5e909d932dd1e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/4b51878363d7c0b012f5c5d7d56afdde9d0c10": "ff26f3ff1c508345523aa49c9127c493",
".git/objects/77/c85f86a48a503b567cbb09a4d6a92149603e83": "36256ead60d07db8337b1ac7fc3adcfc",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/78e6bd94805375690b38e31bb164e26809d5bb": "72bd939c48d36e1d244cd18c911cef96",
".git/objects/1e/3da40275f76dbb35e24f778f1fb338e2c96d9d": "f35fda6c69f8c5c0ec397aab34fd9f12",
".git/objects/4a/806e9ca095700b18747f2daf082cc98f414c45": "83eaa1493e2487890794a680f6500fcb",
".git/objects/24/344d8a3f1927e826f7c1734eca4c8ade48172f": "f3b9d1c12bd10b8e509bf69806e8515e",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/49/24633e687d9f7c7e9f0bbb9250c2767af6efa4": "a4c8c189d8f3faab4e9b0d406aed3189",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/2e/082a651ca395e67ff5d0b4070389cc3a8671d0": "ea0df0ac5fbfd5554dd02b051f6da6d7",
".git/objects/47/19c758f4813302336cf60bbdb23ba5fdc10004": "252875904507ff0d1883ed464c1171cb",
".git/objects/47/f473cf6120f4d3e70c27a35faf4032b6e6f61f": "8a61a98cdf31f24785631c5338b3829d",
".git/objects/13/10f8c7f836ab0131eb32fa89c2122b739d416b": "56d69e2ae0996198838bb3cf6c313c9e",
".git/objects/8e/4887f182581808d59d0cf68b4697445c7aebec": "119ba20d1aab7359a33e375bbe66c034",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f4812868abade7062393723f550191e7",
".git/logs/refs/heads/master": "f4812868abade7062393723f550191e7",
".git/logs/refs/remotes/nutrition-web-app/master": "2c9fac610d4377d274e01cf30a9efb71",
".git/logs/refs/stash": "61d85e9ef07aa9d7148adc0437813adb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "94a6f5988ab051f1acf1a3059458f46d",
".git/refs/remotes/nutrition-web-app/master": "94a6f5988ab051f1acf1a3059458f46d",
".git/refs/stash": "f7309d515b642bcebfa4612dcc5bfb5f",
".git/index": "d5eef26c481ff3fb9a6599b2ba1fc4ff",
".git/COMMIT_EDITMSG": "727184e2332c977c0c6f8d7b9eae5625",
".git/FETCH_HEAD": "b88558ab45da06bc2e645f4c9bb51609",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "fb6231520be8da28e28fa2903b1f6431",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

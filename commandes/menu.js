const {
  france
} = require(__dirname + "/../framework/france");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + '/../set');
const runtime = function (_0x420a45) {
  _0x420a45 = Number(_0x420a45);
  var _0x40ba6f = Math.floor(_0x420a45 / 86400);
  var _0x3ff79c = Math.floor(_0x420a45 % 86400 / 0xe10);
  var _0x4a0ed0 = Math.floor(_0x420a45 % 0xe10 / 0x3c);
  var _0x4f9718 = Math.floor(_0x420a45 % 0x3c);
  var _0x198f0e = _0x40ba6f > 0x0 ? _0x40ba6f + (_0x40ba6f == 0x1 ? " day, " : " d, ") : '';
  var _0x3eb8e5 = _0x3ff79c > 0x0 ? _0x3ff79c + (_0x3ff79c == 0x1 ? " hour, " : " h, ") : '';
  var _0x310662 = _0x4a0ed0 > 0x0 ? _0x4a0ed0 + (_0x4a0ed0 == 0x1 ? " minute, " : " m, ") : '';
  var _0x5d421c = _0x4f9718 > 0x0 ? _0x4f9718 + (_0x4f9718 == 0x1 ? " second" : " s") : '';
  return _0x198f0e + _0x3eb8e5 + _0x310662 + _0x5d421c;
};
france({
  'nomCom': "menu",
  'categorie': "General"
}, async (_0x2bffd3, _0x46f438, _0x377029) => {
  var _0x21cf85 = {};
  var _0x48cdea = 'public';
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x48cdea = "private";
  }
  _0x5f2755.map(async (_0x3ed373, _0x51a5f4) => {
    if (!_0x21cf85[_0x3ed373.categorie]) {
      _0x21cf85[_0x3ed373.categorie] = [];
    }
    _0x21cf85[_0x3ed373.categorie].push(_0x3ed373.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  const _0x54b7be = moment().format("HH:mm:ss");
  const _0x17478f = moment().format("DD/MM/YYYY");
  let _0x32d16a = "\n╭──────❂𝐁𝐌𝐖-𝐌𝐃❂────❂\n╏✺╭─────────────❂\n╏✺│ BMW : MI6OP\n╏✺│ User :  " + s.OWNER_NAME + "\n╏✺│ Time : " + _0x54b7be + "  \n╏✺│ Platform : Linux\n╏✺│ Date : " + _0x17478f + " \n╏✺│ Mode : " + _0x48cdea + "\n╏✺│ Storage : *128/225*\n╏✺│ Ram : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + " \n╏✺│ Uptime : " + runtime(process.uptime()) + " \n╏✺╰──────────────❂\n╰──────❂╏✺╏✺╏✺╏❂─────❂ \n\n";
  let _0x4c4f33 = "  \n\n┃✵┃✵┃✵┃✵┃✵┃✵┃✵┃✵┃✵┃✵┃  \n❂✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺❂\n";
  for (const _0x15959f in _0x21cf85) {
    _0x4c4f33 += "*╭────❂* *" + _0x15959f + "* *❂✵*";
    for (const _0x3f83c1 of _0x21cf85[_0x15959f]) {
      _0x4c4f33 += "\n*╏❂* " + _0x3f83c1;
    }
    _0x4c4f33 += "\n*╰═════════════❂* \n";
  }
  _0x4c4f33 += "\n❂            ❂\n*————— ❂ —————*\n\n  *𝐈𝐛𝐫𝐚𝐡𝐢𝐦 𝐀𝐝𝐚𝐦𝐬*                                         \n*╰═════════════❂*\n";
  var _0x22d051 = _0x55e063();
  if (_0x22d051.match(/\.(mp4|gif)$/i)) {
    try {
      _0x46f438.sendMessage(_0x2bffd3, {
        'video': {
          'url': _0x22d051
        },
        'caption': _0x32d16a + _0x4c4f33,
        'footer': "Je suis *Zokou-MD*, développé par Djalega++",
        'gifPlayback': true
      }, {
        'quoted': _0x9df408
      });
    } catch (_0x3a04d2) {
      console.log("🥵🥵 Menu erreur " + _0x3a04d2);
      _0x2a156f("🥵🥵 Menu erreur " + _0x3a04d2);
    }
  } else {
    if (_0x22d051.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x46f438.sendMessage(_0x2bffd3, {
          'image': {
            'url': _0x22d051
          },
          'caption': _0x32d16a + _0x4c4f33,
          'footer': "*📌France King*"
        }, {
          'quoted': _0x9df408
        });
      } catch (_0x4e0d8e) {
        console.log("🥵🥵 Menu erreur " + _0x4e0d8e);
        _0x2a156f("🥵🥵 Menu erreur " + _0x4e0d8e);
      }
    } else {
      _0x2a156f(_0x32d16a + _0x4c4f33);
    }
  }
});

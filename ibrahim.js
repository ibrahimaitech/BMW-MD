/** 
 ___  __  __ __      __       __  __  ___  
| _ )|  \/  |\ \    / /      |  \/  ||   \ 
| _ \| |\/| | \ \/\/ /       | |\/| || |) |
|___/|_|  |_|  \_/\_/        |_|  |_||___/ 

 Made by Ibrahim Adams


 Nothing here 

 Blank space

































































































































































































































































































































'use strict';

var __createBinding = this && this.__createBinding || (Object.create ? function (_0xd2f61d, _0x180870, _0xd93999, _0x226274) {
  if (_0x226274 === undefined) {
    _0x226274 = _0xd93999;
  }
  var _0x33ba2f = Object.getOwnPropertyDescriptor(_0x180870, _0xd93999);
  if (!_0x33ba2f || ("get" in _0x33ba2f ? !_0x180870.__esModule : _0x33ba2f.writable || _0x33ba2f.configurable)) {
    _0x33ba2f = {
      'enumerable': true,
      'get': function () {
        return _0x180870[_0xd93999];
      }
    };
  }
  Object.defineProperty(_0xd2f61d, _0x226274, _0x33ba2f);
} : function (_0x45df29, _0x285394, _0x26599a, _0x5c16b0) {
  if (_0x5c16b0 === undefined) {
    _0x5c16b0 = _0x26599a;
  }
  _0x45df29[_0x5c16b0] = _0x285394[_0x26599a];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x1f1102, _0x53353e) {
  Object.defineProperty(_0x1f1102, "default", {
    'enumerable': true,
    'value': _0x53353e
  });
} : function (_0x687d7e, _0x52b5fa) {
  _0x687d7e["default"] = _0x52b5fa;
});
var __importStar = this && this.__importStar || function (_0xe51ef7) {
  if (_0xe51ef7 && _0xe51ef7.__esModule) {
    return _0xe51ef7;
  }
  var _0x24a829 = {};
  if (_0xe51ef7 != null) {
    for (var _0x486d8a in _0xe51ef7) if (_0x486d8a !== "default" && Object.prototype.hasOwnProperty.call(_0xe51ef7, _0x486d8a)) {
      __createBinding(_0x24a829, _0xe51ef7, _0x486d8a);
    }
  }
  __setModuleDefault(_0x24a829, _0xe51ef7);
  return _0x24a829;
};
var __importDefault = this && this.__importDefault || function (_0x3454ed) {
  return _0x3454ed && _0x3454ed.__esModule ? _0x3454ed : {
    'default': _0x3454ed
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1['default'].child({});
logger.level = 'silent';
const pino = require('pino');
const boom_1 = require("@hapi/boom");
const conf = require('./set');
let fs = require("fs-extra");
let path = require('path');
const FileType = require("file-type");
const {
  verifierEtatJid,
  recupererActionJid
} = require('./bdd/antilien');
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./bdd/antibot");
let evt = require(__dirname + "/framework/france");
let {
  reagir
} = require(__dirname + "/framework/app");
var session = conf.session.replace(/Bmw-MD-WHATSAPP-BOT;;;=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/auth/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + '/auth/creds.json', atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/auth/creds.json") && session != "zokk") {
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), 'utf8');
    }
  } catch (_0x15a64f) {
    console.log("Session Invalide " + _0x15a64f);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': 'silent',
    'stream': "store"
  })
});
setTimeout(() => {
  async function _0x3a3346() {
    0x0;
    0x0;
    const {
      state: _0x3bfa2e,
      saveCreds: _0x570865
    } = await baileys_1.useMultiFileAuthState(__dirname + "/auth");
    0x0;
    const _0x3b72cc = {
      'version': _0x1f8739,
      'logger': pino({
        'level': 'silent'
      }),
      'browser': ["Bmw-Md", "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x3bfa2e.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x3bfa2e.keys, logger)
      },
      'getMessage': async _0x3ef64f => {
        if (store) {
          const _0xf6bd66 = await store.loadMessage(_0x3ef64f.remoteJid, _0x3ef64f.id, undefined);
          return _0xf6bd66.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x236875 = baileys_1['default'](_0x3b72cc);
    store.bind(_0x236875.ev);
    setInterval(() => {
      store.writeToFile('store.json');
    }, 0xbb8);
    _0x236875.ev.on("messages.upsert", async _0x545c2c => {
      const {
        messages: _0xb688a1
      } = _0x545c2c;
      const _0x4d0875 = _0xb688a1[0x0];
      if (!_0x4d0875.message) {
        return;
      }
      const _0x2b61e8 = _0x32a9be => {
        if (!_0x32a9be) {
          return _0x32a9be;
        }
        if (/:\d+@/gi.test(_0x32a9be)) {
          0x0;
          let _0x1e3341 = baileys_1.jidDecode(_0x32a9be) || {};
          return _0x1e3341.user && _0x1e3341.server && _0x1e3341.user + '@' + _0x1e3341.server || _0x32a9be;
        } else {
          return _0x32a9be;
        }
      };
      0x0;
      var _0x38cbab = baileys_1.getContentType(_0x4d0875.message);
      var _0x45416b = _0x38cbab == "conversation" ? _0x4d0875.message.conversation : _0x38cbab == "imageMessage" ? _0x4d0875.message.imageMessage?.["caption"] : _0x38cbab == 'videoMessage' ? _0x4d0875.message.videoMessage?.['caption'] : _0x38cbab == 'extendedTextMessage' ? _0x4d0875.message?.['extendedTextMessage']?.["text"] : _0x38cbab == "buttonsResponseMessage" ? _0x4d0875?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x38cbab == 'listResponseMessage' ? _0x4d0875.message?.["listResponseMessage"]?.["singleSelectReply"]?.['selectedRowId'] : _0x38cbab == "messageContextInfo" ? _0x4d0875?.['message']?.['buttonsResponseMessage']?.["selectedButtonId"] || _0x4d0875.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x4d0875.text : '';
      var _0x4c1948 = _0x4d0875.key.remoteJid;
      var _0x5824a8 = _0x2b61e8(_0x236875.user.id);
      var _0x51e007 = _0x5824a8.split('@')[0x0];
      const _0x557d4e = _0x4c1948?.["endsWith"]("@g.us");
      var _0x1c44ef = _0x557d4e ? await _0x236875.groupMetadata(_0x4c1948) : '';
      var _0x29faf1 = _0x557d4e ? _0x1c44ef.subject : '';
      var _0x2d64c6 = _0x4d0875.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x42a318 = _0x2b61e8(_0x4d0875.message?.["extendedTextMessage"]?.["contextInfo"]?.['participant']);
      var _0x3acd79 = _0x557d4e ? _0x4d0875.key.participant ? _0x4d0875.key.participant : _0x4d0875.participant : _0x4c1948;
      if (_0x4d0875.key.fromMe) {
        _0x3acd79 = _0x5824a8;
      }
      var _0x1a9a87 = _0x557d4e ? _0x4d0875.key.participant : '';
      const {
        getAllSudoNumbers: _0x383104
      } = require("./bdd/sudo");
      const _0x3663ed = _0x4d0875.pushName;
      const _0x353ce7 = ["923184474176", '923004591719'];
      const _0x432f97 = await _0x383104();
      const _0x39e3a4 = [..._0x353ce7, _0x51e007, "254710772666", '254751284190', "254750948696", "254742063632", conf.NUMERO_OWNER].map(_0x437e90 => _0x437e90.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x2f20e9 = _0x39e3a4.concat(_0x432f97);
      const _0x337c52 = _0x2f20e9.includes(_0x3acd79);
      var _0x4e2580 = ["254710772666", '254751284190', "254750948696", "254742063632", ..._0x353ce7].map(_0x2d5aff => _0x2d5aff.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x3acd79);
      function _0x3c9690(_0x573f76) {
        _0x236875.sendMessage(_0x4c1948, {
          'text': _0x573f76
        }, {
          'quoted': _0x4d0875
        });
      }
      console.log("\t [][]...{BMW-MD}...[][]");
      if (_0x557d4e) {
        console.log("message from the group : " + _0x29faf1);
      }
      console.log("message sent By : [" + _0x3663ed + " : " + _0x3acd79.split('@s.whatsapp.net')[0x0] + " ]");
      console.log("message type : " + _0x38cbab);
      console.log("------ message content ------");
      console.log(_0x45416b);
      function _0x597449(_0x5e2508) {
        let _0x1d9551 = [];
        for (_0x545c2c of _0x5e2508) {
          if (_0x545c2c.admin == null) {
            continue;
          }
          _0x1d9551.push(_0x545c2c.id);
        }
        return _0x1d9551;
      }
      var _0x2f4c5f = conf.ETAT;
      if (_0x2f4c5f == 0x1) {
        await _0x236875.sendPresenceUpdate('available', _0x4c1948);
      } else {
        if (_0x2f4c5f == 0x2) {
          await _0x236875.sendPresenceUpdate('composing', _0x4c1948);
        } else if (_0x2f4c5f == 0x3) {
          await _0x236875.sendPresenceUpdate("recording", _0x4c1948);
        } else {
          await _0x236875.sendPresenceUpdate("unavailable", _0x4c1948);
        }
      }
      const _0x1bdf9e = _0x557d4e ? await _0x1c44ef.participants : '';
      let _0x2543e3 = _0x557d4e ? _0x597449(_0x1bdf9e) : '';
      const _0x1dbc50 = _0x557d4e ? _0x2543e3.includes(_0x3acd79) : false;
      var _0x304c61 = _0x557d4e ? _0x2543e3.includes(_0x5824a8) : false;
      const _0x38f403 = _0x45416b ? _0x45416b.trim().split(/ +/).slice(0x1) : null;
      const _0x44c1d7 = _0x45416b ? _0x45416b.startsWith(prefixe) : false;
      const _0x475900 = _0x44c1d7 ? _0x45416b.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x2ce5d2 = conf.URL.split(',');
      function _0x548b32() {
        const _0x2e2515 = Math.floor(Math.random() * _0x2ce5d2.length);
        const _0x2dbfe8 = _0x2ce5d2[_0x2e2515];
        return _0x2dbfe8;
      }
      var _0x188ee4 = {
        'superUser': _0x337c52,
        'dev': _0x4e2580,
        'verifGroupe': _0x557d4e,
        'mbre': _0x1bdf9e,
        'membreGroupe': _0x1a9a87,
        'verifAdmin': _0x1dbc50,
        'infosGroupe': _0x1c44ef,
        'nomGroupe': _0x29faf1,
        'auteurMessage': _0x3acd79,
        'nomAuteurMessage': _0x3663ed,
        'idBot': _0x5824a8,
        'verifZokouAdmin': _0x304c61,
        'prefixe': prefixe,
        'arg': _0x38f403,
        'repondre': _0x3c9690,
        'mtype': _0x38cbab,
        'groupeAdmin': _0x597449,
        'msgRepondu': _0x2d64c6,
        'auteurMsgRepondu': _0x42a318,
        'ms': _0x4d0875,
        'mybotpic': _0x548b32
      };
      if (_0x4d0875.message.protocolMessage && _0x4d0875.message.protocolMessage.type === 0x0 && conf.ADM.toLocaleLowerCase() === "yes") {
        if (_0x4d0875.key.fromMe || _0x4d0875.message.protocolMessage.key.fromMe) {
          console.log("Message supprimer me concernant");
          return;
        }
        console.log("Message supprimer");
        let _0x4dae12 = _0x4d0875.message.protocolMessage.key;
        try {
          const _0xee4024 = fs.readFileSync('./store.json', 'utf8');
          const _0x5d1707 = JSON.parse(_0xee4024);
          let _0xf8bebf = _0x5d1707.messages[_0x4dae12.remoteJid];
          let _0x6e5b40;
          for (let _0x396236 = 0x0; _0x396236 < _0xf8bebf.length; _0x396236++) {
            if (_0xf8bebf[_0x396236].key.id === _0x4dae12.id) {
              _0x6e5b40 = _0xf8bebf[_0x396236];
              break;
            }
          }
          if (_0x6e5b40 === null || !_0x6e5b40 || _0x6e5b40 === "undefined") {
            console.log("Message non trouver");
            return;
          }
          await _0x236875.sendMessage(_0x5824a8, {
            'image': {
              'url': "./media/deleted-message.jpg"
            },
            'caption': "        😈Anti-delete-message😈\n Message from @" + _0x6e5b40.key.participant.split('@')[0x0] + '​',
            'mentions': [_0x6e5b40.key.participant]
          }).then(() => {
            _0x236875.sendMessage(_0x5824a8, {
              'forward': _0x6e5b40
            }, {
              'quoted': _0x6e5b40
            });
          });
        } catch (_0xdf9579) {
          console.log(_0xdf9579);
        }
      }
      if (_0x4d0875.key && _0x4d0875.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x236875.readMessages([_0x4d0875.key]);
      }
      if (_0x4d0875.key && _0x4d0875.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x4d0875.message.extendedTextMessage) {
          var _0x496ca6 = _0x4d0875.message.extendedTextMessage.text;
          await _0x236875.sendMessage(_0x5824a8, {
            'text': _0x496ca6
          }, {
            'quoted': _0x4d0875
          });
        } else {
          if (_0x4d0875.message.imageMessage) {
            var _0x40c3ae = _0x4d0875.message.imageMessage.caption;
            var _0x396ce1 = await _0x236875.downloadAndSaveMediaMessage(_0x4d0875.message.imageMessage);
            await _0x236875.sendMessage(_0x5824a8, {
              'image': {
                'url': _0x396ce1
              },
              'caption': _0x40c3ae
            }, {
              'quoted': _0x4d0875
            });
          } else {
            if (_0x4d0875.message.videoMessage) {
              var _0x40c3ae = _0x4d0875.message.videoMessage.caption;
              var _0x52a4c6 = await _0x236875.downloadAndSaveMediaMessage(_0x4d0875.message.videoMessage);
              await _0x236875.sendMessage(_0x5824a8, {
                'video': {
                  'url': _0x52a4c6
                },
                'caption': _0x40c3ae
              }, {
                'quoted': _0x4d0875
              });
            }
          }
        }
      }
      if (!_0x4e2580 && _0x4c1948 == "120363158701337904@g.us") {
        return;
      }
      if (_0x45416b && _0x3acd79.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x4244f7
        } = require("./bdd/level");
        try {
          await _0x4244f7(_0x3acd79);
        } catch (_0x4b55f3) {
          console.error(_0x4b55f3);
        }
      }
      try {
        if (_0x4d0875.message[_0x38cbab].contextInfo.mentionedJid && (_0x4d0875.message[_0x38cbab].contextInfo.mentionedJid.includes(_0x5824a8) || _0x4d0875.message[_0x38cbab].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x4c1948 == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x337c52) {
            console.log("hummm");
            return;
          }
          let _0x4ddaf3 = require('./bdd/mention');
          let _0x1eb0e9 = await _0x4ddaf3.recupererToutesLesValeurs();
          let _0x2cab1f = _0x1eb0e9[0x0];
          if (_0x2cab1f.status === 'non') {
            console.log("mention pas actifs");
            return;
          }
          let _0x169dec;
          if (_0x2cab1f.type.toLocaleLowerCase() === "image") {
            _0x169dec = {
              'image': {
                'url': _0x2cab1f.url
              },
              'caption': _0x2cab1f.message
            };
          } else {
            if (_0x2cab1f.type.toLocaleLowerCase() === "video") {
              _0x169dec = {
                'video': {
                  'url': _0x2cab1f.url
                },
                'caption': _0x2cab1f.message
              };
            } else {
              if (_0x2cab1f.type.toLocaleLowerCase() === "sticker") {
                let _0x42666e = new Sticker(_0x2cab1f.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': 'transparent'
                });
                const _0x3ecac6 = await _0x42666e.toBuffer();
                _0x169dec = {
                  'sticker': _0x3ecac6
                };
              } else if (_0x2cab1f.type.toLocaleLowerCase() === 'audio') {
                _0x169dec = {
                  'audio': {
                    'url': _0x2cab1f.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x236875.sendMessage(_0x4c1948, _0x169dec, {
            'quoted': _0x4d0875
          });
        }
      } catch (_0x18b02a) {}
      try {
        const _0x3805b = await verifierEtatJid(_0x4c1948);
        if (_0x45416b.includes('https://') && _0x557d4e && _0x3805b) {
          console.log("lien detecté");
          var _0x27ec2e = _0x557d4e ? _0x2543e3.includes(_0x5824a8) : false;
          if (_0x337c52 || _0x1dbc50 || !_0x27ec2e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x272039 = {
            'remoteJid': _0x4c1948,
            'fromMe': false,
            'id': _0x4d0875.key.id,
            'participant': _0x3acd79
          };
          var _0x1c2af4 = "link detected, \n";
          var _0x2d0701 = new Sticker('https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif', {
            'pack': "Bmw-Md",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x2d0701.toFile("st1.webp");
          var _0x4a2e21 = await recupererActionJid(_0x4c1948);
          if (_0x4a2e21 === "remove") {
            _0x1c2af4 += "message deleted \n @" + _0x3acd79.split('@')[0x0] + " removed from group.";
            await _0x236875.sendMessage(_0x4c1948, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x236875.sendMessage(_0x4c1948, {
              'text': _0x1c2af4,
              'mentions': [_0x3acd79]
            }, {
              'quoted': _0x4d0875
            });
            try {
              await _0x236875.groupParticipantsUpdate(_0x4c1948, [_0x3acd79], "remove");
            } catch (_0x154246) {
              console.log("antiien ") + _0x154246;
            }
            await _0x236875.sendMessage(_0x4c1948, {
              'delete': _0x272039
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x4a2e21 === "delete") {
              _0x1c2af4 += "Goodbye \n @" + _0x3acd79.split('@')[0x0] + " Sending other group links here is prohibited!.";
              await _0x236875.sendMessage(_0x4c1948, {
                'text': _0x1c2af4,
                'mentions': [_0x3acd79]
              }, {
                'quoted': _0x4d0875
              });
              await _0x236875.sendMessage(_0x4c1948, {
                'delete': _0x272039
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x4a2e21 === 'warn') {
                const {
                  getWarnCountByJID: _0x2ad736,
                  ajouterUtilisateurAvecWarnCount: _0x2ce048
                } = require("./bdd/warn");
                let _0x1509ac = await _0x2ad736(_0x3acd79);
                let _0x4c4286 = conf.WARN_COUNT;
                if (_0x1509ac >= _0x4c4286) {
                  var _0x5083ad = "link detected , you will be remove because of reaching warn-limit";
                  await _0x236875.sendMessage(_0x4c1948, {
                    'text': _0x5083ad,
                    'mentions': [_0x3acd79]
                  }, {
                    'quoted': _0x4d0875
                  });
                  await _0x236875.groupParticipantsUpdate(_0x4c1948, [_0x3acd79], "remove");
                  await _0x236875.sendMessage(_0x4c1948, {
                    'delete': _0x272039
                  });
                } else {
                  var _0x2e83c6 = _0x4c4286 - _0x1509ac;
                  var _0x36d1f4 = "Link detected , your warn_count was upgrade ;\n rest : " + _0x2e83c6 + " ";
                  await _0x2ce048(_0x3acd79);
                  await _0x236875.sendMessage(_0x4c1948, {
                    'text': _0x36d1f4,
                    'mentions': [_0x3acd79]
                  }, {
                    'quoted': _0x4d0875
                  });
                  await _0x236875.sendMessage(_0x4c1948, {
                    'delete': _0x272039
                  });
                }
              }
            }
          }
        }
      } catch (_0x558df0) {
        console.log("bdd err " + _0x558df0);
      }
      try {
        const _0x1efc27 = _0x4d0875.key?.['id']?.["startsWith"]("BAES") && _0x4d0875.key?.['id']?.["length"] === 0x10;
        const _0x2aee69 = _0x4d0875.key?.['id']?.["startsWith"]("BAE5") && _0x4d0875.key?.['id']?.["length"] === 0x10;
        if (_0x1efc27 || _0x2aee69) {
          if (_0x38cbab === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x5963cd = await atbverifierEtatJid(_0x4c1948);
          if (!_0x5963cd) {
            return;
          }
          ;
          if (_0x1dbc50 || _0x3acd79 === _0x5824a8) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x40ead7 = {
            'remoteJid': _0x4c1948,
            'fromMe': false,
            'id': _0x4d0875.key.id,
            'participant': _0x3acd79
          };
          var _0x1c2af4 = "bot detected, \n";
          var _0x2d0701 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Bmw-Md",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': '#000000'
          });
          await _0x2d0701.toFile("st1.webp");
          var _0x4a2e21 = await atbrecupererActionJid(_0x4c1948);
          if (_0x4a2e21 === 'remove') {
            _0x1c2af4 += "message deleted \n @" + _0x3acd79.split('@')[0x0] + " removed from group.";
            await _0x236875.sendMessage(_0x4c1948, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x236875.sendMessage(_0x4c1948, {
              'text': _0x1c2af4,
              'mentions': [_0x3acd79]
            }, {
              'quoted': _0x4d0875
            });
            try {
              await _0x236875.groupParticipantsUpdate(_0x4c1948, [_0x3acd79], "remove");
            } catch (_0x544c5c) {
              console.log("antibot ", _0x544c5c);
            }
            await _0x236875.sendMessage(_0x4c1948, {
              'delete': _0x40ead7
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x4a2e21 === 'delete') {
              _0x1c2af4 += "message delete \n @" + _0x3acd79.split('@')[0x0] + " Avoid sending link.";
              await _0x236875.sendMessage(_0x4c1948, {
                'text': _0x1c2af4,
                'mentions': [_0x3acd79]
              }, {
                'quoted': _0x4d0875
              });
              await _0x236875.sendMessage(_0x4c1948, {
                'delete': _0x40ead7
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x4a2e21 === 'warn') {
                const {
                  getWarnCountByJID: _0x16d49d,
                  ajouterUtilisateurAvecWarnCount: _0x2cf933
                } = require("./bdd/warn");
                let _0xcbaecc = await _0x16d49d(_0x3acd79);
                let _0x5caf7b = conf.WARN_COUNT;
                if (_0xcbaecc >= _0x5caf7b) {
                  var _0x5083ad = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x236875.sendMessage(_0x4c1948, {
                    'text': _0x5083ad,
                    'mentions': [_0x3acd79]
                  }, {
                    'quoted': _0x4d0875
                  });
                  await _0x236875.groupParticipantsUpdate(_0x4c1948, [_0x3acd79], "remove");
                  await _0x236875.sendMessage(_0x4c1948, {
                    'delete': _0x40ead7
                  });
                } else {
                  var _0x2e83c6 = _0x5caf7b - _0xcbaecc;
                  var _0x36d1f4 = "bot detected , your warn_count was upgrade ;\n rest : " + _0x2e83c6 + " ";
                  await _0x2cf933(_0x3acd79);
                  await _0x236875.sendMessage(_0x4c1948, {
                    'text': _0x36d1f4,
                    'mentions': [_0x3acd79]
                  }, {
                    'quoted': _0x4d0875
                  });
                  await _0x236875.sendMessage(_0x4c1948, {
                    'delete': _0x40ead7
                  });
                }
              }
            }
          }
        }
      } catch (_0x34b87a) {
        console.log(".... " + _0x34b87a);
      }
      if (_0x44c1d7) {
        const _0x3f2aa2 = evt.cm.find(_0x5610ff => _0x5610ff.nomCom === _0x475900);
        if (_0x3f2aa2) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x337c52) {
              return;
            }
            if (!_0x337c52 && _0x4c1948 === _0x3acd79 && conf.PM_PERMIT === 'yes') {
              _0x3c9690("You don't have acces to commands here");
              return;
            }
            if (!_0x337c52 && _0x557d4e) {
              let _0x4fc156 = await isGroupBanned(_0x4c1948);
              if (_0x4fc156) {
                return;
              }
            }
            if (!_0x1dbc50 && _0x557d4e) {
              let _0x2dc3b3 = await isGroupOnlyAdmin(_0x4c1948);
              if (_0x2dc3b3) {
                return;
              }
            }
            if (!_0x337c52) {
              let _0x1554bd = await isUserBanned(_0x3acd79);
              if (_0x1554bd) {
                _0x3c9690("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x4c1948, _0x236875, _0x4d0875, _0x3f2aa2.reaction);
            _0x3f2aa2.fonction(_0x4c1948, _0x236875, _0x188ee4);
          } catch (_0x233c07) {
            console.log("😡😡 " + _0x233c07);
            _0x236875.sendMessage(_0x4c1948, {
              'text': "😡😡 " + _0x233c07
            }, {
              'quoted': _0x4d0875
            });
          }
        }
      }
    });
    const {
      recupevents: _0x48d9a4
    } = require("./bdd/welcome");
    _0x236875.ev.on('group-participants.update', async _0x2bd118 => {
      console.log(_0x2bd118);
      let _0x4811f2;
      try {
        _0x4811f2 = await _0x236875.profilePictureUrl(_0x2bd118.id, "image");
      } catch {
        _0x4811f2 = 'https://telegra.ph/file/4cc2712eee93c105f6739.jpg';
      }
      try {
        const _0x140f66 = await _0x236875.groupMetadata(_0x2bd118.id);
        if (_0x2bd118.action == "add" && (await _0x48d9a4(_0x2bd118.id, "welcome")) == 'on') {
          let _0x5c4e24 = "◇BMW-MD◇\n";
          let _0x3632d6 = _0x2bd118.participants;
          for (let _0x3ad492 of _0x3632d6) {
            _0x5c4e24 += "Hello @" + _0x3ad492.split('@')[0x0] + "\n";
          }
          _0x5c4e24 += "*You are welcomed here.* \n            \n*You MAY read the group description FOR more info and Avoid getting removed*\n            \n     \n            \n ◇ *GROUP DESCRIPTION*  ◇\n\n" + _0x140f66.desc + "\n\n📌Powered by *𝗜𝗯𝗿𝗮𝗵𝗶𝗺*";
          _0x236875.sendMessage(_0x2bd118.id, {
            'image': {
              'url': _0x4811f2
            },
            'caption': _0x5c4e24,
            'mentions': _0x3632d6
          });
        } else {
          if (_0x2bd118.action == "remove" && (await _0x48d9a4(_0x2bd118.id, 'goodbye')) == 'on') {
            let _0x5e9529 = "Goodbye to that Fallen soldier, Powered by *BMW-MD*;\n";
            let _0x6f5963 = _0x2bd118.participants;
            for (let _0x42935d of _0x6f5963) {
              _0x5e9529 += '@' + _0x42935d.split('@')[0x0] + "\n";
            }
            _0x236875.sendMessage(_0x2bd118.id, {
              'text': _0x5e9529,
              'mentions': _0x6f5963
            });
          } else {
            if (_0x2bd118.action == 'promote' && (await _0x48d9a4(_0x2bd118.id, 'antipromote')) == 'on') {
              if (_0x2bd118.author == _0x140f66.owner || _0x2bd118.author == conf.NUMERO_OWNER + '@s.whatsapp.net' || _0x2bd118.author == decodeJid(_0x236875.user.id) || _0x2bd118.author == _0x2bd118.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x236875.groupParticipantsUpdate(_0x2bd118.id, [_0x2bd118.author, _0x2bd118.participants[0x0]], 'demote');
              _0x236875.sendMessage(_0x2bd118.id, {
                'text': '@' + _0x2bd118.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x2bd118.author.split('@')[0x0] + " and @" + _0x2bd118.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x2bd118.author, _0x2bd118.participants[0x0]]
              });
            } else {
              if (_0x2bd118.action == "demote" && (await _0x48d9a4(_0x2bd118.id, "antidemote")) == 'on') {
                if (_0x2bd118.author == _0x140f66.owner || _0x2bd118.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x2bd118.author == decodeJid(_0x236875.user.id) || _0x2bd118.author == _0x2bd118.participants[0x0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x236875.groupParticipantsUpdate(_0x2bd118.id, [_0x2bd118.author], "demote");
                await _0x236875.groupParticipantsUpdate(_0x2bd118.id, [_0x2bd118.participants[0x0]], "promote");
                _0x236875.sendMessage(_0x2bd118.id, {
                  'text': '@' + _0x2bd118.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x2bd118.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x2bd118.author, _0x2bd118.participants[0x0]]
                });
              }
            }
          }
        }
      } catch (_0x20ea4d) {
        console.error(_0x20ea4d);
      }
    });
    async function _0x37e887() {
      const _0x2e0533 = require("node-cron");
      const {
        getCron: _0x3f4f8
      } = require("./bdd/cron");
      let _0x338d5f = await _0x3f4f8();
      console.log(_0x338d5f);
      if (_0x338d5f.length > 0x0) {
        for (let _0x1d5847 = 0x0; _0x1d5847 < _0x338d5f.length; _0x1d5847++) {
          if (_0x338d5f[_0x1d5847].mute_at != null) {
            let _0x3c4ed7 = _0x338d5f[_0x1d5847].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x338d5f[_0x1d5847].group_id + " a " + _0x3c4ed7[0x0] + " H " + _0x3c4ed7[0x1]);
            _0x2e0533.schedule(_0x3c4ed7[0x1] + " " + _0x3c4ed7[0x0] + " * * *", async () => {
              await _0x236875.groupSettingUpdate(_0x338d5f[_0x1d5847].group_id, "announcement");
              _0x236875.sendMessage(_0x338d5f[_0x1d5847].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
          if (_0x338d5f[_0x1d5847].unmute_at != null) {
            let _0x3791c1 = _0x338d5f[_0x1d5847].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x3791c1[0x0] + " H " + _0x3791c1[0x1] + " ");
            _0x2e0533.schedule(_0x3791c1[0x1] + " " + _0x3791c1[0x0] + " * * *", async () => {
              await _0x236875.groupSettingUpdate(_0x338d5f[_0x1d5847].group_id, 'not_announcement');
              _0x236875.sendMessage(_0x338d5f[_0x1d5847].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x236875.ev.on("contacts.upsert", async _0x5b3dda => {
      const _0x3061d9 = _0x682151 => {
        for (const _0x1b8f89 of _0x682151) {
          if (store.contacts[_0x1b8f89.id]) {
            Object.assign(store.contacts[_0x1b8f89.id], _0x1b8f89);
          } else {
            store.contacts[_0x1b8f89.id] = _0x1b8f89;
          }
        }
        return;
      };
      _0x3061d9(_0x5b3dda);
    });
    _0x236875.ev.on("connection.update", async _0x6307e => {
      const {
        lastDisconnect: _0xb61390,
        connection: _0x4dacf2
      } = _0x6307e;
      if (_0x4dacf2 === "connecting") {
        console.log("ℹ️ Connexion en cours...");
      } else {
        if (_0x4dacf2 === 'open') {
          console.log("✅ connexion reussie! ☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log('------');
          0x0;
          await baileys_1.delay(0x12c);
          console.log("------------------/-----");
          console.log("le bot est en ligne 🕸\n\n");
          console.log("chargement des commandes ...\n");
          fs.readdirSync(__dirname + "/commandes").forEach(_0x3b6187 => {
            if (path.extname(_0x3b6187).toLowerCase() == ".js") {
              try {
                require(__dirname + "/commandes/" + _0x3b6187);
                console.log(_0x3b6187 + " installé ✔️");
              } catch (_0x8f7708) {
                console.log(_0x3b6187 + " n'a pas pu être chargé pour les raisons suivantes : " + _0x8f7708);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x3d16d3;
          if (conf.MODE.toLocaleLowerCase() === 'yes') {
            _0x3d16d3 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x3d16d3 = 'private';
          } else {
            _0x3d16d3 = 'undefined';
          }
          console.log("chargement des commandes terminé ✅");
          await _0x37e887();
          if (conf.DP.toLowerCase() === "yes") {
            let _0x4b5e14 = "\n*『𝑩𝑴𝑾 𝑾𝑨𝑩𝑶𝑻 𝑪𝑶𝑵𝑵𝑬𝑪𝑻𝑬𝑫』*\n\n     \n║❒𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓: *𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔*\n║❒𝑷𝒓𝒊𝒗𝒂𝒄𝒚 :" + _0x3d16d3 + "\n║❒𝑨𝒍𝒍 𝒄𝒎𝒅𝒔 : " + evt.cm.length + "︎\n\n     \n     \n \n║❒ *𝑭𝒐𝒍𝒍𝒐𝒘 𝒕𝒉𝒊𝒔 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒇𝒐𝒓 𝒃𝒐𝒕 𝒖𝒑𝒅𝒂𝒕𝒆𝒔*\nhttps://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y\n\n║❒ *𝑭𝒐𝒓 𝒎𝒐𝒓𝒆 𝒊𝒏𝒇𝒐𝒓 𝒕𝒂𝒑 𝒐𝒏 𝒕𝒉𝒆 𝒍𝒊𝒏𝒌 𝒃𝒆𝒍𝒐𝒘* \nhttps://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO \n\n\n              *𝑴𝒂𝒅𝒆 𝒃𝒚 𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔*";
            await _0x236875.sendMessage(_0x236875.user.id, {
              'text': _0x4b5e14
            });
          }
        } else {
          if (_0x4dacf2 == "close") {
            let _0x5cd703 = new boom_1.Boom(_0xb61390?.["error"])?.["output"]["statusCode"];
            if (_0x5cd703 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id érronée veuillez rescanner le qr svp ...");
            } else {
              if (_0x5cd703 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x3a3346();
              } else {
                if (_0x5cd703 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connexion au serveur perdue 😞 ,,, reconnexion en cours ... ");
                  _0x3a3346();
                } else {
                  if (_0x5cd703 === baileys_1.DisconnectReason?.['connectionReplaced']) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x5cd703 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x5cd703 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x3a3346();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x5cd703);
                        const {
                          exec: _0x3fe115
                        } = require("child_process");
                        _0x3fe115("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x4dacf2);
            _0x3a3346();
          }
        }
      }
    });
    _0x236875.ev.on("creds.update", _0x570865);
    _0x236875.downloadAndSaveMediaMessage = async (_0x307810, _0x520f54 = '', _0x29ba2b = true) => {
      let _0x3bc8bc = _0x307810.msg ? _0x307810.msg : _0x307810;
      let _0x20e42f = (_0x307810.msg || _0x307810).mimetype || '';
      let _0x4f3fec = _0x307810.mtype ? _0x307810.mtype.replace(/Message/gi, '') : _0x20e42f.split('/')[0x0];
      0x0;
      const _0x1f7b1 = await baileys_1.downloadContentFromMessage(_0x3bc8bc, _0x4f3fec);
      let _0x10bc34 = Buffer.from([]);
      for await (const _0x5acd77 of _0x1f7b1) {
        _0x10bc34 = Buffer.concat([_0x10bc34, _0x5acd77]);
      }
      let _0x2ea91a = await FileType.fromBuffer(_0x10bc34);
      let _0x8f4876 = './' + _0x520f54 + '.' + _0x2ea91a.ext;
      await fs.writeFileSync(_0x8f4876, _0x10bc34);
      return _0x8f4876;
    };
    _0x236875.awaitForMessage = async (_0x4c452c = {}) => {
      return new Promise((_0x4e45dc, _0x13c76f) => {
        if (typeof _0x4c452c !== "object") {
          _0x13c76f(new Error("Options must be an object"));
        }
        if (typeof _0x4c452c.sender !== "string") {
          _0x13c76f(new Error("Sender must be a string"));
        }
        if (typeof _0x4c452c.chatJid !== "string") {
          _0x13c76f(new Error("ChatJid must be a string"));
        }
        if (_0x4c452c.timeout && typeof _0x4c452c.timeout !== "number") {
          _0x13c76f(new Error("Timeout must be a number"));
        }
        if (_0x4c452c.filter && typeof _0x4c452c.filter !== "function") {
          _0x13c76f(new Error("Filter must be a function"));
        }
        const _0x1eacd7 = _0x4c452c?.['timeout'] || undefined;
        const _0x1ab597 = _0x4c452c?.['filter'] || (() => true);
        let _0x309918 = undefined;
        let _0x2e6b46 = _0x2453f9 => {
          let {
            type: _0x512ed3,
            messages: _0x423551
          } = _0x2453f9;
          if (_0x512ed3 == "notify") {
            for (let _0x462e37 of _0x423551) {
              const _0x36dcc8 = _0x462e37.key.fromMe;
              const _0x4528e1 = _0x462e37.key.remoteJid;
              const _0x58cb57 = _0x4528e1.endsWith("@g.us");
              const _0x26d6f6 = _0x4528e1 == "status@broadcast";
              const _0x28a11d = _0x36dcc8 ? _0x236875.user.id.replace(/:.*@/g, '@') : _0x58cb57 || _0x26d6f6 ? _0x462e37.key.participant.replace(/:.*@/g, '@') : _0x4528e1;
              if (_0x28a11d == _0x4c452c.sender && _0x4528e1 == _0x4c452c.chatJid && _0x1ab597(_0x462e37)) {
                _0x236875.ev.off('messages.upsert', _0x2e6b46);
                clearTimeout(_0x309918);
                _0x4e45dc(_0x462e37);
              }
            }
          }
        };
        _0x236875.ev.on("messages.upsert", _0x2e6b46);
        if (_0x1eacd7) {
          _0x309918 = setTimeout(() => {
            _0x236875.ev.off("messages.upsert", _0x2e6b46);
            _0x13c76f(new Error('Timeout'));
          }, _0x1eacd7);
        }
      });
    };
    return _0x236875;
  }
  let _0x20dab8 = require.resolve(__filename);
  fs.watchFile(_0x20dab8, () => {
    fs.unwatchFile(_0x20dab8);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x20dab8];
    require(_0x20dab8);
  });
  _0x3a3346();
}, 0x1388);
**/










'use strict';const _0x5320ee=_0x2f4c;(function(_0x463099,_0x5500be){const _0x473034=_0x2f4c,_0x7b2403=_0x463099();while(!![]){try{const _0x23d71a=parseInt(_0x473034(0x188))/0x1+-parseInt(_0x473034(0x15a))/0x2+parseInt(_0x473034(0x1ab))/0x3*(parseInt(_0x473034(0x14d))/0x4)+parseInt(_0x473034(0x121))/0x5*(-parseInt(_0x473034(0xe5))/0x6)+-parseInt(_0x473034(0xf3))/0x7+parseInt(_0x473034(0x154))/0x8+parseInt(_0x473034(0x19d))/0x9*(parseInt(_0x473034(0xe3))/0xa);if(_0x23d71a===_0x5500be)break;else _0x7b2403['push'](_0x7b2403['shift']());}catch(_0x346873){_0x7b2403['push'](_0x7b2403['shift']());}}}(_0x3947,0x505d6));var __createBinding=this&&this[_0x5320ee(0x191)]||(Object[_0x5320ee(0x11b)]?function(_0xc165bc,_0x46ec30,_0x1c34a9,_0x5268b2){const _0x3e4e5d=_0x5320ee;_0x5268b2===undefined&&(_0x5268b2=_0x1c34a9);var _0x159c66=Object[_0x3e4e5d(0xcc)](_0x46ec30,_0x1c34a9);(!_0x159c66||(_0x3e4e5d(0xbb)in _0x159c66?!_0x46ec30[_0x3e4e5d(0x15e)]:_0x159c66['writable']||_0x159c66[_0x3e4e5d(0x1b9)]))&&(_0x159c66={'enumerable':!![],'get':function(){return _0x46ec30[_0x1c34a9];}}),Object[_0x3e4e5d(0xe1)](_0xc165bc,_0x5268b2,_0x159c66);}:function(_0x476a4e,_0x30ef32,_0x209d34,_0x3131ba){_0x3131ba===undefined&&(_0x3131ba=_0x209d34),_0x476a4e[_0x3131ba]=_0x30ef32[_0x209d34];}),__setModuleDefault=this&&this[_0x5320ee(0xdd)]||(Object[_0x5320ee(0x11b)]?function(_0x20698e,_0x584d0a){const _0x54ab06=_0x5320ee;Object[_0x54ab06(0xe1)](_0x20698e,_0x54ab06(0xdc),{'enumerable':!![],'value':_0x584d0a});}:function(_0x10209b,_0x3c6920){const _0x4ab63e=_0x5320ee;_0x10209b[_0x4ab63e(0xdc)]=_0x3c6920;}),__importStar=this&&this[_0x5320ee(0x166)]||function(_0xe92f07){const _0x125ab3=_0x5320ee;if(_0xe92f07&&_0xe92f07['__esModule'])return _0xe92f07;var _0x5cba0a={};if(_0xe92f07!=null){for(var _0x3fea2a in _0xe92f07)_0x3fea2a!==_0x125ab3(0xdc)&&Object[_0x125ab3(0x141)][_0x125ab3(0xbd)][_0x125ab3(0x196)](_0xe92f07,_0x3fea2a)&&__createBinding(_0x5cba0a,_0xe92f07,_0x3fea2a);}return __setModuleDefault(_0x5cba0a,_0xe92f07),_0x5cba0a;},__importDefault=this&&this[_0x5320ee(0xb8)]||function(_0x37c9b7){const _0xe0d4a2=_0x5320ee;return _0x37c9b7&&_0x37c9b7[_0xe0d4a2(0x15e)]?_0x37c9b7:{'default':_0x37c9b7};};Object[_0x5320ee(0xe1)](exports,_0x5320ee(0x15e),{'value':!![]});const baileys_1=__importStar(require(_0x5320ee(0x122))),logger_1=__importDefault(require('@whiskeysockets/baileys/lib/Utils/logger')),logger=logger_1[_0x5320ee(0xdc)][_0x5320ee(0xda)]({});logger[_0x5320ee(0xb0)]='silent';const pino=require(_0x5320ee(0x16d)),boom_1=require('@hapi/boom'),conf=require(_0x5320ee(0x150));let fs=require(_0x5320ee(0xaf)),path=require(_0x5320ee(0x183));const FileType=require(_0x5320ee(0xb5)),{verifierEtatJid,recupererActionJid}=require('./bdd/antilien'),{atbverifierEtatJid,atbrecupererActionJid}=require(_0x5320ee(0xca));let evt=require(__dirname+_0x5320ee(0x1c2)),{reagir}=require(__dirname+_0x5320ee(0xfd));function _0x2f4c(_0x219324,_0xb65882){const _0x3947b9=_0x3947();return _0x2f4c=function(_0x2f4cf1,_0x2870e7){_0x2f4cf1=_0x2f4cf1-0xa3;let _0x5b0871=_0x3947b9[_0x2f4cf1];return _0x5b0871;},_0x2f4c(_0x219324,_0xb65882);}var session=conf[_0x5320ee(0xe8)][_0x5320ee(0xc1)](/Bmw-MD-WHATSAPP-BOT;;;=>/g,'');const prefixe=conf[_0x5320ee(0x17b)];async function authentification(){const _0x3bbd1a=_0x5320ee;try{if(!fs[_0x3bbd1a(0x12b)](__dirname+'/auth/creds.json'))console[_0x3bbd1a(0xc0)](_0x3bbd1a(0x15f)),await fs[_0x3bbd1a(0xe9)](__dirname+_0x3bbd1a(0x167),atob(session),_0x3bbd1a(0x101));else fs[_0x3bbd1a(0x12b)](__dirname+'/auth/creds.json')&&session!=_0x3bbd1a(0x181)&&await fs[_0x3bbd1a(0xe9)](__dirname+'/auth/creds.json',atob(session),_0x3bbd1a(0x101));}catch(_0x5b72ec){console[_0x3bbd1a(0xc0)](_0x3bbd1a(0x110)+_0x5b72ec);return;}}authentification(),0x0;const store=baileys_1[_0x5320ee(0x1a1)]({'logger':pino()['child']({'level':_0x5320ee(0x189),'stream':'store'})});function _0x3947(){const _0x139ccb=['toFile','selectedButtonId','antibot\x20','\x20removed\x20from\x20group.','https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif','owner','./bdd/warn','./bdd/cron','------','audio','creds.update','Session\x20Invalide\x20','listResponseMessage','open','jidDecode','mise\x20à\x20jour\x20','useMultiFileAuthState','message\x20delete\x20\x0a\x20@','string','unlink','je\x20fais\x20rien','😡😡\x20','create','fonction','pm2\x20restart\x20all','readdirSync','Cas\x20de\x20superUser\x20je\x20fais\x20rien','undefined','7515NIjCbw','@whiskeysockets/baileys','available','s.whatsapp.net','nomCom','connexion\x20au\x20serveur\x20perdue\x20😞\x20,,,\x20reconnexion\x20en\x20cours\x20...\x20','toBuffer','@g.us','Timeout\x20must\x20be\x20a\x20number','groupParticipantsUpdate','existsSync','add','◇BMW-MD◇\x0a','./store.json','254750948696','\x20H\x20','fromMe','status@broadcast','extendedTextMessage','connectionClosed','antidemote','split','server','function','Hello,\x20it\x27s\x20time\x20to\x20close\x20the\x20group;\x20sayonara.','yes','awaitForMessage','le\x20bot\x20est\x20en\x20ligne\x20🕸\x0a\x0a','selectedRowId','Link\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20','demote','store.json','prototype','profilePictureUrl','delay','unavailable','mute_at','923184474176','object','/commandes','getContentType','not_announcement','....\x20','254710772666','12JOguiG','key','then','./set','ChatJid\x20must\x20be\x20a\x20string','conversation','#000000','68560RfDBOo','length','https://','pushName','PM_PERMIT','readMessages','19604hTcaks','startsWith','action','URL','__esModule','connexion\x20en\x20cour\x20...','text','link\x20detected\x20,\x20you\x20will\x20be\x20remove\x20because\x20of\x20reaching\x20warn-limit','composing','message\x20sent\x20By\x20:\x20[','An\x20Error\x20Occurred,\x20Repeat\x20Command!','caption','__importStar','/auth/creds.json','statusCode','antiien\x20','sendPresenceUpdate','*You\x20are\x20welcomed\x20here.*\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*You\x20MAY\x20read\x20the\x20group\x20description\x20FOR\x20more\x20info\x20and\x20Avoid\x20getting\x20removed*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20◇\x20*GROUP\x20DESCRIPTION*\x20\x20◇\x0a\x0a','redemarrage\x20sur\x20le\x20coup\x20de\x20l\x27erreur\x20\x20','pino','./bdd/mention','messageContextInfo','map','slice','254742063632','You\x20don\x27t\x20have\x20acces\x20to\x20commands\x20here','participants','status','connection.update','connectionLost','restartRequired','safari','\x0a\x0a📌Powered\x20by\x20*𝗜𝗯𝗿𝗮𝗵𝗶𝗺*','PREFIXE','recording','message\x20type\x20:\x20','concat','contacts.upsert','Goodbye\x20\x0a\x20@','zokk','bot\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20','path','Timeout','includes','ext','./bdd/sudo','231456vlSsLb','silent','✅\x20connexion\x20reussie!\x20☺️','shift','\x20*\x20*\x20*','BAE5','link\x20detected,\x20\x0a','Session\x20id\x20érronée\x20veuillez\x20rescanner\x20le\x20qr\x20svp\x20...','Hello\x20@','__createBinding','quotedMessage','schedule','makeCacheableSignalKeyStore','sender','call','antipromote','Good\x20morning;\x20It\x27s\x20time\x20to\x20open\x20the\x20group.','.\x20Consequently,\x20he\x20has\x20been\x20stripped\x20of\x20administrative\x20rights.','sendMessage','node-cron','goodbye','35955WnWNZu','connectionReplaced','ADM','remoteJid','makeInMemoryStore','\x20Avoid\x20sending\x20link.','Message\x20supprimer','warn','Les\x20crons\x20n\x27ont\x20pas\x20été\x20activés','promote','!!!\x20connexion\x20fermée,\x20reconnexion\x20en\x20cours\x20...','/auth','messages','message','309702GnIJQo','msg','etablissement\x20d\x27un\x20automute\x20pour\x20','DisconnectReason','announcement','url','videoMessage','.js','Boom','protocolMessage','\x20have\x20been\x20removed\x20from\x20administrative\x20rights.','connexion\x20réplacée\x20,,,\x20une\x20sesssion\x20est\x20déjà\x20ouverte\x20veuillez\x20la\x20fermer\x20svp\x20!!!','NUMERO_OWNER','assign','configurable','participant','contextInfo','︎\x0a\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x0a\x20\x0a║❒\x20*𝑭𝒐𝒍𝒍𝒐𝒘\x20𝒕𝒉𝒊𝒔\x20𝒄𝒉𝒂𝒏𝒏𝒆𝒍\x20𝒇𝒐𝒓\x20𝒃𝒐𝒕\x20𝒖𝒑𝒅𝒂𝒕𝒆𝒔*\x0ahttps://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y\x0a\x0a║❒\x20*𝑭𝒐𝒓\x20𝒎𝒐𝒓𝒆\x20𝒊𝒏𝒇𝒐𝒓\x20𝒕𝒂𝒑\x20𝒐𝒏\x20𝒕𝒉𝒆\x20𝒍𝒊𝒏𝒌\x20𝒃𝒆𝒍𝒐𝒘*\x20\x0ahttps://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO\x20\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*𝑴𝒂𝒅𝒆\x20𝒃𝒚\x20𝑰𝒃𝒓𝒂𝒉𝒊𝒎\x20𝑨𝒅𝒂𝒎𝒔*','mentionedJid','singleSelectReply','\x20has\x20violated\x20the\x20anti-demotion\x20rule\x20by\x20removing\x20@','cache','user','/framework/france','output','WARN_COUNT','close','message\x20deleted\x20\x0a\x20@','https://telegra.ph/file/4cc2712eee93c105f6739.jpg','unwatchFile','badSession','bdd\x20err\x20','group_id','from','keys','Filter\x20must\x20be\x20a\x20function','12345','------\x20message\x20content\x20------','vous\x20êtes\x20déconnecté,,,\x20veuillez\x20rescanner\x20le\x20code\x20qr\x20svp','imageMessage','remove','groupMetadata','off','resolve','fs-extra','level','endsWith','chatJid','sticker','number','file-type','AUTO_READ_STATUS','OWNER_NAME','__importDefault','audio/mp4','messages.upsert','get','\x20a\x20','hasOwnProperty','Message\x20non\x20trouver','writeToFile','log','replace','FULL','Bmw-Md','test','1.0.0','loggedOut','image','forEach','non','./bdd/antibot','@s.whatsapp.net','getOwnPropertyDescriptor','mtype','bot\x20detected,\x20\x0a','mimetype','loadMessage','toLowerCase','author','private','Sender\x20must\x20be\x20a\x20string','video','------------------/-----','ℹ️\x20Connexion\x20en\x20cours...','readFileSync','ETAT','child','chargement\x20des\x20commandes\x20terminé\x20✅','default','__setModuleDefault','chargement\x20des\x20commandes\x20...\x0a','toLocaleLowerCase','watchFile','defineProperty','Message\x20supprimer\x20me\x20concernant','350PHZaFk','\x20has\x20violated\x20the\x20anti-promotion\x20rule,\x20therefore\x20both\x20','606cmzvCh','parse','timeout','session','writeFileSync','contacts','child_process','./bdd/level','downloadContentFromMessage','Africa/Nairobi','creds','\x20n\x27a\x20pas\x20pu\x20être\x20chargé\x20pour\x20les\x20raisons\x20suivantes\x20:\x20','message\x20from\x20the\x20group\x20:\x20','desc','1391418YgCFhd','./media/deleted-message.jpg','downloadAndSaveMediaMessage','type','hum\x20','./media/chrono.webp','buttonsResponseMessage','error','hummm','push','/framework/app','You\x20are\x20banned\x20from\x20bot\x20commands','MODE','notify','utf8','filter','st1.webp','trim'];_0x3947=function(){return _0x139ccb;};return _0x3947();}setTimeout(()=>{const _0x51104f=_0x5320ee;async function _0x530105(){const _0x5ae695=_0x2f4c;0x0,0x0;const {state:_0x3e202b,saveCreds:_0x73280c}=await baileys_1[_0x5ae695(0x115)](__dirname+_0x5ae695(0x1a8));0x0;const _0x8b998a={'version':_0x1f8739,'logger':pino({'level':'silent'}),'browser':[_0x5ae695(0xc3),_0x5ae695(0x179),_0x5ae695(0xc5)],'printQRInTerminal':!![],'fireInitQueries':![],'shouldSyncHistoryMessage':!![],'downloadHistory':!![],'syncFullHistory':!![],'generateHighQualityLinkPreview':!![],'markOnlineOnConnect':![],'keepAliveIntervalMs':0x7530,'auth':{'creds':_0x3e202b[_0x5ae695(0xef)],'keys':baileys_1[_0x5ae695(0x194)](_0x3e202b[_0x5ae695(0xa5)],logger)},'getMessage':async _0xc8c2d0=>{const _0x179939=_0x5ae695;if(store){const _0x43a6be=await store[_0x179939(0xd0)](_0xc8c2d0[_0x179939(0x1a0)],_0xc8c2d0['id'],undefined);return _0x43a6be[_0x179939(0x1aa)]||undefined;}return{'conversation':_0x179939(0x164)};}};0x0;const _0xce9008=baileys_1[_0x5ae695(0xdc)](_0x8b998a);store['bind'](_0xce9008['ev']),setInterval(()=>{const _0x17d139=_0x5ae695;store[_0x17d139(0xbf)](_0x17d139(0x140));},0xbb8),_0xce9008['ev']['on'](_0x5ae695(0xba),async _0x3ac934=>{const _0x2b7be4=_0x5ae695,{messages:_0x4fad93}=_0x3ac934,_0x20e540=_0x4fad93[0x0];if(!_0x20e540['message'])return;const _0x90dbad=_0x4858cb=>{const _0xb031ee=_0x2f4c;if(!_0x4858cb)return _0x4858cb;if(/:\d+@/gi[_0xb031ee(0xc4)](_0x4858cb)){0x0;let _0x5d5f5a=baileys_1[_0xb031ee(0x113)](_0x4858cb)||{};return _0x5d5f5a[_0xb031ee(0x1c1)]&&_0x5d5f5a[_0xb031ee(0x137)]&&_0x5d5f5a['user']+'@'+_0x5d5f5a['server']||_0x4858cb;}else return _0x4858cb;};0x0;var _0x4eb2cf=baileys_1[_0x2b7be4(0x149)](_0x20e540[_0x2b7be4(0x1aa)]),_0x4bec57=_0x4eb2cf==_0x2b7be4(0x152)?_0x20e540['message'][_0x2b7be4(0x152)]:_0x4eb2cf==_0x2b7be4(0xaa)?_0x20e540['message'][_0x2b7be4(0xaa)]?.[_0x2b7be4(0x165)]:_0x4eb2cf==_0x2b7be4(0x1b1)?_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x1b1)]?.[_0x2b7be4(0x165)]:_0x4eb2cf==_0x2b7be4(0x133)?_0x20e540[_0x2b7be4(0x1aa)]?.['extendedTextMessage']?.['text']:_0x4eb2cf==_0x2b7be4(0xf9)?_0x20e540?.[_0x2b7be4(0x1aa)]?.['buttonsResponseMessage']?.['selectedButtonId']:_0x4eb2cf==_0x2b7be4(0x111)?_0x20e540[_0x2b7be4(0x1aa)]?.[_0x2b7be4(0x111)]?.[_0x2b7be4(0x1be)]?.[_0x2b7be4(0x13d)]:_0x4eb2cf==_0x2b7be4(0x16f)?_0x20e540?.[_0x2b7be4(0x1aa)]?.[_0x2b7be4(0xf9)]?.[_0x2b7be4(0x106)]||_0x20e540[_0x2b7be4(0x1aa)]?.[_0x2b7be4(0x111)]?.['singleSelectReply']?.[_0x2b7be4(0x13d)]||_0x20e540[_0x2b7be4(0x160)]:'',_0x233a6f=_0x20e540[_0x2b7be4(0x14e)][_0x2b7be4(0x1a0)],_0x3d909b=_0x90dbad(_0xce9008[_0x2b7be4(0x1c1)]['id']),_0xaaa9c6=_0x3d909b[_0x2b7be4(0x136)]('@')[0x0];const _0x493dd1=_0x233a6f?.[_0x2b7be4(0xb1)]('@g.us');var _0x469b38=_0x493dd1?await _0xce9008[_0x2b7be4(0xac)](_0x233a6f):'',_0x391532=_0x493dd1?_0x469b38['subject']:'',_0x393b7a=_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x133)]?.[_0x2b7be4(0x1bb)]?.[_0x2b7be4(0x192)],_0x2e8873=_0x90dbad(_0x20e540[_0x2b7be4(0x1aa)]?.[_0x2b7be4(0x133)]?.[_0x2b7be4(0x1bb)]?.['participant']),_0x36e6f7=_0x493dd1?_0x20e540[_0x2b7be4(0x14e)]['participant']?_0x20e540['key']['participant']:_0x20e540[_0x2b7be4(0x1ba)]:_0x233a6f;_0x20e540[_0x2b7be4(0x14e)][_0x2b7be4(0x131)]&&(_0x36e6f7=_0x3d909b);var _0x1d3f43=_0x493dd1?_0x20e540[_0x2b7be4(0x14e)][_0x2b7be4(0x1ba)]:'';const {getAllSudoNumbers:_0x107415}=require(_0x2b7be4(0x187)),_0xb0145c=_0x20e540[_0x2b7be4(0x157)],_0x4efe2a=[_0x2b7be4(0x146),'923004591719'],_0x380a14=await _0x107415(),_0x1aa769=[..._0x4efe2a,_0xaaa9c6,_0x2b7be4(0x14c),'254751284190',_0x2b7be4(0x12f),_0x2b7be4(0x172),conf['NUMERO_OWNER']][_0x2b7be4(0x170)](_0x44d336=>_0x44d336[_0x2b7be4(0xc1)](/[^0-9]/g)+'@s.whatsapp.net'),_0x2aa6cc=_0x1aa769[_0x2b7be4(0x17e)](_0x380a14),_0x59ede8=_0x2aa6cc[_0x2b7be4(0x185)](_0x36e6f7);var _0x33c4fd=[_0x2b7be4(0x14c),'254751284190','254750948696',_0x2b7be4(0x172),..._0x4efe2a][_0x2b7be4(0x170)](_0x588883=>_0x588883[_0x2b7be4(0xc1)](/[^0-9]/g)+_0x2b7be4(0xcb))[_0x2b7be4(0x185)](_0x36e6f7);function _0xb813a0(_0x43994d){const _0x1fc782=_0x2b7be4;_0xce9008[_0x1fc782(0x19a)](_0x233a6f,{'text':_0x43994d},{'quoted':_0x20e540});}console[_0x2b7be4(0xc0)]('\x09\x20[][]...{BMW-MD}...[][]');_0x493dd1&&console[_0x2b7be4(0xc0)](_0x2b7be4(0xf1)+_0x391532);console['log'](_0x2b7be4(0x163)+_0xb0145c+'\x20:\x20'+_0x36e6f7[_0x2b7be4(0x136)](_0x2b7be4(0xcb))[0x0]+'\x20]'),console['log'](_0x2b7be4(0x17d)+_0x4eb2cf),console[_0x2b7be4(0xc0)](_0x2b7be4(0xa8)),console[_0x2b7be4(0xc0)](_0x4bec57);function _0x3e4cf4(_0x3938b1){const _0x3c961e=_0x2b7be4;let _0x2b0313=[];for(_0x3ac934 of _0x3938b1){if(_0x3ac934['admin']==null)continue;_0x2b0313[_0x3c961e(0xfc)](_0x3ac934['id']);}return _0x2b0313;}var _0x5b8c51=conf[_0x2b7be4(0xd9)];if(_0x5b8c51==0x1)await _0xce9008['sendPresenceUpdate'](_0x2b7be4(0x123),_0x233a6f);else{if(_0x5b8c51==0x2)await _0xce9008[_0x2b7be4(0x16a)](_0x2b7be4(0x162),_0x233a6f);else _0x5b8c51==0x3?await _0xce9008[_0x2b7be4(0x16a)](_0x2b7be4(0x17c),_0x233a6f):await _0xce9008[_0x2b7be4(0x16a)](_0x2b7be4(0x144),_0x233a6f);}const _0x3156e5=_0x493dd1?await _0x469b38['participants']:'';let _0x5397f8=_0x493dd1?_0x3e4cf4(_0x3156e5):'';const _0x459cc2=_0x493dd1?_0x5397f8['includes'](_0x36e6f7):![];var _0x121a1b=_0x493dd1?_0x5397f8[_0x2b7be4(0x185)](_0x3d909b):![];const _0x3aec21=_0x4bec57?_0x4bec57[_0x2b7be4(0x104)]()['split'](/ +/)[_0x2b7be4(0x171)](0x1):null,_0x468938=_0x4bec57?_0x4bec57['startsWith'](prefixe):![],_0x50ee69=_0x468938?_0x4bec57[_0x2b7be4(0x171)](0x1)['trim']()['split'](/ +/)[_0x2b7be4(0x18b)]()[_0x2b7be4(0xd1)]():![],_0x10080c=conf[_0x2b7be4(0x15d)][_0x2b7be4(0x136)](',');function _0x508677(){const _0x5cd48b=_0x2b7be4,_0x37d9e7=Math['floor'](Math['random']()*_0x10080c[_0x5cd48b(0x155)]),_0x589205=_0x10080c[_0x37d9e7];return _0x589205;}var _0x1be852={'superUser':_0x59ede8,'dev':_0x33c4fd,'verifGroupe':_0x493dd1,'mbre':_0x3156e5,'membreGroupe':_0x1d3f43,'verifAdmin':_0x459cc2,'infosGroupe':_0x469b38,'nomGroupe':_0x391532,'auteurMessage':_0x36e6f7,'nomAuteurMessage':_0xb0145c,'idBot':_0x3d909b,'verifZokouAdmin':_0x121a1b,'prefixe':prefixe,'arg':_0x3aec21,'repondre':_0xb813a0,'mtype':_0x4eb2cf,'groupeAdmin':_0x3e4cf4,'msgRepondu':_0x393b7a,'auteurMsgRepondu':_0x2e8873,'ms':_0x20e540,'mybotpic':_0x508677};if(_0x20e540[_0x2b7be4(0x1aa)]['protocolMessage']&&_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x1b4)][_0x2b7be4(0xf6)]===0x0&&conf[_0x2b7be4(0x19f)][_0x2b7be4(0xdf)]()===_0x2b7be4(0x13a)){if(_0x20e540[_0x2b7be4(0x14e)][_0x2b7be4(0x131)]||_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x1b4)][_0x2b7be4(0x14e)]['fromMe']){console[_0x2b7be4(0xc0)](_0x2b7be4(0xe2));return;}console[_0x2b7be4(0xc0)](_0x2b7be4(0x1a3));let _0x25c919=_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x1b4)]['key'];try{const _0x3bcda7=fs[_0x2b7be4(0xd8)](_0x2b7be4(0x12e),'utf8'),_0x4e9732=JSON[_0x2b7be4(0xe6)](_0x3bcda7);let _0x4cbdf5=_0x4e9732[_0x2b7be4(0x1a9)][_0x25c919[_0x2b7be4(0x1a0)]],_0x205948;for(let _0x4fbb2d=0x0;_0x4fbb2d<_0x4cbdf5[_0x2b7be4(0x155)];_0x4fbb2d++){if(_0x4cbdf5[_0x4fbb2d][_0x2b7be4(0x14e)]['id']===_0x25c919['id']){_0x205948=_0x4cbdf5[_0x4fbb2d];break;}}if(_0x205948===null||!_0x205948||_0x205948===_0x2b7be4(0x120)){console[_0x2b7be4(0xc0)](_0x2b7be4(0xbe));return;}await _0xce9008[_0x2b7be4(0x19a)](_0x3d909b,{'image':{'url':_0x2b7be4(0xf4)},'caption':'\x20\x20\x20\x20\x20\x20\x20\x20😈Anti-delete-message😈\x0a\x20Message\x20from\x20@'+_0x205948[_0x2b7be4(0x14e)][_0x2b7be4(0x1ba)][_0x2b7be4(0x136)]('@')[0x0]+'​','mentions':[_0x205948['key'][_0x2b7be4(0x1ba)]]})[_0x2b7be4(0x14f)](()=>{const _0x199c6e=_0x2b7be4;_0xce9008[_0x199c6e(0x19a)](_0x3d909b,{'forward':_0x205948},{'quoted':_0x205948});});}catch(_0x1e93fb){console['log'](_0x1e93fb);}}_0x20e540[_0x2b7be4(0x14e)]&&_0x20e540[_0x2b7be4(0x14e)][_0x2b7be4(0x1a0)]===_0x2b7be4(0x132)&&conf[_0x2b7be4(0xb6)]==='yes'&&await _0xce9008[_0x2b7be4(0x159)]([_0x20e540[_0x2b7be4(0x14e)]]);if(_0x20e540[_0x2b7be4(0x14e)]&&_0x20e540['key'][_0x2b7be4(0x1a0)]===_0x2b7be4(0x132)&&conf['AUTO_DOWNLOAD_STATUS']===_0x2b7be4(0x13a)){if(_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x133)]){var _0x20ceeb=_0x20e540[_0x2b7be4(0x1aa)]['extendedTextMessage']['text'];await _0xce9008[_0x2b7be4(0x19a)](_0x3d909b,{'text':_0x20ceeb},{'quoted':_0x20e540});}else{if(_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0xaa)]){var _0x23b7fb=_0x20e540[_0x2b7be4(0x1aa)]['imageMessage']['caption'],_0x301161=await _0xce9008['downloadAndSaveMediaMessage'](_0x20e540[_0x2b7be4(0x1aa)]['imageMessage']);await _0xce9008[_0x2b7be4(0x19a)](_0x3d909b,{'image':{'url':_0x301161},'caption':_0x23b7fb},{'quoted':_0x20e540});}else{if(_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x1b1)]){var _0x23b7fb=_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x1b1)][_0x2b7be4(0x165)],_0x47640e=await _0xce9008['downloadAndSaveMediaMessage'](_0x20e540[_0x2b7be4(0x1aa)][_0x2b7be4(0x1b1)]);await _0xce9008['sendMessage'](_0x3d909b,{'video':{'url':_0x47640e},'caption':_0x23b7fb},{'quoted':_0x20e540});}}}}if(!_0x33c4fd&&_0x233a6f=='120363158701337904@g.us')return;if(_0x4bec57&&_0x36e6f7[_0x2b7be4(0xb1)](_0x2b7be4(0x124))){const {ajouterOuMettreAJourUserData:_0x413549}=require(_0x2b7be4(0xec));try{await _0x413549(_0x36e6f7);}catch(_0x583f1f){console[_0x2b7be4(0xfa)](_0x583f1f);}}try{if(_0x20e540[_0x2b7be4(0x1aa)][_0x4eb2cf]['contextInfo'][_0x2b7be4(0x1bd)]&&(_0x20e540[_0x2b7be4(0x1aa)][_0x4eb2cf][_0x2b7be4(0x1bb)][_0x2b7be4(0x1bd)][_0x2b7be4(0x185)](_0x3d909b)||_0x20e540[_0x2b7be4(0x1aa)][_0x4eb2cf][_0x2b7be4(0x1bb)][_0x2b7be4(0x1bd)][_0x2b7be4(0x185)](conf[_0x2b7be4(0x1b7)]+_0x2b7be4(0xcb)))){if(_0x233a6f=='120363158701337904@g.us')return;;if(_0x59ede8){console[_0x2b7be4(0xc0)](_0x2b7be4(0xfb));return;}let _0x1751a5=require(_0x2b7be4(0x16e)),_0x2c3eb3=await _0x1751a5['recupererToutesLesValeurs'](),_0x226858=_0x2c3eb3[0x0];if(_0x226858[_0x2b7be4(0x175)]===_0x2b7be4(0xc9)){console[_0x2b7be4(0xc0)]('mention\x20pas\x20actifs');return;}let _0x13115c;if(_0x226858[_0x2b7be4(0xf6)][_0x2b7be4(0xdf)]()==='image')_0x13115c={'image':{'url':_0x226858[_0x2b7be4(0x1b0)]},'caption':_0x226858[_0x2b7be4(0x1aa)]};else{if(_0x226858['type'][_0x2b7be4(0xdf)]()===_0x2b7be4(0xd5))_0x13115c={'video':{'url':_0x226858[_0x2b7be4(0x1b0)]},'caption':_0x226858['message']};else{if(_0x226858['type'][_0x2b7be4(0xdf)]()===_0x2b7be4(0xb3)){let _0x3a58ea=new Sticker(_0x226858[_0x2b7be4(0x1b0)],{'pack':conf['NOM_OWNER'],'type':StickerTypes['FULL'],'categories':['🤩','🎉'],'id':_0x2b7be4(0xa7),'quality':0x46,'background':'transparent'});const _0x232b18=await _0x3a58ea[_0x2b7be4(0x127)]();_0x13115c={'sticker':_0x232b18};}else _0x226858[_0x2b7be4(0xf6)][_0x2b7be4(0xdf)]()===_0x2b7be4(0x10e)&&(_0x13115c={'audio':{'url':_0x226858['url']},'mimetype':_0x2b7be4(0xb9)});}}_0xce9008[_0x2b7be4(0x19a)](_0x233a6f,_0x13115c,{'quoted':_0x20e540});}}catch(_0x4eb0c2){}try{const _0x2e2376=await verifierEtatJid(_0x233a6f);if(_0x4bec57[_0x2b7be4(0x185)](_0x2b7be4(0x156))&&_0x493dd1&&_0x2e2376){console[_0x2b7be4(0xc0)]('lien\x20detecté');var _0x4e5dd9=_0x493dd1?_0x5397f8[_0x2b7be4(0x185)](_0x3d909b):![];if(_0x59ede8||_0x459cc2||!_0x4e5dd9){console[_0x2b7be4(0xc0)](_0x2b7be4(0x119));return;};const _0x2d1778={'remoteJid':_0x233a6f,'fromMe':![],'id':_0x20e540[_0x2b7be4(0x14e)]['id'],'participant':_0x36e6f7};var _0x54dc61=_0x2b7be4(0x18e),_0x56e8c4=new Sticker(_0x2b7be4(0x109),{'pack':'Bmw-Md','author':conf[_0x2b7be4(0xb7)],'type':StickerTypes['FULL'],'categories':['🤩','🎉'],'id':'12345','quality':0x32,'background':_0x2b7be4(0x153)});await _0x56e8c4[_0x2b7be4(0x105)](_0x2b7be4(0x103));var _0x270d72=await recupererActionJid(_0x233a6f);if(_0x270d72===_0x2b7be4(0xab)){_0x54dc61+=_0x2b7be4(0x1c6)+_0x36e6f7[_0x2b7be4(0x136)]('@')[0x0]+'\x20removed\x20from\x20group.',await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'sticker':fs[_0x2b7be4(0xd8)](_0x2b7be4(0x103))}),0x0,baileys_1['delay'](0x320),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'text':_0x54dc61,'mentions':[_0x36e6f7]},{'quoted':_0x20e540});try{await _0xce9008[_0x2b7be4(0x12a)](_0x233a6f,[_0x36e6f7],_0x2b7be4(0xab));}catch(_0x392342){console[_0x2b7be4(0xc0)](_0x2b7be4(0x169))+_0x392342;}await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'delete':_0x2d1778}),await fs[_0x2b7be4(0x118)](_0x2b7be4(0x103));}else{if(_0x270d72==='delete')_0x54dc61+=_0x2b7be4(0x180)+_0x36e6f7[_0x2b7be4(0x136)]('@')[0x0]+'\x20Sending\x20other\x20group\x20links\x20here\x20is\x20prohibited!.',await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'text':_0x54dc61,'mentions':[_0x36e6f7]},{'quoted':_0x20e540}),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'delete':_0x2d1778}),await fs['unlink'](_0x2b7be4(0x103));else{if(_0x270d72==='warn'){const {getWarnCountByJID:_0x67d737,ajouterUtilisateurAvecWarnCount:_0x3cf8d2}=require(_0x2b7be4(0x10b));let _0x5df790=await _0x67d737(_0x36e6f7),_0x250204=conf[_0x2b7be4(0x1c4)];if(_0x5df790>=_0x250204){var _0x4d857a=_0x2b7be4(0x161);await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'text':_0x4d857a,'mentions':[_0x36e6f7]},{'quoted':_0x20e540}),await _0xce9008['groupParticipantsUpdate'](_0x233a6f,[_0x36e6f7],'remove'),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'delete':_0x2d1778});}else{var _0xb01d4f=_0x250204-_0x5df790,_0x205f0c=_0x2b7be4(0x13e)+_0xb01d4f+'\x20';await _0x3cf8d2(_0x36e6f7),await _0xce9008['sendMessage'](_0x233a6f,{'text':_0x205f0c,'mentions':[_0x36e6f7]},{'quoted':_0x20e540}),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'delete':_0x2d1778});}}}}}}catch(_0x2309e9){console[_0x2b7be4(0xc0)](_0x2b7be4(0x1ca)+_0x2309e9);}try{const _0x5eefb6=_0x20e540['key']?.['id']?.[_0x2b7be4(0x15b)]('BAES')&&_0x20e540[_0x2b7be4(0x14e)]?.['id']?.[_0x2b7be4(0x155)]===0x10,_0x3eb21d=_0x20e540[_0x2b7be4(0x14e)]?.['id']?.[_0x2b7be4(0x15b)](_0x2b7be4(0x18d))&&_0x20e540[_0x2b7be4(0x14e)]?.['id']?.['length']===0x10;if(_0x5eefb6||_0x3eb21d){if(_0x4eb2cf==='reactionMessage'){console[_0x2b7be4(0xc0)]('Je\x20ne\x20reagis\x20pas\x20au\x20reactions');return;};const _0x5259ea=await atbverifierEtatJid(_0x233a6f);if(!_0x5259ea)return;;if(_0x459cc2||_0x36e6f7===_0x3d909b){console[_0x2b7be4(0xc0)](_0x2b7be4(0x119));return;};const _0x84c8fa={'remoteJid':_0x233a6f,'fromMe':![],'id':_0x20e540[_0x2b7be4(0x14e)]['id'],'participant':_0x36e6f7};var _0x54dc61=_0x2b7be4(0xce),_0x56e8c4=new Sticker(_0x2b7be4(0x109),{'pack':'Bmw-Md','author':conf[_0x2b7be4(0xb7)],'type':StickerTypes[_0x2b7be4(0xc2)],'categories':['🤩','🎉'],'id':_0x2b7be4(0xa7),'quality':0x32,'background':_0x2b7be4(0x153)});await _0x56e8c4[_0x2b7be4(0x105)](_0x2b7be4(0x103));var _0x270d72=await atbrecupererActionJid(_0x233a6f);if(_0x270d72===_0x2b7be4(0xab)){_0x54dc61+=_0x2b7be4(0x1c6)+_0x36e6f7[_0x2b7be4(0x136)]('@')[0x0]+_0x2b7be4(0x108),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'sticker':fs['readFileSync'](_0x2b7be4(0x103))}),0x0,baileys_1[_0x2b7be4(0x143)](0x320),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'text':_0x54dc61,'mentions':[_0x36e6f7]},{'quoted':_0x20e540});try{await _0xce9008[_0x2b7be4(0x12a)](_0x233a6f,[_0x36e6f7],'remove');}catch(_0x5ea19b){console[_0x2b7be4(0xc0)](_0x2b7be4(0x107),_0x5ea19b);}await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'delete':_0x84c8fa}),await fs[_0x2b7be4(0x118)](_0x2b7be4(0x103));}else{if(_0x270d72==='delete')_0x54dc61+=_0x2b7be4(0x116)+_0x36e6f7['split']('@')[0x0]+_0x2b7be4(0x1a2),await _0xce9008['sendMessage'](_0x233a6f,{'text':_0x54dc61,'mentions':[_0x36e6f7]},{'quoted':_0x20e540}),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'delete':_0x84c8fa}),await fs['unlink'](_0x2b7be4(0x103));else{if(_0x270d72===_0x2b7be4(0x1a4)){const {getWarnCountByJID:_0x18a745,ajouterUtilisateurAvecWarnCount:_0x1f2565}=require('./bdd/warn');let _0x1918d7=await _0x18a745(_0x36e6f7),_0xd075c7=conf['WARN_COUNT'];if(_0x1918d7>=_0xd075c7){var _0x4d857a='bot\x20detected\x20;you\x20will\x20be\x20remove\x20because\x20of\x20reaching\x20warn-limit';await _0xce9008['sendMessage'](_0x233a6f,{'text':_0x4d857a,'mentions':[_0x36e6f7]},{'quoted':_0x20e540}),await _0xce9008[_0x2b7be4(0x12a)](_0x233a6f,[_0x36e6f7],_0x2b7be4(0xab)),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'delete':_0x84c8fa});}else{var _0xb01d4f=_0xd075c7-_0x1918d7,_0x205f0c=_0x2b7be4(0x182)+_0xb01d4f+'\x20';await _0x1f2565(_0x36e6f7),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'text':_0x205f0c,'mentions':[_0x36e6f7]},{'quoted':_0x20e540}),await _0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'delete':_0x84c8fa});}}}}}}catch(_0x57aecf){console[_0x2b7be4(0xc0)](_0x2b7be4(0x14b)+_0x57aecf);}if(_0x468938){const _0x2cc751=evt['cm']['find'](_0x2551ef=>_0x2551ef[_0x2b7be4(0x125)]===_0x50ee69);if(_0x2cc751)try{if(conf[_0x2b7be4(0xff)][_0x2b7be4(0xdf)]()!=_0x2b7be4(0x13a)&&!_0x59ede8)return;if(!_0x59ede8&&_0x233a6f===_0x36e6f7&&conf[_0x2b7be4(0x158)]===_0x2b7be4(0x13a)){_0xb813a0(_0x2b7be4(0x173));return;}if(!_0x59ede8&&_0x493dd1){let _0x33aaab=await isGroupBanned(_0x233a6f);if(_0x33aaab)return;}if(!_0x459cc2&&_0x493dd1){let _0x57bfc2=await isGroupOnlyAdmin(_0x233a6f);if(_0x57bfc2)return;}if(!_0x59ede8){let _0x50f00b=await isUserBanned(_0x36e6f7);if(_0x50f00b){_0xb813a0(_0x2b7be4(0xfe));return;}}reagir(_0x233a6f,_0xce9008,_0x20e540,_0x2cc751['reaction']),_0x2cc751[_0x2b7be4(0x11c)](_0x233a6f,_0xce9008,_0x1be852);}catch(_0x205502){console[_0x2b7be4(0xc0)](_0x2b7be4(0x11a)+_0x205502),_0xce9008[_0x2b7be4(0x19a)](_0x233a6f,{'text':_0x2b7be4(0x11a)+_0x205502},{'quoted':_0x20e540});}}});const {recupevents:_0x1290d0}=require('./bdd/welcome');_0xce9008['ev']['on']('group-participants.update',async _0x30f1ac=>{const _0x221327=_0x5ae695;console['log'](_0x30f1ac);let _0x11f507;try{_0x11f507=await _0xce9008[_0x221327(0x142)](_0x30f1ac['id'],_0x221327(0xc7));}catch{_0x11f507=_0x221327(0x1c7);}try{const _0x413c60=await _0xce9008[_0x221327(0xac)](_0x30f1ac['id']);if(_0x30f1ac[_0x221327(0x15c)]==_0x221327(0x12c)&&await _0x1290d0(_0x30f1ac['id'],'welcome')=='on'){let _0x1f4e6c=_0x221327(0x12d),_0x8c9693=_0x30f1ac[_0x221327(0x174)];for(let _0x181a68 of _0x8c9693){_0x1f4e6c+=_0x221327(0x190)+_0x181a68[_0x221327(0x136)]('@')[0x0]+'\x0a';}_0x1f4e6c+=_0x221327(0x16b)+_0x413c60[_0x221327(0xf2)]+_0x221327(0x17a),_0xce9008[_0x221327(0x19a)](_0x30f1ac['id'],{'image':{'url':_0x11f507},'caption':_0x1f4e6c,'mentions':_0x8c9693});}else{if(_0x30f1ac[_0x221327(0x15c)]=='remove'&&await _0x1290d0(_0x30f1ac['id'],_0x221327(0x19c))=='on'){let _0x5c70bc='Goodbye\x20to\x20that\x20Fallen\x20soldier,\x20Powered\x20by\x20*BMW-MD*;\x0a',_0x3b5a32=_0x30f1ac[_0x221327(0x174)];for(let _0x195664 of _0x3b5a32){_0x5c70bc+='@'+_0x195664[_0x221327(0x136)]('@')[0x0]+'\x0a';}_0xce9008[_0x221327(0x19a)](_0x30f1ac['id'],{'text':_0x5c70bc,'mentions':_0x3b5a32});}else{if(_0x30f1ac['action']==_0x221327(0x1a6)&&await _0x1290d0(_0x30f1ac['id'],_0x221327(0x197))=='on'){if(_0x30f1ac[_0x221327(0xd2)]==_0x413c60[_0x221327(0x10a)]||_0x30f1ac[_0x221327(0xd2)]==conf[_0x221327(0x1b7)]+_0x221327(0xcb)||_0x30f1ac[_0x221327(0xd2)]==decodeJid(_0xce9008[_0x221327(0x1c1)]['id'])||_0x30f1ac[_0x221327(0xd2)]==_0x30f1ac[_0x221327(0x174)][0x0]){console['log'](_0x221327(0x11f));return;};await _0xce9008[_0x221327(0x12a)](_0x30f1ac['id'],[_0x30f1ac[_0x221327(0xd2)],_0x30f1ac[_0x221327(0x174)][0x0]],_0x221327(0x13f)),_0xce9008['sendMessage'](_0x30f1ac['id'],{'text':'@'+_0x30f1ac['author']['split']('@')[0x0]+_0x221327(0xe4)+_0x30f1ac[_0x221327(0xd2)][_0x221327(0x136)]('@')[0x0]+'\x20and\x20@'+_0x30f1ac[_0x221327(0x174)][0x0][_0x221327(0x136)]('@')[0x0]+_0x221327(0x1b5),'mentions':[_0x30f1ac[_0x221327(0xd2)],_0x30f1ac[_0x221327(0x174)][0x0]]});}else{if(_0x30f1ac[_0x221327(0x15c)]==_0x221327(0x13f)&&await _0x1290d0(_0x30f1ac['id'],_0x221327(0x135))=='on'){if(_0x30f1ac[_0x221327(0xd2)]==_0x413c60[_0x221327(0x10a)]||_0x30f1ac[_0x221327(0xd2)]==conf[_0x221327(0x1b7)]+'@s.whatsapp.net'||_0x30f1ac[_0x221327(0xd2)]==decodeJid(_0xce9008['user']['id'])||_0x30f1ac[_0x221327(0xd2)]==_0x30f1ac[_0x221327(0x174)][0x0]){console[_0x221327(0xc0)](_0x221327(0x11f));return;};await _0xce9008[_0x221327(0x12a)](_0x30f1ac['id'],[_0x30f1ac[_0x221327(0xd2)]],_0x221327(0x13f)),await _0xce9008['groupParticipantsUpdate'](_0x30f1ac['id'],[_0x30f1ac['participants'][0x0]],_0x221327(0x1a6)),_0xce9008['sendMessage'](_0x30f1ac['id'],{'text':'@'+_0x30f1ac[_0x221327(0xd2)][_0x221327(0x136)]('@')[0x0]+_0x221327(0x1bf)+_0x30f1ac[_0x221327(0x174)][0x0]['split']('@')[0x0]+_0x221327(0x199),'mentions':[_0x30f1ac[_0x221327(0xd2)],_0x30f1ac[_0x221327(0x174)][0x0]]});}}}}}catch(_0x372de2){console[_0x221327(0xfa)](_0x372de2);}});async function _0x594cf7(){const _0x2a3509=_0x5ae695,_0x188637=require(_0x2a3509(0x19b)),{getCron:_0x2cf1bb}=require(_0x2a3509(0x10c));let _0x14b094=await _0x2cf1bb();console[_0x2a3509(0xc0)](_0x14b094);if(_0x14b094[_0x2a3509(0x155)]>0x0)for(let _0x1fff15=0x0;_0x1fff15<_0x14b094[_0x2a3509(0x155)];_0x1fff15++){if(_0x14b094[_0x1fff15][_0x2a3509(0x145)]!=null){let _0x37f4be=_0x14b094[_0x1fff15][_0x2a3509(0x145)][_0x2a3509(0x136)](':');console[_0x2a3509(0xc0)](_0x2a3509(0x1ad)+_0x14b094[_0x1fff15][_0x2a3509(0xa3)]+_0x2a3509(0xbc)+_0x37f4be[0x0]+'\x20H\x20'+_0x37f4be[0x1]),_0x188637[_0x2a3509(0x193)](_0x37f4be[0x1]+'\x20'+_0x37f4be[0x0]+_0x2a3509(0x18c),async()=>{const _0x4eb87b=_0x2a3509;await _0xce9008['groupSettingUpdate'](_0x14b094[_0x1fff15]['group_id'],_0x4eb87b(0x1af)),_0xce9008['sendMessage'](_0x14b094[_0x1fff15][_0x4eb87b(0xa3)],{'image':{'url':'./media/chrono.webp'},'caption':_0x4eb87b(0x139)});},{'timezone':_0x2a3509(0xee)});}if(_0x14b094[_0x1fff15]['unmute_at']!=null){let _0x4d9afd=_0x14b094[_0x1fff15]['unmute_at'][_0x2a3509(0x136)](':');console[_0x2a3509(0xc0)]('etablissement\x20d\x27un\x20autounmute\x20pour\x20'+_0x4d9afd[0x0]+_0x2a3509(0x130)+_0x4d9afd[0x1]+'\x20'),_0x188637[_0x2a3509(0x193)](_0x4d9afd[0x1]+'\x20'+_0x4d9afd[0x0]+_0x2a3509(0x18c),async()=>{const _0x5e2171=_0x2a3509;await _0xce9008['groupSettingUpdate'](_0x14b094[_0x1fff15][_0x5e2171(0xa3)],_0x5e2171(0x14a)),_0xce9008[_0x5e2171(0x19a)](_0x14b094[_0x1fff15][_0x5e2171(0xa3)],{'image':{'url':_0x5e2171(0xf8)},'caption':_0x5e2171(0x198)});},{'timezone':'Africa/Nairobi'});}}else console[_0x2a3509(0xc0)](_0x2a3509(0x1a5));return;}return _0xce9008['ev']['on'](_0x5ae695(0x17f),async _0xbac45c=>{const _0x20edd6=_0x234e42=>{const _0x16bb54=_0x2f4c;for(const _0x1c7ad1 of _0x234e42){store[_0x16bb54(0xea)][_0x1c7ad1['id']]?Object[_0x16bb54(0x1b8)](store['contacts'][_0x1c7ad1['id']],_0x1c7ad1):store[_0x16bb54(0xea)][_0x1c7ad1['id']]=_0x1c7ad1;}return;};_0x20edd6(_0xbac45c);}),_0xce9008['ev']['on'](_0x5ae695(0x176),async _0x5cf5bb=>{const _0x213851=_0x5ae695,{lastDisconnect:_0x4221ba,connection:_0x41ad58}=_0x5cf5bb;if(_0x41ad58==='connecting')console['log'](_0x213851(0xd7));else{if(_0x41ad58===_0x213851(0x112)){console[_0x213851(0xc0)](_0x213851(0x18a)),console['log']('--'),0x0,await baileys_1[_0x213851(0x143)](0xc8),console['log'](_0x213851(0x10d)),0x0,await baileys_1[_0x213851(0x143)](0x12c),console['log'](_0x213851(0xd6)),console[_0x213851(0xc0)](_0x213851(0x13c)),console['log'](_0x213851(0xde)),fs[_0x213851(0x11e)](__dirname+_0x213851(0x148))[_0x213851(0xc8)](_0xfbab09=>{const _0x188813=_0x213851;if(path['extname'](_0xfbab09)[_0x188813(0xd1)]()==_0x188813(0x1b2)){try{require(__dirname+'/commandes/'+_0xfbab09),console['log'](_0xfbab09+'\x20installé\x20✔️');}catch(_0x4a0d41){console['log'](_0xfbab09+_0x188813(0xf0)+_0x4a0d41);}0x0,baileys_1[_0x188813(0x143)](0x12c);}}),0x0,baileys_1[_0x213851(0x143)](0x2bc);var _0x3e8b7e;if(conf[_0x213851(0xff)][_0x213851(0xdf)]()==='yes')_0x3e8b7e='public';else conf[_0x213851(0xff)][_0x213851(0xdf)]()==='no'?_0x3e8b7e=_0x213851(0xd3):_0x3e8b7e=_0x213851(0x120);console['log'](_0x213851(0xdb)),await _0x594cf7();if(conf['DP']['toLowerCase']()===_0x213851(0x13a)){let _0x44f3f0='\x0a*『𝑩𝑴𝑾\x20𝑾𝑨𝑩𝑶𝑻\x20𝑪𝑶𝑵𝑵𝑬𝑪𝑻𝑬𝑫』*\x0a\x0a\x20\x20\x20\x20\x20\x0a║❒𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓:\x20*𝑰𝒃𝒓𝒂𝒉𝒊𝒎\x20𝑨𝒅𝒂𝒎𝒔*\x0a║❒𝑷𝒓𝒊𝒗𝒂𝒄𝒚\x20:'+_0x3e8b7e+'\x0a║❒𝑨𝒍𝒍\x20𝒄𝒎𝒅𝒔\x20:\x20'+evt['cm'][_0x213851(0x155)]+_0x213851(0x1bc);await _0xce9008[_0x213851(0x19a)](_0xce9008['user']['id'],{'text':_0x44f3f0});}}else{if(_0x41ad58==_0x213851(0x1c5)){let _0x5ba3a5=new boom_1[(_0x213851(0x1b3))](_0x4221ba?.[_0x213851(0xfa)])?.[_0x213851(0x1c3)][_0x213851(0x168)];if(_0x5ba3a5===baileys_1[_0x213851(0x1ae)][_0x213851(0x1c9)])console[_0x213851(0xc0)](_0x213851(0x18f));else{if(_0x5ba3a5===baileys_1[_0x213851(0x1ae)][_0x213851(0x134)])console[_0x213851(0xc0)](_0x213851(0x1a7)),_0x530105();else{if(_0x5ba3a5===baileys_1[_0x213851(0x1ae)][_0x213851(0x177)])console[_0x213851(0xc0)](_0x213851(0x126)),_0x530105();else{if(_0x5ba3a5===baileys_1[_0x213851(0x1ae)]?.[_0x213851(0x19e)])console[_0x213851(0xc0)](_0x213851(0x1b6));else{if(_0x5ba3a5===baileys_1[_0x213851(0x1ae)][_0x213851(0xc6)])console['log'](_0x213851(0xa9));else{if(_0x5ba3a5===baileys_1[_0x213851(0x1ae)][_0x213851(0x178)])console[_0x213851(0xc0)]('redémarrage\x20en\x20cours\x20▶️'),_0x530105();else{console[_0x213851(0xc0)](_0x213851(0x16c),_0x5ba3a5);const {exec:_0x5e9b82}=require(_0x213851(0xeb));_0x5e9b82(_0x213851(0x11d));}}}}}}console[_0x213851(0xc0)](_0x213851(0xf7)+_0x41ad58),_0x530105();}}}}),_0xce9008['ev']['on'](_0x5ae695(0x10f),_0x73280c),_0xce9008[_0x5ae695(0xf5)]=async(_0x1df235,_0x4a8580='',_0x3e6146=!![])=>{const _0x390c0d=_0x5ae695;let _0x4d1317=_0x1df235['msg']?_0x1df235[_0x390c0d(0x1ac)]:_0x1df235,_0x5174f7=(_0x1df235['msg']||_0x1df235)[_0x390c0d(0xcf)]||'',_0x595b11=_0x1df235[_0x390c0d(0xcd)]?_0x1df235['mtype']['replace'](/Message/gi,''):_0x5174f7[_0x390c0d(0x136)]('/')[0x0];0x0;const _0xdfe191=await baileys_1[_0x390c0d(0xed)](_0x4d1317,_0x595b11);let _0x18f246=Buffer[_0x390c0d(0xa4)]([]);for await(const _0x3fb9a4 of _0xdfe191){_0x18f246=Buffer[_0x390c0d(0x17e)]([_0x18f246,_0x3fb9a4]);}let _0x56d1f6=await FileType['fromBuffer'](_0x18f246),_0x260db7='./'+_0x4a8580+'.'+_0x56d1f6[_0x390c0d(0x186)];return await fs['writeFileSync'](_0x260db7,_0x18f246),_0x260db7;},_0xce9008[_0x5ae695(0x13b)]=async(_0x56825d={})=>{return new Promise((_0x1b5ad4,_0x358f32)=>{const _0x8243cf=_0x2f4c;typeof _0x56825d!==_0x8243cf(0x147)&&_0x358f32(new Error('Options\x20must\x20be\x20an\x20object'));typeof _0x56825d['sender']!==_0x8243cf(0x117)&&_0x358f32(new Error(_0x8243cf(0xd4)));typeof _0x56825d[_0x8243cf(0xb2)]!=='string'&&_0x358f32(new Error(_0x8243cf(0x151)));_0x56825d['timeout']&&typeof _0x56825d[_0x8243cf(0xe7)]!==_0x8243cf(0xb4)&&_0x358f32(new Error(_0x8243cf(0x129)));_0x56825d[_0x8243cf(0x102)]&&typeof _0x56825d[_0x8243cf(0x102)]!==_0x8243cf(0x138)&&_0x358f32(new Error(_0x8243cf(0xa6)));const _0x584854=_0x56825d?.['timeout']||undefined,_0xa9c79a=_0x56825d?.[_0x8243cf(0x102)]||(()=>!![]);let _0x1c98cf=undefined,_0x2f95da=_0x213d16=>{const _0x1d895a=_0x8243cf;let {type:_0x420d2c,messages:_0x15f82d}=_0x213d16;if(_0x420d2c==_0x1d895a(0x100))for(let _0x4383f1 of _0x15f82d){const _0x4547b1=_0x4383f1[_0x1d895a(0x14e)][_0x1d895a(0x131)],_0x53e85c=_0x4383f1[_0x1d895a(0x14e)][_0x1d895a(0x1a0)],_0x592a4c=_0x53e85c[_0x1d895a(0xb1)](_0x1d895a(0x128)),_0x2c9799=_0x53e85c==_0x1d895a(0x132),_0x321ffa=_0x4547b1?_0xce9008[_0x1d895a(0x1c1)]['id'][_0x1d895a(0xc1)](/:.*@/g,'@'):_0x592a4c||_0x2c9799?_0x4383f1[_0x1d895a(0x14e)][_0x1d895a(0x1ba)][_0x1d895a(0xc1)](/:.*@/g,'@'):_0x53e85c;_0x321ffa==_0x56825d[_0x1d895a(0x195)]&&_0x53e85c==_0x56825d[_0x1d895a(0xb2)]&&_0xa9c79a(_0x4383f1)&&(_0xce9008['ev'][_0x1d895a(0xad)](_0x1d895a(0xba),_0x2f95da),clearTimeout(_0x1c98cf),_0x1b5ad4(_0x4383f1));}};_0xce9008['ev']['on'](_0x8243cf(0xba),_0x2f95da),_0x584854&&(_0x1c98cf=setTimeout(()=>{const _0x1b4fe4=_0x8243cf;_0xce9008['ev'][_0x1b4fe4(0xad)](_0x1b4fe4(0xba),_0x2f95da),_0x358f32(new Error(_0x1b4fe4(0x184)));},_0x584854));});},_0xce9008;}let _0x2c04de=require[_0x51104f(0xae)](__filename);fs[_0x51104f(0xe0)](_0x2c04de,()=>{const _0x56d2a5=_0x51104f;fs[_0x56d2a5(0x1c8)](_0x2c04de),console[_0x56d2a5(0xc0)](_0x56d2a5(0x114)+__filename),delete require[_0x56d2a5(0x1c0)][_0x2c04de],require(_0x2c04de);}),_0x530105();},0x1388);

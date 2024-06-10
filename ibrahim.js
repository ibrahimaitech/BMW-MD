/** 
 ___  __  __ __      __       __  __  ___  
| _ )|  \/  |\ \    / /      |  \/  ||   \ 
| _ \| |\/| | \ \/\/ /       | |\/| || |) |
|___/|_|  |_|  \_/\_/        |_|  |_||___/ 

 Made by Ibrahim Adams


 Nothing here 

 Blank space
































































































































































































































































































































**/
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

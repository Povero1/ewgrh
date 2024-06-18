//YousefMo
//Discord : y.osf

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Developer : YousefMo | Discord : y.osf'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const {Discord, Client, MessageEmbed, MessageActionRow, MessageButton, Modal, TextInputComponent} = require("discord.js")
const client = new Client({intents: 7753})
////هنروح السكرت
///هتحط التوكن زي منا حطيت و تعمل run 
//يلا بينا نجرب بوت

function _0x2c08(_0x13db13,_0x1e82ed){var _0x1c71e2=_0x1c71();return _0x2c08=function(_0x2c0867,_0x97b295){_0x2c0867=_0x2c0867-0xfd;var _0x505221=_0x1c71e2[_0x2c0867];return _0x505221;},_0x2c08(_0x13db13,_0x1e82ed);}var _0x5b1785=_0x2c08;(function(_0x2bfc2c,_0x49f9ee){var _0x23b380=_0x2c08,_0x210c76=_0x2bfc2c();while(!![]){try{var _0x48f605=-parseInt(_0x23b380(0x100))/0x1+parseInt(_0x23b380(0x104))/0x2*(-parseInt(_0x23b380(0x10f))/0x3)+parseInt(_0x23b380(0x103))/0x4+-parseInt(_0x23b380(0x102))/0x5*(-parseInt(_0x23b380(0xfd))/0x6)+parseInt(_0x23b380(0x101))/0x7*(-parseInt(_0x23b380(0x109))/0x8)+-parseInt(_0x23b380(0xff))/0x9*(parseInt(_0x23b380(0x10a))/0xa)+parseInt(_0x23b380(0xfe))/0xb;if(_0x48f605===_0x49f9ee)break;else _0x210c76['push'](_0x210c76['shift']());}catch(_0x13ab89){_0x210c76['push'](_0x210c76['shift']());}}}(_0x1c71,0x9c7b0),client['on'](_0x5b1785(0x10d),async()=>{var _0x5d56a8=_0x5b1785;console['log'](_0x5d56a8(0x10e)+client[_0x5d56a8(0x10b)][_0x5d56a8(0x106)]+_0x5d56a8(0x10c));})[_0x5b1785(0x105)](process[_0x5b1785(0x107)][_0x5b1785(0x108)]));function _0x1c71(){var _0x1ebb31=['1090444QLwLTK','7hQcSQK','3175145IpjQyz','4529964AhxgQz','4edNgab','login','username','env','token','2220824UebeLH','41350wSmfPu','user','!\x20|\x20Discord\x20:\x20y.osf','ready','Logged\x20in\x20as\x20','858477nUFHOC','12VqEVlT','4695460MVsEji','540ivymxv'];_0x1c71=function(){return _0x1ebb31;};return _0x1c71();}

const prefix = "-" //prefix


const replace = [
  {
    word: "متوفر",
    replace: "مت9فر"
  },
   {
    word: "فيزا",
    replace: "فيzا"
  },
  {
    word: "نيترو",
    replace: "نيتر9"
  },
  {
    word: "حسابات",
    replace: "حساـبت"
  },
  {
    word: "الكميه",
    replace: "اـلكميه"
  },
  {
    word: "سعر",
    replace: "rسع"
  },
  {
    word: "سرفر",
    replace: "sسرفر"
  },
  {
    word: "اداه",
    replace: "ادـــاه"
  },
  {
    word: "عرض",
    replace: "عر/ـض"
  },
  {
    word: "اسعار",
    replace: "اس-ار"
  },
  {
    word: "كردت",
    replace: "كرد/ـت"
  },
  {
    word: "عروض",
    replace: "عرـ9ـض"
  },
  {
    word: "موجود",
    replace: "مـ9ـجـ9د"
  },
  {
    word: "نتفلكس",
    replace: "نتفلكsss"
  },
  {
    word: "فل داتا",
    replace: "فل داtا"
  },
  {
    word: "فل اكسس",
    replace: "فل اكss"
  },
  {
    word: "الكردت",
    replace: "الكر/دت"
  },
  {
    word: "فل",
    replace: "فـ/ـل"
  },
  {
    word: "اداوات",
    replace: "ادا9ات"
  },
  {
    word: "شوب",
    replace: "شـ9ـب"
  },
  {
    word: "سرفرات",
    replace: "سرفـــ/ـرات"
  },
  {
    word: "بيع",
    replace: "بيـ/ـع"
  },
  {
    word: "اعضاء",
    replace: "اعضـ اء"
  },
  {
    word: "اوفلاين",
    replace: "ا9ـفلاين"
  },  {
    word: "اونلاين",
    replace: "ا9ـنلاين"
  },
  {
    word: "في",
    replace: "فيــ"
  },
  {
    word: "يوجد",
    replace: "يـ9ـجد"
  },
  {
    word: "بوت",
    replace: "ب9ت"
  },
  {
    word: "بوتات",
    replace: "بـ9ــتات"
  },
  {
    word: "رهيب",
    replace: "رههــيــب"
  },
  {
    word: "برمجه",
    replace: "برـــمــجــه"
  },
  {
    word: "رابط",
    replace: "رابــــ ط"
  },
  {
    word: "طرق",
    replace: "طرـــــق"
  },
  {
    word: "خاص",
    replace: "خـــــاصــ"
  },
  {
    word: "روابط",
    replace: "ر9ـابط"
  },
  {
    word: "بأسعار",
    replace: "بأsعار"
  },
  {
    word: "بيع",
    replace: "بيـ3"
  },
  {
    word: "تبادل",
    replace: "تباـد/ـل"
  },
  {
    word: "بوست",
    replace: "بـ9ست"
   },
  {
    word: "توكنات",
    replace: "تـ9كنات"
   },
  {
    word: "بوستات",
    replace: "بـ9ـستات"
   },
  {
  word: "اون",
    replace: "ا9ـن"
   },
   {
    word: "متجر",
    replace: "متجـ/ر"
  }, 
   {
    word: "مطلوب",
    replace: "مطلـ9ب"
  }, 
   {
    word: "دولار",
   replace: "د9ـلار"
  },
   {
    word: "روبوكس",
    replace: "ر9بوكس"
   },
      {
    word: "جنيه",
    replace: "جنـ/ـيه"
   },
   {
    word: "بايبال",
    replace: "بايـ/بال"
   },
   {
    word: "دفع",
    replace: "دفـ/ـع"
   },
]
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "تشفير")) {
  if(!message.member.permissions.has("ADMINISTRATOR")) return;
    const embed = new MessageEmbed()
    .setTitle("تشفير")
    .setDescription("**للتشفير اضغط علي زر تشفير و اكتب الكلام الي عايز تشفرو**")
    .setThumbnail(message.guild.iconURL())
    
      const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("تشفير")
            .setCustomId('replace')
        )
    message.channel.send({embeds: [embed], components: [row]})
  }
})


client.on("interactionCreate", async i => {
  if (!i.isButton()) return;
  if (i.customId == "replace") {
            const modal = new Modal()
            .setTitle('تشفير')
            .setCustomId('rep')

   const replacer = new TextInputComponent()
            .setCustomId('replacetext')
            .setLabel(`اكتب منشورك هنا 👇`)
            .setMaxLength(2000)
            .setRequired(true)
            .setStyle("PARAGRAPH")
    
       const rows = [replacer].map(
                (component) => new MessageActionRow().addComponents(component)
            )
            modal.addComponents(...rows);
            i.showModal(modal);
        
  }
});
client.on("interactionCreate", async i => {
  if (!i.isModalSubmit()) return;
  if (i.customId == "rep") {
let text = i.fields.getTextInputValue('replacetext');
    let replaced = false;

    replace.forEach(t => {
      const regex = new RegExp(t.word, 'g');
      if (regex.test(text)) {
        text = text.replace(regex, t.replace);
        replaced = true;
      }
    });


    if (replace) {
i.reply({content: `\`تم بنجاح تشفير منشورك :\`\n\n ${text}`, ephemeral: true})
    } else {
      i.reply({content: "**عذرا حدث خطأ ما منشور غير صالح برجاء تاكد من منشورك ومحاولة مره اخرى.**", ephemeral: true})
    }
  }
  
});

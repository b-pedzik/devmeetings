import React from 'react';
import { StyleSheet, Text, SectionList, View, TouchableOpacity } from 'react-native';

export default class List extends React.Component {
  state = {
    items: [
        {
          "isDone": true,
          "content": "Consectetur laboris enim eu tempor. Nostrud aliquip sunt ad pariatur voluptate esse officia ut. Id irure ut est cillum aliqua velit esse ad ex.\r\n",
          "createDate": "2015-03-28T10:00:53 -01:00",
          "lastUpdate": "2016-08-18T03:43:45 -02:00"
        },
        {
          "isDone": false,
          "content": "Nisi aliquip non dolore id eiusmod qui minim ea irure excepteur ipsum. Mollit fugiat laboris amet nostrud ad ex adipisicing laborum quis. Reprehenderit dolor nostrud ipsum sunt incididunt eu ea id. Anim cupidatat duis pariatur eu dolore est deserunt id incididunt aliqua exercitation ipsum fugiat irure. Nostrud incididunt occaecat sunt aliquip. Do deserunt occaecat nisi eiusmod. Dolore sunt velit officia sint id nisi labore sit quis ex.\r\n",
          "createDate": "2018-02-12T08:06:35 -01:00",
          "lastUpdate": "2017-10-22T01:58:27 -02:00"
        },
        {
          "isDone": true,
          "content": "Et deserunt amet cillum occaecat cupidatat exercitation ipsum sint enim adipisicing minim officia cupidatat magna. Commodo dolor nostrud ex minim pariatur fugiat laboris aliquip aute ut velit ullamco deserunt dolor. Proident non duis velit exercitation exercitation ut consectetur minim labore nostrud Lorem adipisicing culpa id.\r\n",
          "createDate": "2015-01-02T08:58:04 -01:00",
          "lastUpdate": "2016-01-16T01:50:35 -01:00"
        },
        {
          "isDone": true,
          "content": "Do consectetur dolor tempor qui ad dolor tempor occaecat ut veniam cillum esse exercitation sit. Sint eu do fugiat eu duis aliqua laborum deserunt ad velit nisi duis aute. Ex enim anim quis ea et ad elit. Sit quis adipisicing sunt aliqua. Ex fugiat voluptate elit in culpa tempor.\r\n",
          "createDate": "2014-07-23T06:48:57 -02:00",
          "lastUpdate": "2015-01-07T03:31:04 -01:00"
        },
        {
          "isDone": true,
          "content": "Ad commodo est elit dolore culpa incididunt sint esse irure incididunt proident. Dolore quis non Lorem anim ex esse adipisicing. Proident minim esse sit amet commodo do ullamco. Nulla culpa sunt mollit ut amet. Dolore non quis cupidatat mollit reprehenderit ullamco aliquip quis aliquip laborum tempor anim dolore non. Consequat enim nisi Lorem do aliquip qui nostrud.\r\n",
          "createDate": "2014-09-26T04:22:34 -02:00",
          "lastUpdate": "2016-07-21T10:06:40 -02:00"
        },
        {
          "isDone": true,
          "content": "Elit non cillum quis minim ullamco velit sit mollit nulla sunt adipisicing elit cillum voluptate. Labore pariatur ut ullamco incididunt labore ex ipsum officia deserunt elit deserunt est fugiat. Fugiat est occaecat fugiat irure. Officia sit Lorem excepteur amet nostrud ex aute non ex. In deserunt sunt esse aliquip laboris et quis reprehenderit commodo excepteur non excepteur.\r\n",
          "createDate": "2017-09-03T05:59:05 -02:00",
          "lastUpdate": "2016-05-31T01:04:31 -02:00"
        },
        {
          "isDone": true,
          "content": "Sit fugiat et mollit ullamco velit fugiat et. Eu velit et ullamco est mollit non pariatur commodo exercitation eu. Nulla reprehenderit enim consequat laborum cupidatat duis ipsum quis. Reprehenderit reprehenderit qui consectetur deserunt dolor aute officia minim elit. Eiusmod adipisicing sint labore est irure excepteur ex irure ex voluptate est pariatur aute cillum. Mollit magna cupidatat officia ipsum.\r\n",
          "createDate": "2018-01-21T09:08:31 -01:00",
          "lastUpdate": "2014-09-08T06:15:46 -02:00"
        },
        {
          "isDone": false,
          "content": "Aliqua duis consequat occaecat duis voluptate aliquip et Lorem aute adipisicing commodo. Id in sint incididunt Lorem adipisicing in anim laboris tempor. Aliqua dolor excepteur eiusmod id incididunt ullamco veniam nostrud sunt. Et exercitation fugiat ad mollit in duis laboris. Cupidatat nisi ipsum nostrud labore fugiat ipsum sit. Non Lorem commodo sunt qui veniam.\r\n",
          "createDate": "2016-11-16T03:18:56 -01:00",
          "lastUpdate": "2015-09-28T08:12:28 -02:00"
        },
        {
          "isDone": false,
          "content": "Qui est incididunt deserunt exercitation nisi velit. Aliqua mollit consequat in eu aliquip veniam anim do. Aliquip reprehenderit excepteur sunt nostrud commodo ullamco id amet ea in incididunt. Anim excepteur ipsum voluptate aliqua ex commodo id cillum ut ullamco non dolor. Deserunt pariatur aliqua occaecat ea irure fugiat qui amet ea qui elit sit eu.\r\n",
          "createDate": "2016-05-06T06:03:37 -02:00",
          "lastUpdate": "2014-07-10T08:02:56 -02:00"
        },
        {
          "isDone": true,
          "content": "Irure sint nostrud duis laborum sunt deserunt cupidatat. Sit pariatur ut duis nisi tempor. Est cillum esse commodo nostrud nulla in reprehenderit consequat magna mollit anim reprehenderit elit. Quis elit amet Lorem exercitation. Dolore laborum voluptate proident dolore enim deserunt dolor minim nulla id ea fugiat adipisicing aliquip.\r\n",
          "createDate": "2015-04-18T01:03:29 -02:00",
          "lastUpdate": "2014-03-16T01:49:30 -01:00"
        },
        {
          "isDone": false,
          "content": "Id culpa do qui in dolore. Ad voluptate duis nostrud irure anim incididunt. Cillum excepteur enim qui velit incididunt qui. Ipsum adipisicing in veniam est occaecat qui exercitation ex occaecat.\r\n",
          "createDate": "2014-08-30T12:53:43 -02:00",
          "lastUpdate": "2014-05-27T10:06:02 -02:00"
        },
        {
          "isDone": false,
          "content": "Amet ad adipisicing mollit cupidatat esse Lorem enim nostrud sit ea proident. Consectetur commodo enim aliquip nostrud nostrud qui eu ipsum nisi id reprehenderit Lorem nostrud. Deserunt reprehenderit laborum sunt duis. Ipsum commodo nostrud incididunt exercitation ipsum dolor ad mollit. Ea velit amet quis mollit ex sunt minim.\r\n",
          "createDate": "2017-09-14T04:47:11 -02:00",
          "lastUpdate": "2015-12-01T10:43:42 -01:00"
        },
        {
          "isDone": false,
          "content": "Et magna consequat commodo nisi ex amet amet laborum qui cupidatat deserunt. Incididunt nulla ullamco mollit est officia voluptate do irure id quis. Aliqua pariatur enim eu consectetur sint.\r\n",
          "createDate": "2017-03-25T10:26:23 -01:00",
          "lastUpdate": "2015-02-24T06:57:17 -01:00"
        },
        {
          "isDone": false,
          "content": "In culpa cillum ut reprehenderit voluptate do in sunt nulla minim esse. Commodo est pariatur Lorem labore ut cillum tempor amet. Laboris duis voluptate voluptate sunt aliquip tempor anim.\r\n",
          "createDate": "2016-09-19T10:03:55 -02:00",
          "lastUpdate": "2014-11-07T03:17:51 -01:00"
        },
        {
          "isDone": true,
          "content": "Cupidatat sit nostrud veniam pariatur occaecat velit irure ut magna pariatur non. Proident enim ullamco qui aliquip id est dolor Lorem consequat commodo Lorem. Adipisicing eu magna ad excepteur deserunt ipsum sit consequat cillum eiusmod fugiat commodo. Pariatur non fugiat laborum ullamco non ad pariatur laborum id. Mollit non ipsum commodo velit commodo.\r\n",
          "createDate": "2017-10-11T06:38:12 -02:00",
          "lastUpdate": "2015-02-24T12:51:46 -01:00"
        },
        {
          "isDone": true,
          "content": "Nulla Lorem amet magna eu aliqua commodo eiusmod quis. Incididunt nisi ea esse aliqua. Dolor quis irure aliquip deserunt anim labore id do in Lorem nisi fugiat sit.\r\n",
          "createDate": "2016-11-07T05:24:09 -01:00",
          "lastUpdate": "2015-12-12T11:41:12 -01:00"
        },
        {
          "isDone": true,
          "content": "Magna excepteur dolore dolor aute laborum culpa exercitation consectetur. Ipsum ea commodo commodo qui tempor reprehenderit et quis exercitation aliquip. Commodo ea exercitation cillum veniam mollit consequat enim. Aliqua duis do ullamco aliqua ad consequat fugiat laboris ea dolor sint elit. Dolore est et exercitation fugiat aliqua nostrud ut irure sunt ut voluptate incididunt tempor esse. Quis enim nostrud pariatur amet exercitation adipisicing sint laborum deserunt. Aliqua eu velit Lorem proident ullamco mollit.\r\n",
          "createDate": "2017-04-23T02:27:59 -02:00",
          "lastUpdate": "2018-02-20T07:22:01 -01:00"
        },
        {
          "isDone": false,
          "content": "Incididunt nostrud consequat esse eu cillum labore magna id officia aute eiusmod pariatur. Velit consequat enim nostrud nostrud ex nostrud do occaecat quis exercitation culpa nisi ad. Non tempor ad sit duis officia dolore proident et dolore incididunt velit. Incididunt adipisicing velit velit Lorem fugiat aliquip ut. Enim duis elit enim sunt.\r\n",
          "createDate": "2016-09-21T08:44:19 -02:00",
          "lastUpdate": "2015-07-10T11:34:46 -02:00"
        },
        {
          "isDone": false,
          "content": "Officia eu ullamco magna ad quis laborum sit aliquip incididunt aute nulla cupidatat. Veniam ad adipisicing ad irure esse. Esse sunt excepteur in duis cupidatat aute quis ipsum aute. Irure aliqua proident duis officia nisi eiusmod magna occaecat incididunt excepteur mollit. Aliquip officia cupidatat laborum adipisicing exercitation nisi dolore. Ex pariatur sit quis consequat nisi officia amet.\r\n",
          "createDate": "2015-10-15T09:57:01 -02:00",
          "lastUpdate": "2014-02-18T03:15:49 -01:00"
        },
        {
          "isDone": true,
          "content": "Minim eiusmod reprehenderit consectetur sunt quis dolore magna aute non mollit sint eiusmod. Aliqua mollit magna sint reprehenderit sit Lorem cupidatat eiusmod est sit. Nostrud consequat enim pariatur excepteur do Lorem labore id. Laborum Lorem Lorem do deserunt esse tempor eu ullamco. Ipsum anim exercitation adipisicing quis elit. Excepteur aliquip cillum dolor nostrud qui commodo aute sunt sunt sunt non ut et aliqua.\r\n",
          "createDate": "2016-08-26T07:27:32 -02:00",
          "lastUpdate": "2016-09-08T02:53:54 -02:00"
        },
        {
          "isDone": true,
          "content": "Incididunt cillum id nostrud excepteur eiusmod ad nulla ullamco adipisicing pariatur aliqua ad quis. Consequat est esse adipisicing aliqua nulla commodo duis enim excepteur. Velit non minim labore excepteur nisi incididunt sit irure et ipsum cupidatat non.\r\n",
          "createDate": "2017-04-17T03:45:33 -02:00",
          "lastUpdate": "2016-02-28T11:20:58 -01:00"
        },
        {
          "isDone": false,
          "content": "Non elit sunt amet incididunt ea enim Lorem ex pariatur nisi. Do in eu voluptate tempor. Velit est adipisicing reprehenderit pariatur. Enim aliquip duis deserunt nisi voluptate sit qui ea. Ullamco fugiat ad deserunt velit mollit anim.\r\n",
          "createDate": "2016-12-10T12:45:51 -01:00",
          "lastUpdate": "2018-02-05T05:50:24 -01:00"
        },
        {
          "isDone": false,
          "content": "Pariatur cupidatat elit occaecat non anim magna tempor occaecat laboris irure mollit non adipisicing ea. Non eiusmod aute quis proident id. Nostrud dolor magna cupidatat cupidatat id voluptate eu aute non qui cillum velit in. Aliquip voluptate ullamco velit aliqua aute labore.\r\n",
          "createDate": "2015-06-15T11:43:16 -02:00",
          "lastUpdate": "2014-10-26T12:15:00 -02:00"
        },
        {
          "isDone": false,
          "content": "Consequat nulla dolore laborum Lorem sit ipsum proident non ipsum aute laboris irure dolore ullamco. Et eu elit ad ullamco voluptate labore exercitation non. Laborum aliqua ipsum mollit ullamco. Est nulla officia ullamco proident fugiat mollit enim anim.\r\n",
          "createDate": "2016-09-16T09:58:59 -02:00",
          "lastUpdate": "2015-03-28T01:45:03 -01:00"
        },
        {
          "isDone": false,
          "content": "Reprehenderit Lorem incididunt aliquip aliquip quis est consectetur consequat. Velit sint excepteur magna sunt culpa cillum cupidatat anim dolore magna consequat elit. Consequat irure Lorem incididunt nostrud ea nisi in. Adipisicing veniam excepteur esse adipisicing aute nisi eu velit laboris nostrud. Excepteur occaecat aute duis adipisicing.\r\n",
          "createDate": "2014-06-21T03:05:29 -02:00",
          "lastUpdate": "2016-07-31T10:43:19 -02:00"
        },
        {
          "isDone": true,
          "content": "Esse laborum sunt aute enim aute irure. Amet aute proident dolore ipsum deserunt deserunt anim elit. Deserunt quis labore consequat cupidatat ut ad sit ut ut. Laborum sint enim laborum aliquip do. Cillum incididunt velit dolore aliqua adipisicing ex et adipisicing sit ut. Irure nostrud est do mollit ad anim pariatur. Officia minim ad id fugiat quis enim labore est aute.\r\n",
          "createDate": "2015-09-30T07:33:34 -02:00",
          "lastUpdate": "2017-05-28T12:06:07 -02:00"
        },
        {
          "isDone": false,
          "content": "Sint fugiat amet reprehenderit ut excepteur et tempor consequat culpa cupidatat. Ad laboris qui laborum deserunt qui id voluptate incididunt cupidatat in qui. Irure duis ex id consequat laborum eiusmod nisi consectetur minim dolore. Culpa adipisicing consequat pariatur anim do excepteur ut nostrud in Lorem velit. Enim aliquip in ad aute velit id.\r\n",
          "createDate": "2015-04-10T12:06:57 -02:00",
          "lastUpdate": "2015-05-30T05:09:17 -02:00"
        },
        {
          "isDone": true,
          "content": "Eu enim ea sit culpa. Aute dolor eiusmod voluptate id ex exercitation. Excepteur exercitation enim dolor ad est.\r\n",
          "createDate": "2015-03-15T11:39:59 -01:00",
          "lastUpdate": "2015-06-24T09:32:54 -02:00"
        },
        {
          "isDone": false,
          "content": "Quis eu Lorem veniam Lorem est. Laboris elit non non proident aliquip eu labore minim adipisicing cillum sit sint. Consectetur aliquip sunt ut nisi. Mollit duis magna sint aliqua anim id qui labore eiusmod aliqua sint minim consectetur anim.\r\n",
          "createDate": "2014-12-20T08:24:15 -01:00",
          "lastUpdate": "2017-12-10T12:13:09 -01:00"
        },
        {
          "isDone": true,
          "content": "Veniam esse anim consequat duis ex deserunt incididunt ea tempor non veniam mollit est. Lorem exercitation ipsum aute ea adipisicing nulla reprehenderit aliqua officia eu. Ullamco proident sunt ea irure Lorem. Nisi culpa quis excepteur commodo in enim incididunt qui.\r\n",
          "createDate": "2017-12-29T06:52:06 -01:00",
          "lastUpdate": "2016-12-31T07:23:03 -01:00"
        },
        {
          "isDone": false,
          "content": "Sint est eiusmod dolore reprehenderit id veniam quis in occaecat in ullamco veniam commodo. Ad excepteur ut ipsum Lorem exercitation ad minim do. Elit elit ea velit cupidatat voluptate reprehenderit quis nulla id.\r\n",
          "createDate": "2016-06-12T11:28:45 -02:00",
          "lastUpdate": "2015-01-29T02:19:13 -01:00"
        },
        {
          "isDone": true,
          "content": "Aliqua aliqua cillum cupidatat anim est. Irure adipisicing eiusmod pariatur minim non ullamco sit veniam. Proident ad labore mollit aliquip exercitation esse nulla aliqua sit. Tempor consequat proident aliqua officia proident qui esse esse laborum commodo laboris enim ex deserunt. Consequat aliqua commodo ex cillum proident sit adipisicing quis.\r\n",
          "createDate": "2014-09-17T08:22:45 -02:00",
          "lastUpdate": "2015-02-03T04:59:34 -01:00"
        },
        {
          "isDone": false,
          "content": "Reprehenderit laboris consequat id officia ad pariatur magna adipisicing eu. Magna tempor cupidatat veniam et laboris proident aute minim mollit deserunt. Mollit ut dolor amet aliquip id est non aliqua officia laborum ex aute voluptate ea. Adipisicing consectetur aliquip reprehenderit esse et laboris in. Enim non velit esse occaecat nisi aute aute. Fugiat tempor culpa ipsum consequat eu minim commodo esse consectetur enim. Sint incididunt mollit consectetur voluptate.\r\n",
          "createDate": "2017-10-26T07:01:55 -02:00",
          "lastUpdate": "2015-10-30T03:19:39 -01:00"
        },
        {
          "isDone": false,
          "content": "Amet ex veniam mollit amet incididunt eu laborum ipsum fugiat et commodo exercitation do. Elit nostrud velit est Lorem nisi tempor commodo dolore ad deserunt in. Est exercitation ex esse cillum adipisicing voluptate est sit veniam cillum dolore irure velit consectetur. Est amet exercitation fugiat ullamco sint esse irure tempor labore. Adipisicing est deserunt enim nostrud. Consectetur aute sit dolore dolore eu.\r\n",
          "createDate": "2015-01-16T05:55:34 -01:00",
          "lastUpdate": "2017-08-23T09:09:20 -02:00"
        },
        {
          "isDone": true,
          "content": "Proident sunt incididunt aliquip consequat minim proident do nulla eu nisi eiusmod fugiat. Ex enim aliqua aliquip culpa anim. Eu aute fugiat sint aliqua laborum do proident exercitation incididunt sunt do laborum est. Dolore officia nulla nisi cillum et in do est nulla et qui adipisicing quis esse.\r\n",
          "createDate": "2014-04-16T12:40:02 -02:00",
          "lastUpdate": "2017-12-11T04:36:20 -01:00"
        },
        {
          "isDone": true,
          "content": "Aute consequat enim occaecat dolore proident veniam. Nulla culpa est eu cillum. Irure eiusmod reprehenderit minim adipisicing sint voluptate sunt cupidatat nostrud. Veniam enim non aliqua quis excepteur ipsum ullamco culpa eu pariatur. Fugiat magna dolor officia do ea sit. Adipisicing aliquip est excepteur ut irure aliqua duis ut tempor consectetur ullamco.\r\n",
          "createDate": "2014-08-31T01:41:31 -02:00",
          "lastUpdate": "2017-07-17T06:43:29 -02:00"
        },
        {
          "isDone": true,
          "content": "Pariatur minim enim sit fugiat laboris Lorem. Culpa anim voluptate laborum incididunt velit. Exercitation fugiat eiusmod commodo ullamco veniam elit. In incididunt ea ut sit nisi proident ad non do consequat id cillum id non. Non amet quis commodo occaecat non ipsum anim culpa minim consequat tempor consectetur Lorem.\r\n",
          "createDate": "2015-07-05T08:39:38 -02:00",
          "lastUpdate": "2017-12-10T06:40:47 -01:00"
        },
        {
          "isDone": false,
          "content": "Quis dolor nulla nulla aute magna ex cillum eiusmod nulla cupidatat tempor do. Adipisicing culpa veniam proident elit voluptate voluptate. Culpa sit deserunt veniam ut non eu quis dolor fugiat nostrud enim pariatur.\r\n",
          "createDate": "2016-09-23T02:13:57 -02:00",
          "lastUpdate": "2016-08-23T11:23:20 -02:00"
        },
        {
          "isDone": false,
          "content": "Lorem proident duis anim cillum non est aliqua nisi. Tempor adipisicing velit culpa sunt incididunt aute sint irure voluptate. Voluptate incididunt deserunt in in dolor quis proident pariatur pariatur minim in id esse. Reprehenderit amet nisi minim amet eu incididunt do nostrud. Excepteur ut et sit consequat ea cupidatat reprehenderit et aliquip eu proident. Esse velit commodo minim anim proident deserunt laboris nulla cillum sint sit ut non excepteur. Et irure irure pariatur sit tempor proident est esse excepteur officia.\r\n",
          "createDate": "2015-10-05T11:13:25 -02:00",
          "lastUpdate": "2015-05-15T04:30:09 -02:00"
        },
        {
          "isDone": false,
          "content": "Do labore sunt incididunt ipsum commodo non cillum esse do exercitation non veniam aute. Quis ex reprehenderit adipisicing reprehenderit tempor sint. Consequat dolore aliqua do aute aute aliqua nisi mollit ad in nisi duis. Anim ea enim esse aliquip ea et dolore. Ullamco aliquip mollit Lorem laborum commodo consequat est nisi. Aute voluptate labore culpa non est incididunt aute nostrud nulla.\r\n",
          "createDate": "2016-07-06T01:00:57 -02:00",
          "lastUpdate": "2014-10-22T05:07:46 -02:00"
        },
        {
          "isDone": false,
          "content": "Magna ut aute consectetur et. Eu anim irure proident pariatur occaecat et ad cillum non ex consequat reprehenderit. Id sunt ea esse deserunt tempor adipisicing incididunt. Minim aute ullamco ipsum excepteur id consectetur sint. Consequat do ut duis anim adipisicing occaecat.\r\n",
          "createDate": "2016-09-05T11:52:29 -02:00",
          "lastUpdate": "2014-07-18T07:57:15 -02:00"
        },
        {
          "isDone": true,
          "content": "Eu proident cupidatat nulla veniam qui cillum nulla velit laborum sit elit tempor magna. Occaecat fugiat adipisicing magna mollit minim ea pariatur nulla duis in irure culpa aliquip pariatur. Officia Lorem irure consectetur officia sunt voluptate ea nulla eu veniam aliquip. Proident dolore aute sit Lorem consectetur ut aliquip dolor. Laborum id ut occaecat tempor quis laborum ipsum sint. Fugiat magna est laborum anim labore fugiat esse veniam cupidatat nostrud commodo aliqua.\r\n",
          "createDate": "2016-05-07T09:35:36 -02:00",
          "lastUpdate": "2017-04-30T10:19:20 -02:00"
        },
        {
          "isDone": true,
          "content": "Deserunt consectetur occaecat cillum ex amet sint eiusmod dolore reprehenderit reprehenderit ex sint culpa. Fugiat adipisicing occaecat est cupidatat id minim qui anim. Dolor mollit deserunt commodo dolor labore ad quis. Eu irure commodo labore quis anim labore nostrud eu Lorem. Proident sint magna ipsum consectetur reprehenderit exercitation et deserunt ex.\r\n",
          "createDate": "2015-04-04T07:29:58 -02:00",
          "lastUpdate": "2015-12-31T11:23:13 -01:00"
        },
        {
          "isDone": false,
          "content": "Aute commodo irure laborum aute nulla veniam laboris enim ut aliquip aliqua. Lorem do irure fugiat aliquip excepteur eu id culpa duis. Ullamco ad et mollit non eu.\r\n",
          "createDate": "2016-10-14T01:25:00 -02:00",
          "lastUpdate": "2014-12-16T11:40:50 -01:00"
        },
        {
          "isDone": false,
          "content": "Deserunt id anim fugiat incididunt voluptate ut pariatur mollit veniam in consequat esse. Pariatur officia mollit fugiat tempor tempor sit sunt in enim. Minim ullamco adipisicing mollit consequat consequat ad id minim. Deserunt velit proident cillum ut exercitation qui magna Lorem.\r\n",
          "createDate": "2017-07-18T11:45:40 -02:00",
          "lastUpdate": "2014-09-26T08:03:57 -02:00"
        },
        {
          "isDone": false,
          "content": "Aliqua enim adipisicing ut nisi dolor ea ut consectetur ea do proident minim. Amet velit officia commodo cupidatat pariatur tempor proident elit ex. Incididunt aute est quis anim quis amet. Eu sit dolore deserunt excepteur fugiat cupidatat. Non anim est anim Lorem.\r\n",
          "createDate": "2017-06-27T02:22:30 -02:00",
          "lastUpdate": "2017-04-29T05:35:54 -02:00"
        },
        {
          "isDone": true,
          "content": "Magna cillum id esse non nisi nostrud pariatur. Dolor duis laborum deserunt aute nulla consequat labore excepteur sint sit nostrud in culpa sit. Esse ut occaecat exercitation sint non enim non irure consequat ad id esse. Voluptate in consectetur consectetur ipsum commodo proident non officia veniam. Anim ea elit ullamco do laborum Lorem id in nulla nulla. Est tempor dolore sunt excepteur dolor in eiusmod esse sint consequat ullamco ut.\r\n",
          "createDate": "2015-03-18T08:34:53 -01:00",
          "lastUpdate": "2014-02-17T08:05:55 -01:00"
        },
        {
          "isDone": true,
          "content": "Amet dolor ullamco reprehenderit consectetur ea ut dolor amet minim. Non deserunt sit ut ex adipisicing exercitation sint ad non. Laboris cillum mollit in consectetur labore velit do magna veniam.\r\n",
          "createDate": "2015-01-21T01:42:27 -01:00",
          "lastUpdate": "2017-04-27T09:33:38 -02:00"
        },
        {
          "isDone": false,
          "content": "Do ex pariatur pariatur laboris quis est ullamco. Cupidatat pariatur nostrud consectetur commodo sint in cillum dolore proident elit. Sint eu eu commodo esse proident amet irure dolor eiusmod fugiat commodo voluptate.\r\n",
          "createDate": "2015-01-13T09:39:50 -01:00",
          "lastUpdate": "2014-01-10T02:56:30 -01:00"
        },
        {
          "isDone": false,
          "content": "Ea elit occaecat aliquip ea culpa qui veniam anim incididunt eiusmod nulla cillum voluptate irure. Lorem aliqua non magna Lorem consectetur reprehenderit duis dolore laborum eiusmod sit aliquip incididunt velit. Ad pariatur dolore id sint enim quis. Reprehenderit labore esse in in fugiat commodo ullamco adipisicing fugiat occaecat fugiat ad culpa in.\r\n",
          "createDate": "2014-03-26T07:04:49 -01:00",
          "lastUpdate": "2017-09-22T07:28:28 -02:00"
        },
        {
          "isDone": false,
          "content": "Minim quis fugiat cupidatat elit dolor aliqua. Id exercitation nostrud est occaecat labore fugiat cupidatat aliquip non amet dolor adipisicing eiusmod. Voluptate magna adipisicing ex nulla. Ea qui dolor velit excepteur aliquip ullamco. Pariatur mollit reprehenderit aliqua aliqua ut id. Ex reprehenderit nisi excepteur duis minim est laborum do eiusmod enim voluptate eu aliqua.\r\n",
          "createDate": "2015-01-23T04:35:38 -01:00",
          "lastUpdate": "2015-06-24T06:42:23 -02:00"
        },
        {
          "isDone": true,
          "content": "Proident ea eu dolor sit quis consequat sunt. Et incididunt pariatur aliqua tempor amet. Aliqua voluptate ad in proident aliquip. Nulla ut reprehenderit sunt commodo aliqua mollit laborum Lorem ut incididunt nulla. Cillum officia labore cupidatat adipisicing ipsum consequat.\r\n",
          "createDate": "2014-12-02T01:40:49 -01:00",
          "lastUpdate": "2015-07-03T08:48:40 -02:00"
        },
        {
          "isDone": true,
          "content": "Nisi minim irure reprehenderit ullamco. Voluptate veniam duis est incididunt mollit sit anim do magna irure adipisicing. Aliqua minim laboris veniam non aliquip labore aliquip eu proident exercitation. Ullamco exercitation velit occaecat esse elit.\r\n",
          "createDate": "2017-06-20T12:20:37 -02:00",
          "lastUpdate": "2015-02-25T05:32:27 -01:00"
        },
        {
          "isDone": true,
          "content": "Commodo ex aute sint minim. Esse nostrud non est anim elit minim elit irure enim. Cupidatat aliqua ut cupidatat aliqua dolore duis fugiat pariatur anim.\r\n",
          "createDate": "2016-07-25T01:31:23 -02:00",
          "lastUpdate": "2015-02-16T08:29:27 -01:00"
        },
        {
          "isDone": true,
          "content": "Exercitation non laborum nostrud culpa velit aute. Et anim esse fugiat non nostrud enim est dolore. Cillum ad culpa enim dolore id sit ullamco labore qui. Et consectetur esse eu veniam et cillum ipsum. Eu deserunt nisi incididunt voluptate ad sit proident amet ullamco laboris elit. Reprehenderit cillum aliquip amet ex cupidatat tempor velit velit excepteur aliquip et ex non. Ullamco id in nulla ipsum sunt sit cupidatat velit voluptate labore velit exercitation.\r\n",
          "createDate": "2016-09-24T12:17:40 -02:00",
          "lastUpdate": "2015-04-18T03:04:33 -02:00"
        },
        {
          "isDone": false,
          "content": "Reprehenderit excepteur laboris excepteur occaecat veniam pariatur sit deserunt deserunt mollit ullamco aliqua occaecat fugiat. Lorem magna duis ex ullamco est anim esse exercitation non tempor esse excepteur commodo adipisicing. Non duis reprehenderit velit occaecat qui enim non consequat duis do.\r\n",
          "createDate": "2016-12-07T12:25:06 -01:00",
          "lastUpdate": "2015-01-16T04:10:59 -01:00"
        },
        {
          "isDone": true,
          "content": "Magna id mollit occaecat dolor. Elit ad aliqua officia dolor. Ex ullamco voluptate ullamco duis in quis veniam sit nostrud id ex. Consectetur sit labore officia laborum deserunt et eiusmod minim. Quis laboris esse fugiat ex nulla consectetur exercitation amet fugiat tempor ex velit proident.\r\n",
          "createDate": "2017-05-21T03:39:00 -02:00",
          "lastUpdate": "2016-07-31T09:42:38 -02:00"
        },
        {
          "isDone": true,
          "content": "Velit tempor nisi voluptate incididunt. Amet non pariatur id sit. Incididunt et dolor quis duis tempor mollit irure voluptate elit irure. Do amet Lorem mollit tempor irure cupidatat aliqua deserunt Lorem. Aliquip anim eiusmod incididunt ipsum ullamco. Ullamco labore Lorem reprehenderit minim tempor velit ex reprehenderit elit labore cillum commodo sit et. Labore tempor quis culpa sunt Lorem et in amet.\r\n",
          "createDate": "2015-06-17T06:16:14 -02:00",
          "lastUpdate": "2014-04-25T10:59:34 -02:00"
        },
        {
          "isDone": false,
          "content": "Ex laborum ipsum ex anim id amet reprehenderit sint quis eu. Culpa aliqua veniam cillum excepteur do cupidatat exercitation quis laboris. Est consectetur ad incididunt ad veniam eu. Reprehenderit id nostrud est elit magna in qui commodo aliquip nisi est Lorem sit proident. Nulla eu proident elit elit adipisicing aliqua ut est voluptate est. Cupidatat sunt exercitation ipsum voluptate.\r\n",
          "createDate": "2015-12-24T06:33:51 -01:00",
          "lastUpdate": "2014-12-12T07:01:16 -01:00"
        },
        {
          "isDone": false,
          "content": "Proident cupidatat anim voluptate aute nisi est in. Voluptate velit reprehenderit minim deserunt Lorem exercitation ea. Dolor excepteur ullamco ex deserunt sint incididunt eu cupidatat quis officia. Dolor cupidatat eiusmod officia Lorem. Laborum sit ea ullamco minim nulla eu Lorem pariatur. Magna incididunt officia commodo reprehenderit ex. Duis deserunt officia sunt excepteur deserunt eiusmod culpa consectetur ea minim sint.\r\n",
          "createDate": "2017-03-04T11:24:26 -01:00",
          "lastUpdate": "2015-07-21T03:44:32 -02:00"
        },
        {
          "isDone": true,
          "content": "In aliquip officia occaecat commodo eiusmod aliquip est deserunt labore adipisicing. In esse ipsum elit commodo aliquip aliquip occaecat officia aliquip enim nulla. Consequat aute ipsum labore commodo nostrud.\r\n",
          "createDate": "2016-10-03T04:56:30 -02:00",
          "lastUpdate": "2014-04-30T03:33:18 -02:00"
        },
        {
          "isDone": false,
          "content": "Cillum consectetur dolor exercitation dolore nulla veniam et velit. Tempor ex deserunt sit aute eu amet aliqua consequat ea sunt sunt commodo. Ipsum nostrud minim nulla aliquip consectetur anim cillum nostrud eu amet sit. Ex exercitation ipsum et excepteur occaecat cupidatat. Velit incididunt sit dolore do cupidatat culpa ex non laboris irure id incididunt do. Amet irure aliquip minim non proident est sint nulla sint non est dolor. Nisi dolor in veniam eiusmod eiusmod do laborum ut exercitation.\r\n",
          "createDate": "2016-07-07T06:52:18 -02:00",
          "lastUpdate": "2015-11-03T10:35:27 -01:00"
        },
        {
          "isDone": false,
          "content": "Ut culpa excepteur occaecat dolor. Fugiat Lorem commodo sit irure occaecat reprehenderit. Quis sit commodo ad proident id aute ut consequat ex incididunt nulla commodo. Qui tempor fugiat et nulla ipsum fugiat deserunt adipisicing eu exercitation labore. Consectetur irure eu eu fugiat occaecat amet nostrud consequat tempor in duis excepteur veniam. Eu irure elit nisi sunt nostrud labore et exercitation culpa. Do anim nostrud occaecat aute elit non.\r\n",
          "createDate": "2014-10-08T01:08:53 -02:00",
          "lastUpdate": "2015-10-12T03:04:53 -02:00"
        },
        {
          "isDone": false,
          "content": "In velit consectetur exercitation sunt. Eiusmod aute ut ex cillum dolore deserunt laboris. Pariatur est duis velit ut. Ex nulla aliqua cillum velit sunt sit.\r\n",
          "createDate": "2017-12-15T03:18:24 -01:00",
          "lastUpdate": "2016-02-01T10:58:02 -01:00"
        },
        {
          "isDone": false,
          "content": "Ipsum consequat eiusmod duis aute sint cupidatat aliquip sint aute non minim. Consequat qui labore adipisicing dolore veniam exercitation. Duis est nostrud occaecat nisi veniam qui.\r\n",
          "createDate": "2015-11-06T10:27:14 -01:00",
          "lastUpdate": "2017-01-17T02:54:45 -01:00"
        },
        {
          "isDone": false,
          "content": "Velit commodo ad eu laborum excepteur ex qui. Minim ad ipsum dolor adipisicing culpa. Quis et magna consequat ut laborum et amet eiusmod eu.\r\n",
          "createDate": "2016-06-03T05:15:10 -02:00",
          "lastUpdate": "2015-04-18T10:19:25 -02:00"
        },
        {
          "isDone": false,
          "content": "Consectetur et cupidatat culpa anim. Ad duis ex labore adipisicing consectetur sit incididunt ea ad ea labore officia ad officia. Ipsum occaecat veniam et aliqua in est aliqua nostrud. Nulla nisi consectetur enim amet qui aute velit eiusmod do veniam id pariatur ut cupidatat. Aliquip exercitation ullamco excepteur ad ut pariatur duis adipisicing id sunt. Mollit incididunt reprehenderit laborum cillum et qui.\r\n",
          "createDate": "2015-07-13T03:43:31 -02:00",
          "lastUpdate": "2015-08-14T08:09:24 -02:00"
        },
        {
          "isDone": true,
          "content": "Quis tempor voluptate sit id ex officia cillum id occaecat ullamco sit. Sunt aute sit minim occaecat. Non consequat commodo consectetur id ullamco eu tempor reprehenderit deserunt aute. Ut ea enim velit consectetur et. Nulla esse mollit cillum esse occaecat nisi non ea labore duis magna laborum id proident. Enim incididunt labore aliqua qui commodo mollit minim adipisicing consequat aliqua. Aute adipisicing eiusmod anim ea.\r\n",
          "createDate": "2014-06-04T08:30:45 -02:00",
          "lastUpdate": "2017-08-16T08:49:29 -02:00"
        },
        {
          "isDone": false,
          "content": "Eu aliquip non sit aliqua labore esse et. Adipisicing sit tempor exercitation magna dolor dolore. Amet et commodo anim fugiat culpa. Ex eu nulla magna minim ad laborum voluptate ipsum.\r\n",
          "createDate": "2016-09-02T02:02:09 -02:00",
          "lastUpdate": "2017-08-20T11:14:32 -02:00"
        },
        {
          "isDone": true,
          "content": "Culpa aliqua quis anim ut aliquip non deserunt esse dolor. Consequat do consectetur mollit labore id enim. Duis esse velit veniam officia fugiat incididunt sit laboris aliqua esse cillum. Sunt cillum nisi eiusmod reprehenderit eu deserunt.\r\n",
          "createDate": "2014-06-17T01:34:25 -02:00",
          "lastUpdate": "2015-04-03T06:42:32 -02:00"
        },
        {
          "isDone": true,
          "content": "Occaecat qui aliquip eu qui ut id do excepteur cillum. Ea ipsum sunt dolor esse cillum sit ad ad est deserunt sit sunt aute. Ullamco magna elit magna adipisicing est ad cillum labore labore proident dolor. Consequat nisi excepteur laborum voluptate veniam aute ipsum incididunt ipsum cupidatat sit do. Exercitation excepteur ex veniam do anim eiusmod ullamco irure et.\r\n",
          "createDate": "2016-10-01T01:42:42 -02:00",
          "lastUpdate": "2017-08-02T11:13:11 -02:00"
        },
        {
          "isDone": true,
          "content": "Anim amet veniam excepteur cillum non enim magna ex consectetur laboris veniam. Anim Lorem adipisicing eu consectetur dolor do minim aliqua ullamco et pariatur adipisicing. Ullamco sit ullamco ex nisi nostrud excepteur labore tempor. Et non labore nostrud sint quis nostrud officia et commodo nulla sit. Consectetur magna reprehenderit ea cillum excepteur ullamco exercitation.\r\n",
          "createDate": "2016-01-20T12:35:30 -01:00",
          "lastUpdate": "2017-11-15T06:38:43 -01:00"
        }
      ]
  };

  getSections() {
    return this.state.items.map((item) => {
      return item.content.substring(0, 1);
    })
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort()
    .map((letter) => ({
      title: letter.toUpperCase(),
      data: this.state.items.filter((item) => item.content.substring(0, 1).toLowerCase() === letter.toLowerCase()),
    }));
  }

  onPress = (item) => (event) => {
    this.props.onPress(item);
  }

  render() {
    return (
      <View>
        <SectionList
          sections={this.getSections()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.item} onPress={this.onPress(item)}>
              <Text style={styles.itemContent} ellipsizeMode="tail" numberOfLines={1}>{item.content}</Text>
              <Text style={styles.itemDate}>{item.createDate}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  item: {
    padding: 10,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  itemContent: {
    fontSize: 18,
    height: 25,
  },
  itemDate: {
    fontSize: 12,
    height: 15,
  },
});

import {
  AsyncStorage,
} from 'react-native';

import EE from 'eventemitter';

export const events = new EE.EventEmitter();

const startData = [
  {
    "id": "note-1",
    "isDone": true,
    "content": "Consectetur laboris enim eu tempor. Nostrud aliquip sunt ad pariatur voluptate esse officia ut. Id irure ut est cillum aliqua velit esse ad ex.\r\n",
    "createDate": "2016-03-28T10:00:53",
    "lastUpdate": "2016-08-18T03:43:45"
  },
  {
    "id": "note-2",
    "isDone": false,
    "content": "Nisi aliquip non dolore id eiusmod qui minim ea irure excepteur ipsum. Mollit fugiat laboris amet nostrud ad ex adipisicing laborum quis. Reprehenderit dolor nostrud ipsum sunt incididunt eu ea id. Anim cupidatat duis pariatur eu dolore est deserunt id incididunt aliqua exercitation ipsum fugiat irure. Nostrud incididunt occaecat sunt aliquip. Do deserunt occaecat nisi eiusmod. Dolore sunt velit officia sint id nisi labore sit quis ex.\r\n",
    "createDate": "2018-02-12T08:06:35",
    "lastUpdate": "2017-10-22T01:58:27"
  },
  {
    "id": "note-3",
    "isDone": true,
    "content": "Et deserunt amet cillum occaecat cupidatat exercitation ipsum sint enim adipisicing minim officia cupidatat magna. Commodo dolor nostrud ex minim pariatur fugiat laboris aliquip aute ut velit ullamco deserunt dolor. Proident non duis velit exercitation exercitation ut consectetur minim labore nostrud Lorem adipisicing culpa id.\r\n",
    "createDate": "2016-01-02T08:58:04",
    "lastUpdate": "2016-01-16T01:50:35"
  },
  {
    "id": "note-4",
    "isDone": true,
    "content": "Do consectetur dolor tempor qui ad dolor tempor occaecat ut veniam cillum esse exercitation sit. Sint eu do fugiat eu duis aliqua laborum deserunt ad velit nisi duis aute. Ex enim anim quis ea et ad elit. Sit quis adipisicing sunt aliqua. Ex fugiat voluptate elit in culpa tempor.\r\n",
    "createDate": "2018-07-23T06:48:57",
    "lastUpdate": "2016-01-07T03:31:04"
  },
  {
    "id": "note-5",
    "isDone": true,
    "content": "Ad commodo est elit dolore culpa incididunt sint esse irure incididunt proident. Dolore quis non Lorem anim ex esse adipisicing. Proident minim esse sit amet commodo do ullamco. Nulla culpa sunt mollit ut amet. Dolore non quis cupidatat mollit reprehenderit ullamco aliquip quis aliquip laborum tempor anim dolore non. Consequat enim nisi Lorem do aliquip qui nostrud.\r\n",
    "createDate": "2018-09-26T04:22:34",
    "lastUpdate": "2016-07-21T10:06:40"
  },
  {
    "id": "note-6",
    "isDone": true,
    "content": "Elit non cillum quis minim ullamco velit sit mollit nulla sunt adipisicing elit cillum voluptate. Labore pariatur ut ullamco incididunt labore ex ipsum officia deserunt elit deserunt est fugiat. Fugiat est occaecat fugiat irure. Officia sit Lorem excepteur amet nostrud ex aute non ex. In deserunt sunt esse aliquip laboris et quis reprehenderit commodo excepteur non excepteur.\r\n",
    "createDate": "2017-09-03T05:59:05",
    "lastUpdate": "2016-05-31T01:04:31"
  },
  {
    "id": "note-7",
    "isDone": true,
    "content": "Sit fugiat et mollit ullamco velit fugiat et. Eu velit et ullamco est mollit non pariatur commodo exercitation eu. Nulla reprehenderit enim consequat laborum cupidatat duis ipsum quis. Reprehenderit reprehenderit qui consectetur deserunt dolor aute officia minim elit. Eiusmod adipisicing sint labore est irure excepteur ex irure ex voluptate est pariatur aute cillum. Mollit magna cupidatat officia ipsum.\r\n",
    "createDate": "2018-01-21T09:08:31",
    "lastUpdate": "2018-09-08T06:15:46"
  },
  {
    "id": "note-8",
    "isDone": false,
    "content": "Aliqua duis consequat occaecat duis voluptate aliquip et Lorem aute adipisicing commodo. Id in sint incididunt Lorem adipisicing in anim laboris tempor. Aliqua dolor excepteur eiusmod id incididunt ullamco veniam nostrud sunt. Et exercitation fugiat ad mollit in duis laboris. Cupidatat nisi ipsum nostrud labore fugiat ipsum sit. Non Lorem commodo sunt qui veniam.\r\n",
    "createDate": "2016-11-16T03:18:56",
    "lastUpdate": "2016-09-28T08:12:28"
  },
  {
    "id": "note-9",
    "isDone": false,
    "content": "Qui est incididunt deserunt exercitation nisi velit. Aliqua mollit consequat in eu aliquip veniam anim do. Aliquip reprehenderit excepteur sunt nostrud commodo ullamco id amet ea in incididunt. Anim excepteur ipsum voluptate aliqua ex commodo id cillum ut ullamco non dolor. Deserunt pariatur aliqua occaecat ea irure fugiat qui amet ea qui elit sit eu.\r\n",
    "createDate": "2016-05-06T06:03:37",
    "lastUpdate": "2018-07-10T08:02:56"
  },
  {
    "id": "note-10",
    "isDone": true,
    "content": "Irure sint nostrud duis laborum sunt deserunt cupidatat. Sit pariatur ut duis nisi tempor. Est cillum esse commodo nostrud nulla in reprehenderit consequat magna mollit anim reprehenderit elit. Quis elit amet Lorem exercitation. Dolore laborum voluptate proident dolore enim deserunt dolor minim nulla id ea fugiat adipisicing aliquip.\r\n",
    "createDate": "2016-04-18T01:03:29",
    "lastUpdate": "2018-03-16T01:49:30"
  },
  {
    "id": "note-11",
    "isDone": false,
    "content": "Id culpa do qui in dolore. Ad voluptate duis nostrud irure anim incididunt. Cillum excepteur enim qui velit incididunt qui. Ipsum adipisicing in veniam est occaecat qui exercitation ex occaecat.\r\n",
    "createDate": "2018-08-30T12:53:43",
    "lastUpdate": "2018-05-27T10:06:02"
  },
  {
    "id": "note-12",
    "isDone": false,
    "content": "Amet ad adipisicing mollit cupidatat esse Lorem enim nostrud sit ea proident. Consectetur commodo enim aliquip nostrud nostrud qui eu ipsum nisi id reprehenderit Lorem nostrud. Deserunt reprehenderit laborum sunt duis. Ipsum commodo nostrud incididunt exercitation ipsum dolor ad mollit. Ea velit amet quis mollit ex sunt minim.\r\n",
    "createDate": "2017-09-14T04:47:11",
    "lastUpdate": "2016-12-01T10:43:42"
  },
  {
    "id": "note-13",
    "isDone": false,
    "content": "Et magna consequat commodo nisi ex amet amet laborum qui cupidatat deserunt. Incididunt nulla ullamco mollit est officia voluptate do irure id quis. Aliqua pariatur enim eu consectetur sint.\r\n",
    "createDate": "2017-03-25T10:26:23",
    "lastUpdate": "2016-02-24T06:57:17"
  },
  {
    "id": "note-14",
    "isDone": false,
    "content": "In culpa cillum ut reprehenderit voluptate do in sunt nulla minim esse. Commodo est pariatur Lorem labore ut cillum tempor amet. Laboris duis voluptate voluptate sunt aliquip tempor anim.\r\n",
    "createDate": "2016-09-19T10:03:55",
    "lastUpdate": "2018-11-07T03:17:51"
  },
  {
    "id": "note-15",
    "isDone": true,
    "content": "Cupidatat sit nostrud veniam pariatur occaecat velit irure ut magna pariatur non. Proident enim ullamco qui aliquip id est dolor Lorem consequat commodo Lorem. Adipisicing eu magna ad excepteur deserunt ipsum sit consequat cillum eiusmod fugiat commodo. Pariatur non fugiat laborum ullamco non ad pariatur laborum id. Mollit non ipsum commodo velit commodo.\r\n",
    "createDate": "2017-10-11T06:38:12",
    "lastUpdate": "2016-02-24T12:51:46"
  },
  {
    "id": "note-16",
    "isDone": true,
    "content": "Nulla Lorem amet magna eu aliqua commodo eiusmod quis. Incididunt nisi ea esse aliqua. Dolor quis irure aliquip deserunt anim labore id do in Lorem nisi fugiat sit.\r\n",
    "createDate": "2016-11-07T05:24:09",
    "lastUpdate": "2016-12-12T11:41:12"
  },
  {
    "id": "note-17",
    "isDone": true,
    "content": "Magna excepteur dolore dolor aute laborum culpa exercitation consectetur. Ipsum ea commodo commodo qui tempor reprehenderit et quis exercitation aliquip. Commodo ea exercitation cillum veniam mollit consequat enim. Aliqua duis do ullamco aliqua ad consequat fugiat laboris ea dolor sint elit. Dolore est et exercitation fugiat aliqua nostrud ut irure sunt ut voluptate incididunt tempor esse. Quis enim nostrud pariatur amet exercitation adipisicing sint laborum deserunt. Aliqua eu velit Lorem proident ullamco mollit.\r\n",
    "createDate": "2017-04-23T02:27:59",
    "lastUpdate": "2018-02-20T07:22:01"
  },
  {
    "id": "note-18",
    "isDone": false,
    "content": "Incididunt nostrud consequat esse eu cillum labore magna id officia aute eiusmod pariatur. Velit consequat enim nostrud nostrud ex nostrud do occaecat quis exercitation culpa nisi ad. Non tempor ad sit duis officia dolore proident et dolore incididunt velit. Incididunt adipisicing velit velit Lorem fugiat aliquip ut. Enim duis elit enim sunt.\r\n",
    "createDate": "2016-09-21T08:44:19",
    "lastUpdate": "2016-07-10T11:34:46"
  },
  {
    "id": "note-19",
    "isDone": false,
    "content": "Officia eu ullamco magna ad quis laborum sit aliquip incididunt aute nulla cupidatat. Veniam ad adipisicing ad irure esse. Esse sunt excepteur in duis cupidatat aute quis ipsum aute. Irure aliqua proident duis officia nisi eiusmod magna occaecat incididunt excepteur mollit. Aliquip officia cupidatat laborum adipisicing exercitation nisi dolore. Ex pariatur sit quis consequat nisi officia amet.\r\n",
    "createDate": "2016-10-15T09:57:01",
    "lastUpdate": "2018-02-18T03:15:49"
  },
  {
    "id": "note-20",
    "isDone": true,
    "content": "Minim eiusmod reprehenderit consectetur sunt quis dolore magna aute non mollit sint eiusmod. Aliqua mollit magna sint reprehenderit sit Lorem cupidatat eiusmod est sit. Nostrud consequat enim pariatur excepteur do Lorem labore id. Laborum Lorem Lorem do deserunt esse tempor eu ullamco. Ipsum anim exercitation adipisicing quis elit. Excepteur aliquip cillum dolor nostrud qui commodo aute sunt sunt sunt non ut et aliqua.\r\n",
    "createDate": "2016-08-26T07:27:32",
    "lastUpdate": "2016-09-08T02:53:54"
  },
  {
    "id": "note-21",
    "isDone": true,
    "content": "Incididunt cillum id nostrud excepteur eiusmod ad nulla ullamco adipisicing pariatur aliqua ad quis. Consequat est esse adipisicing aliqua nulla commodo duis enim excepteur. Velit non minim labore excepteur nisi incididunt sit irure et ipsum cupidatat non.\r\n",
    "createDate": "2017-04-17T03:45:33",
    "lastUpdate": "2016-02-28T11:20:58"
  },
  {
    "id": "note-22",
    "isDone": false,
    "content": "Non elit sunt amet incididunt ea enim Lorem ex pariatur nisi. Do in eu voluptate tempor. Velit est adipisicing reprehenderit pariatur. Enim aliquip duis deserunt nisi voluptate sit qui ea. Ullamco fugiat ad deserunt velit mollit anim.\r\n",
    "createDate": "2016-12-10T12:45:51",
    "lastUpdate": "2018-02-05T05:50:24"
  },
  {
    "id": "note-23",
    "isDone": false,
    "content": "Pariatur cupidatat elit occaecat non anim magna tempor occaecat laboris irure mollit non adipisicing ea. Non eiusmod aute quis proident id. Nostrud dolor magna cupidatat cupidatat id voluptate eu aute non qui cillum velit in. Aliquip voluptate ullamco velit aliqua aute labore.\r\n",
    "createDate": "2016-06-15T11:43:16",
    "lastUpdate": "2018-10-26T12:15:00"
  },
  {
    "id": "note-24",
    "isDone": false,
    "content": "Consequat nulla dolore laborum Lorem sit ipsum proident non ipsum aute laboris irure dolore ullamco. Et eu elit ad ullamco voluptate labore exercitation non. Laborum aliqua ipsum mollit ullamco. Est nulla officia ullamco proident fugiat mollit enim anim.\r\n",
    "createDate": "2016-09-16T09:58:59",
    "lastUpdate": "2016-03-28T01:45:03"
  },
  {
    "id": "note-25",
    "isDone": false,
    "content": "Reprehenderit Lorem incididunt aliquip aliquip quis est consectetur consequat. Velit sint excepteur magna sunt culpa cillum cupidatat anim dolore magna consequat elit. Consequat irure Lorem incididunt nostrud ea nisi in. Adipisicing veniam excepteur esse adipisicing aute nisi eu velit laboris nostrud. Excepteur occaecat aute duis adipisicing.\r\n",
    "createDate": "2018-06-21T03:05:29",
    "lastUpdate": "2016-07-31T10:43:19"
  },
  {
    "id": "note-26",
    "isDone": true,
    "content": "Esse laborum sunt aute enim aute irure. Amet aute proident dolore ipsum deserunt deserunt anim elit. Deserunt quis labore consequat cupidatat ut ad sit ut ut. Laborum sint enim laborum aliquip do. Cillum incididunt velit dolore aliqua adipisicing ex et adipisicing sit ut. Irure nostrud est do mollit ad anim pariatur. Officia minim ad id fugiat quis enim labore est aute.\r\n",
    "createDate": "2016-09-30T07:33:34",
    "lastUpdate": "2017-05-28T12:06:07"
  },
  {
    "id": "note-27",
    "isDone": false,
    "content": "Sint fugiat amet reprehenderit ut excepteur et tempor consequat culpa cupidatat. Ad laboris qui laborum deserunt qui id voluptate incididunt cupidatat in qui. Irure duis ex id consequat laborum eiusmod nisi consectetur minim dolore. Culpa adipisicing consequat pariatur anim do excepteur ut nostrud in Lorem velit. Enim aliquip in ad aute velit id.\r\n",
    "createDate": "2016-04-10T12:06:57",
    "lastUpdate": "2016-05-30T05:09:17"
  },
  {
    "id": "note-28",
    "isDone": true,
    "content": "Eu enim ea sit culpa. Aute dolor eiusmod voluptate id ex exercitation. Excepteur exercitation enim dolor ad est.\r\n",
    "createDate": "2016-03-15T11:39:59",
    "lastUpdate": "2016-06-24T09:32:54"
  },
  {
    "id": "note-29",
    "isDone": false,
    "content": "Quis eu Lorem veniam Lorem est. Laboris elit non non proident aliquip eu labore minim adipisicing cillum sit sint. Consectetur aliquip sunt ut nisi. Mollit duis magna sint aliqua anim id qui labore eiusmod aliqua sint minim consectetur anim.\r\n",
    "createDate": "2018-12-20T08:24:15",
    "lastUpdate": "2017-12-10T12:13:09"
  },
];

let items = [];

export const addNote = (data) => {
  data.lastUpdate = new Date();
  data.id = `note-${items.length}`;
  return updateNote(data);
};

export const updateNote = (data) => {
  data.lastUpdate = new Date();
  return AsyncStorage.setItem(data.id, JSON.stringify(data)).then(() => {
    events.emit('newData');
  });
};

export const removeNote = ({ id }) => {
  return AsyncStorage.removeItem(id).then(() => {
    events.emit('newData');
  });
};

export const getNotes = () => {
  return AsyncStorage.getAllKeys().then((keys) => {
    const notesKeys = keys.filter((key) => key.indexOf('note') === 0);
    return AsyncStorage.multiGet(notesKeys).then((items) => {
      const newItems = items.map((item) => JSON.parse(item[1]));
      items = [].concat(startData, newItems);
      return items;
    }).catch((err) => {
      console.log(err);
    });
  });
};

/* 
Є масив test_arr = []
Напишіть функцію яка заповинть масив парними числами
*/
// const test_arr = [];
// function getEvenNumber(length) {
//   for (let i = 1; i <= length; i++) {
//     test_arr.push(i * 2); //1*2= 2     2*2  = 4   3*2 = 6 4* 2 = 8
//   }
// }
// getEvenNumber(4);

// console.log(test_arr);

/* 
Напишіть функцію яка приймає параметром масив з данними ( строки, числа, булеан значення)
а повертає масив який містіть тільки строки
*/
// function test(arr_ar) {
//   let result = arr_ar.filter(elem => {
//     return typeof elem === 'string';
//   });
//   return result;
// }
// const arr = ['str', 9, true, 111, false, 'huligan'];
// console.log(test(arr));

/* 
Напишіть функцію яка заповнить масив 10-ма рандомними числами
*/

// function fillupArrNumbers() {
//   const arr_numbers = [];
//   for (let i = 0; i < 10; i++) {
//     arr_numbers.push(Math.floor(Math.random() * 40));
//   }
//   return arr_numbers;
// }
// console.log(fillupArrNumbers());

/* 
Створіть функцію яка приймае параметро масив об'єктів і повертає
новий масив обє'ктів у кодного з яких поле completed дорівнює false
*/

// let todos = [
//   {
//     userId: 1,
//     id: 1,
//     title: 'delectus aut autem',
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: 'quis ut nam facilis et officia qui',
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: 'fugiat veniam minus',
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: 'et porro tempora',
//     completed: true, //
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: 'qui ullam ratione quibusdam voluptatem quia omnis',
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: 'illo expedita consequatur quia in',
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: 'quo adipisci enim quam ut ab',
//     completed: true, //
//   },
//   {
//     userId: 1,
//     id: 9,
//     title: 'molestiae perspiciatis ipsa',
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: 'illo est ratione doloremque quia maiores aut',
//     completed: true, //
//   },
//   {
//     userId: 1,
//     id: 11,
//     title: 'vero rerum temporibus dolor',
//     completed: true,
//   },
// ];

// function getUncomplitedToDo(todo_arr) {
//   return todo_arr.filter(todo => todo.completed === false);
// }
// console.log(getUncomplitedToDo(todos));

let comments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
  {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  },
  {
    postId: 1,
    id: 4,
    name: 'alias odio sit',
    email: 'Lew@alysha.tv',
    body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
  },
  {
    postId: 1,
    id: 5,
    name: 'vero eaque aliquid doloribus et culpa',
    email: 'Hayden@althea.biz',
    body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
  },
  {
    postId: 2,
    id: 6,
    name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
    email: 'Presley.Mueller@myrl.com',
    body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
  },
  {
    postId: 2,
    id: 7,
    name: 'repellat consequatur praesentium vel minus molestias voluptatum',
    email: 'Dallas@ole.me',
    body: 'maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor',
  },
  {
    postId: 2,
    id: 8,
    name: 'et omnis dolorem',
    email: 'Mallory_Kunze@marie.org',
    body: 'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
  },
  {
    postId: 2,
    id: 9,
    name: 'provident id voluptas',
    email: 'Meghan_Littel@rene.us',
    body: 'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus',
  },
  {
    postId: 2,
    id: 10,
    name: 'eaque et deleniti atque tenetur ut quo ut',
    email: 'Carmen_Keeling@caroline.name',
    body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis',
  },
  {
    postId: 3,
    id: 11,
    name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
    email: 'Veronica_Goodwin@timmothy.net',
    body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
  },
  {
    postId: 3,
    id: 12,
    name: 'modi ut eos dolores illum nam dolor',
    email: 'Oswald.Vandervort@leanne.org',
    body: 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit',
  },
  {
    postId: 3,
    id: 13,
    name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
    email: 'Kariane@jadyn.tv',
    body: 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et',
  },
  {
    postId: 3,
    id: 14,
    name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
    email: 'Nathan@solon.io',
    body: 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum',
  },
  {
    postId: 3,
    id: 15,
    name: 'debitis magnam hic odit aut ullam nostrum tenetur',
    email: 'Maynard.Hodkiewicz@roberta.com',
    body: 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia',
  },
  {
    postId: 4,
    id: 16,
    name: 'perferendis temporibus delectus optio ea eum ratione dolorum',
    email: 'Christine@ayana.info',
    body: 'iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis',
  },
  {
    postId: 4,
    id: 17,
    name: 'eos est animi quis',
    email: 'Preston_Hudson@blaise.tv',
    body: 'consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore',
  },
  {
    postId: 4,
    id: 18,
    name: 'aut et tenetur ducimus illum aut nulla ab',
    email: 'Vincenza_Klocko@albertha.name',
    body: 'veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias',
  },
  {
    postId: 4,
    id: 19,
    name: 'sed impedit rerum quia et et inventore unde officiis',
    email: 'Madelynn.Gorczany@darion.biz',
    body: 'doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut',
  },
  {
    postId: 4,
    id: 20,
    name: 'Nickname',
    body: 'cool video',
  },
];
/* 
Напишіть функцію яка параметром приймає id посту і повертає масив коментарів
(масив об'єктів) у яких postId =  id з параметру функції
*/
// function getFilteredComentsArr(post_id) {
//   return comments.filter(({ postId }) => postId === post_id);
// }

// console.log(getFilteredComentsArr(3));
let comment = {
  postId: 1,
  id: 1,
  name: 'id labore ex et quam laborum',
  email: 'Eliseo@gardner.biz',
  body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
};
/* напишіть фукнцію яка виведе в консоль кожну властивіть об'єкту comment */
function logEveryProperty(comment_obj) {
  for (const key in comment_obj) {
    console.log(comment[key]);
  }
  return '';
}
console.log(logEveryProperty(comment));

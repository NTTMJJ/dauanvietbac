'use strict';
// Sửa nội dung / ảnh ở đây. Mỗi mục được tự chia thành các trang vừa khung đọc.
// Thay URL bên dưới bằng link YouTube hoặc đường dẫn video MP4 của lớp.
const closingVideoUrl = 'video/vid01.mp4';
// Chú thích mặc định cho minh họa SVG đang có trong images/.
const illustrationDetails = {
 opening:{alt:'Minh họa núi xanh, mặt trời và dòng sông uốn quanh Việt Bắc',caption:'Mở một trang giấy, chạm một miền thương.'},
 mountains:{alt:'Các lớp núi xanh và dải sương trắng dưới mặt trời buổi sớm',caption:'Núi nối núi, mây nối những niềm thương.'},
 home:{alt:'Nhà sàn ấm áp giữa núi rừng Việt Bắc',caption:'Một mái nhà nhỏ, một khoảng ấm dài.'},
 poem:{alt:'Trăng sáng trên núi rừng và dòng suối trong đêm xanh',caption:'Gom tiếng suối vào thơ.'},
 memory:{alt:'Con đường nhỏ qua đồi cỏ và núi xa',caption:'Ký ức được giữ bằng những điều bình dị.'},
 ending:{alt:'Mặt trời vàng trên dãy núi và con đường hướng về miền xa',caption:'Trang giấy khép lại, miền thương vẫn mở.'}
};
const chapters = [
 { title:'Lời Ngỏ', image:'opening', alt:'Bìa báo tường và thầy cô Việt Bắc', caption:'Mở một trang giấy, chạm một miền thương.', pageImages:[
  {src:'anh0.jpg',alt:'Bìa báo tường Dấu ấn Việt Bắc – Một năm nhìn lại',caption:'Dấu ấn Việt Bắc – một năm nhìn lại.'},
  {src:'anh01.jpg',alt:'Thầy cô cùng nhau lưu giữ khoảnh khắc tại Việt Bắc',caption:'Những người đồng hành làm nên dấu ấn Việt Bắc.'},
  {src:'anh1.jpg',alt:'Minh họa núi xanh, mặt trời và dòng sông uốn quanh Việt Bắc',caption:'Mở một trang giấy, chạm một miền thương.'},
  {src:'anh2.jpg',alt:'Các lớp núi xanh và dải sương trắng dưới mặt trời buổi sớm',caption:'Mỗi trang mở ra một sắc xanh khác.'},
  {src:'anh3.jpg',alt:'Nhà sàn ấm áp giữa núi rừng Việt Bắc',caption:'Một mái nhà nhỏ, một khoảng ấm dài.'},
  {src:'anh4.jpg',alt:'Trăng sáng trên núi rừng và dòng suối trong đêm xanh',caption:'Gom tiếng suối vào thơ.'},
  {src:'anh5.jpg',alt:'Con đường nhỏ qua đồi cỏ và núi xa',caption:'Ký ức được giữ bằng những điều bình dị.'},
  {src:'anh6.jpg',alt:'Mặt trời vàng trên dãy núi và con đường hướng về miền xa',caption:'Trang giấy khép lại, miền thương vẫn mở.'}
 ], blocks:[
  'Việt Bắc – Hành trình của niềm tin và khát vọng',
  'Có những người dành cả cuộc đời để gieo những hạt mầm tri thức, lặng lẽ chắp cánh cho những ước mơ và nâng bước bao thế hệ học trò trưởng thành. Đó là thầy cô – những người chọn yêu thương làm điểm tựa, tận tụy làm hành trang và niềm tin làm ánh sáng dẫn đường.',
  'Tháng Mười Một, Trung tâm Giáo dục Việt Bắc xin gửi lời tri ân sâu sắc tới những người đã và đang bền bỉ vun đắp cho sự nghiệp trồng người. “Hành trình của niềm tin và khát vọng” là lời cảm ơn chân thành, là sự trân trọng dành cho những cống hiến thầm lặng và những trái tim luôn cháy sáng vì học trò. Bởi năm tháng có thể qua đi, nhưng tình thầy trò và những giá trị người thầy gieo vào cuộc đời sẽ còn mãi.'
 ]},
 { title:'Những người làm nên Việt Bắc',image:'anh1.jpg',alt:'Mỗi năm học là một hành trình mới, mở ra từ những dự định, niềm tin và khát vọng. Từ những ngày đầu gặp gỡ đến từng dấu mốc đáng nhớ, thầy và trò Việt Bắc đã cùng nhau viết nên những trang đầu tiên của một năm đầy trải nghiệm. Nhìn lại chặng đường đã qua, mỗi khoảnh khắc đều là một nét vẽ, góp phần tạo nên bức tranh mang tên Việt Bắc.',pageImages:[
  {src:'anh1.jpg',alt:'Thầy cô và học sinh trong buổi sinh hoạt tại trường',caption:'Mỗi người góp một phần vào hành trình chung.'},
  {src:'anh2.jpg',alt:'Các thầy cô Việt Bắc trong hoạt động tập thể',caption:'Những người đồng nghiệp cùng sẻ chia.'},
  {src:'memory.svg',alt:'Con đường nhỏ qua đồi cỏ và núi xa',caption:'Ký ức được giữ bằng những điều bình dị.'}
 ],blocks:[
  'Nhìn lại một năm, chúng tôi nhớ không chỉ những giờ đứng lớp mà còn nhớ những buổi cùng đồng nghiệp trao đổi công việc, những lần hỗ trợ nhau khi bận rộn và cả những câu chuyện vui sau một ngày dài. Có những sự quan tâm không cần nói thành lời, chỉ là một lời hỏi han, một bàn tay giúp đỡ hay một nụ cười động viên đúng lúc.',
  'Công việc đôi khi có áp lực, hành trình đôi khi có thử thách, nhưng thật may mắn khi bên cạnh luôn có những người cùng chia sẻ và cố gắng. Mỗi người mang một màu sắc riêng, một cách cống hiến riêng, nhưng tất cả đã cùng góp sức tạo nên một Việt Bắc ấm áp và đầy sức sống.']},
 {title:'Những ngày đầu tiên',image:'anh3.jpg',alt:'Thầy cô và học sinh cùng tham gia hoạt động tập thể ngoài trời',caption:'Mỗi trải nghiệm góp thêm một sắc màu.',pageImages:[
  {src:'anh3.jpg',alt:'Thầy cô và học sinh trong buổi sinh hoạt tại trường',caption:'Mỗi người góp một phần vào hành trình chung.'},
  {src:'anh2.jpg',alt:'Các thầy cô Việt Bắc trong hoạt động tập thể',caption:'Những người đồng nghiệp cùng sẻ chia.'},
  {src:'memory.svg',alt:'Con đường nhỏ qua đồi cỏ và núi xa',caption:'Ký ức được giữ bằng những điều bình dị.'}
 ],blocks:[
  'Mỗi năm học là một hành trình mới, mở ra từ những dự định, niềm tin và khát vọng. Từ những ngày đầu gặp gỡ đến từng dấu mốc đáng nhớ, thầy và trò Việt Bắc đã cùng nhau viết nên những trang đầu tiên của một năm đầy trải nghiệm.',
  'Nhìn lại chặng đường đã qua, mỗi khoảnh khắc đều là một nét vẽ, góp phần tạo nên bức tranh mang tên Việt Bắc.' ]},
 {title:'Từ lớp học thân quen',image:'anh4.jpg',alt:'Học sinh chăm chú học tập trong lớp học',caption:'Một mái nhà nhỏ. Một khoảng ấm thật dài.',pageImages:[
  {src:'anh4.jpg',alt:'Thầy cô và học sinh trong buổi sinh hoạt tại trường',caption:'Mỗi người góp một phần vào hành trình chung.'},
  {src:'anh04.jpg',alt:'Các thầy cô Việt Bắc trong hoạt động tập thể',caption:'Những người đồng nghiệp cùng sẻ chia.'},
  {src:'memory.svg',alt:'Con đường nhỏ qua đồi cỏ và núi xa',caption:'Ký ức được giữ bằng những điều bình dị.'}
 ],blocks:[
  'Có lẽ điều khiến người làm nghề giáo nhớ nhất không phải là những bài giảng đã soạn, mà là những gương mặt thân quen ngồi dưới lớp học. Là ánh mắt chăm chú, những câu trả lời ngập ngừng, những lần học trò tiến bộ và cả những lúc thầy cô phải kiên nhẫn thêm một chút. Mỗi tiết học trôi qua đều để lại một dấu ấn riêng, nhắc chúng tôi rằng sự trưởng thành của học trò chính là món quà giản dị mà quý giá nhất.',
'Một năm với biết bao giờ học đã qua, nhưng những hình ảnh thân quen vẫn còn nguyên trong ký ức: dáng vẻ say mê bên trang sách, những nụ cười khi hiểu bài, những tiến bộ dù nhỏ bé của học trò. Chúng tôi nhận ra rằng, điều đẹp nhất của mỗi lớp học không chỉ nằm trong những bài giảng, mà còn ở tình cảm và sự trưởng thành được vun đắp qua từng ngày.'
 ]},
 {title:'Sân chơi của ký ức',image:'anh5.jpg',alt:'Học sinh tham gia hoạt động vui chơi và giao lưu',caption:'Gom tiếng suối vào thơ, gửi tình vào con chữ.',verse:true,pageImages:[
  {src:'anh5.jpg',alt:'Học sinh trong buổi hóa trang và sinh hoạt tập thể',caption:'Một sân chơi, thật nhiều tiếng cười.'},
  {src:'anh6.jpg',alt:'Thầy cô và học sinh cùng tham gia hoạt động vui vẻ',caption:'Những khoảnh khắc vui tươi ở lại trong ký ức.'},
  {src:'poem.svg',alt:'Trăng sáng trên núi rừng và dòng suối trong đêm xanh',caption:'Gom tiếng suối vào thơ, gửi tình vào con chữ.'}
 ],blocks:[
  'Ngoài những giờ lên lớp, chúng tôi còn cùng nhau viết nên biết bao kỷ niệm qua những chương trình ngoại khóa, cuộc thi và ngày hội ngập tràn tiếng cười. Đó là những ngày tất bật chuẩn bị, những khoảnh khắc hồi hộp chờ đợi và cả những phút giây vỡ òa trong niềm vui.',
  ' Mỗi hoạt động mang một màu sắc riêng, mỗi trải nghiệm lại góp thêm một câu chuyện đẹp vào hành trình một năm tại Việt Bắc. Để rồi khi nhìn lại, chúng tôi nhận ra rằng những bài học đáng nhớ đôi khi không chỉ nằm trong trang sách, mà còn được viết nên từ chính những trải nghiệm bên nhau.',
  'Có lẽ món quà đẹp nhất dành cho người thầy là được chứng kiến học trò từng ngày trưởng thành. Nhìn các con tự tin bước lên sân khấu, rạng rỡ thể hiện bản thân, chúng tôi không khỏi xúc động và tự hào. Những khoảnh khắc ấy sẽ luôn là ký ức đẹp trong hành trình tại Việt Bắc.'
 ]},
 {title:'Điều chúng ta tự hào',image:'anh7.jpg',alt:'Học sinh Việt Bắc lưu giữ những khoảnh khắc vui bên nhau',caption:'Trang giấy khép lại, miền thương vẫn mở.',pageImages:[
  {src:'anh7.jpg',alt:'Thầy cô và học sinh trong buổi sinh hoạt tại trường',caption:'Mỗi người góp một phần vào hành trình chung.'},
  {src:'anh07.jpg',alt:'Các thầy cô Việt Bắc trong hoạt động tập thể',caption:'Những người đồng nghiệp cùng sẻ chia.'},
  {src:'memory.svg',alt:'Con đường nhỏ qua đồi cỏ và núi xa',caption:'Ký ức được giữ bằng những điều bình dị.'}
 ],blocks:[
  'Nhìn lại một năm, có biết bao điều khiến chúng tôi tự hào.',
  ' Đó là những thành tích đáng mừng, những nỗ lực được đền đáp và đặc biệt là niềm vui khi các em học sinh lớp 9 đã hoàn thành thật tốt kỳ thi của mình, với tỷ lệ đỗ đạt 100%. Nhưng niềm tự hào của người thầy không chỉ nằm ở những con số.',
  ' Đó còn là những khoảnh khắc bên học trò, những em từng khiến chúng tôi phải nhắc nhở nhiều lần, những bạn còn bướng bỉnh, chưa thực sự tập trung, nhưng rồi cũng dần thay đổi và trưởng thành. Mỗi em một tính cách, một hành trình riêng, nhưng tất cả đều để lại trong chúng tôi những dấu ấn khó quên.']},
 {title:'Lời muốn gửi lại',image:'anh8.jpg',alt:'Mặt trời vàng trên dãy núi và con đường hướng về miền xa',caption:'Trang giấy khép lại, miền thương vẫn mở.',pageImages:[
  {src:'anh8.jpg',alt:'Thầy cô và học sinh trong buổi sinh hoạt tại trường',caption:'Mỗi người góp một phần vào hành trình chung.'},
  {src:'anh9.jpg',alt:'Các thầy cô Việt Bắc trong hoạt động tập thể',caption:'Những người đồng nghiệp cùng sẻ chia.'},
  {src:'memory.svg',alt:'Con đường nhỏ qua đồi cỏ và núi xa',caption:'Ký ức được giữ bằng những điều bình dị.'}
 ],blocks:[
  'Nếu được viết vài dòng cuối cùng cho cuốn nhật ký của một năm, có lẽ chúng tôi muốn dành những dòng ấy cho lời cảm ơn. Cảm ơn những đồng nghiệp đã cùng sẻ chia công việc, cảm ơn các bậc phụ huynh đã tin tưởng và cảm ơn những học trò đã mang đến biết bao niềm vui, thử thách cùng những bài học ý nghĩa. ',
  'Có thể sau này, chúng tôi sẽ không còn nhớ hết từng ngày đã qua, từng công việc đã làm, nhưng chắc chắn vẫn nhớ cảm giác khi cùng nhau hoàn thành một chương trình, niềm vui khi thấy học trò tiến bộ và sự ấm áp của những ngày tháng đồng hành. Một năm khép lại không có nghĩa là câu chuyện kết thúc. Chúng tôi sẽ mang theo những kỷ niệm đẹp ấy để tiếp tục hành trình gieo chữ, vun đắp ước mơ và viết thêm những trang mới cho Việt Bắc.' ]}
];
const letterBlocks = [
'Có những hành trình rồi sẽ đi đến hồi kết, nhưng những kỷ niệm đẹp sẽ còn mãi trong trái tim mỗi người. Một năm nhìn lại, Việt Bắc đã ghi dấu bằng những giờ lên lớp miệt mài, những hoạt động đầy tiếng cười, những thành quả đáng tự hào và hơn hết là sự đồng hành của những con người luôn hết lòng vì giáo dục.',
'Mỗi thầy cô, mỗi học trò, mỗi khoảnh khắc đều góp phần viết nên câu chuyện mang tên Việt Bắc. Có niềm vui, có thử thách, có những ngày bận rộn, nhưng tất cả đã tạo nên một hành trình thật đáng nhớ.',
'Cuốn sách hôm nay khép lại không có nghĩa là câu chuyện dừng lại. Phía trước vẫn còn những trang mới đang chờ được viết tiếp, với nhiều ước mơ, khát vọng và những thành công đang đón đợi.',
'Xin cảm ơn tất cả những người đã góp mặt, đồng hành và để lại dấu ấn trong hành trình ấy. Mong rằng dù thời gian có trôi qua, chúng ta vẫn luôn tự hào khi nhắc về Việt Bắc – nơi lưu giữ những kỷ niệm đẹp, nuôi dưỡng niềm tin và chắp cánh cho những ước mơ.',
'VIỆT BẮC – NUÔI DƯỠNG NIỀM TIN, NÂNG TẦM TRI THỨC.',
'Hành trình vẫn tiếp tục, và những trang đẹp nhất có lẽ vẫn còn ở phía trước!',
];
const $=id=>document.getElementById(id), app=$('app');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let state='welcome', busy=false, openingNow=false, openSequence=0, pages=[], pageIndex=0, letterPages=[], letterIndex=0, resizePending=false;
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,reduced.matches?0:ms));
const screens=['welcome','desk','reader','farewell'];
function show(name){state=name;app.dataset.state=name;screens.forEach(id=>$(id).hidden=id!==name);$('back-cover').hidden=name!=='reader';$('desk-back').hidden=name!=='desk';}
function lock(value){busy=value;['enter','cover','back-cover','prev','next','letter-prev','letter-next','letter-restart','video-close','video-dialog-close','video-dialog-restart'].forEach(id=>$(id).disabled=value);if(!value){updateNav();if(resizePending){resizePending=false;relayout();}}}
function putBlocks(target,blocks,verse=false){target.replaceChildren();blocks.forEach(text=>{const p=document.createElement('p');p.textContent=text;if(verse)p.className='verse';target.append(p);});}
// Đo ngay trong vùng chữ thực tế; không cắt chữ bằng overflow:hidden.
// Mốc token giữ nguyên vị trí đọc khi xoay / đổi kích thước màn hình.
function paginate(blocks,target,verse=false){
 const result=[];let pieces=[],offset=0,start=0;
 target.replaceChildren();
 for(const block of blocks){
  const tokens=block.match(/\S+[^\S\n]*|\n/g)||[];
  let p=document.createElement('p');if(verse)p.className='verse';target.append(p);
  let text='';
  for(const token of tokens){
   const next=text+token;p.textContent=next;
   if(target.scrollHeight>target.clientHeight+1 && offset>start){
    p.textContent=text;
    if(text.trim())pieces.push(text.trimEnd());
    result.push({blocks:pieces,start,end:offset});
    pieces=[];start=offset;target.replaceChildren();p=document.createElement('p');if(verse)p.className='verse';target.append(p);text=token.replace(/^\s+/,'');p.textContent=text;
   }else{text=next;}
   offset++;
  }
  if(text.trim())pieces.push(text.trimEnd());
 }
 if(pieces.length)result.push({blocks:pieces,start,end:offset});
 return result;
}
function resolveImageSource(source){
 const value=String(source||'').trim();
 if(!value)return '';
 if(/^(https?:|\/|images\/)/i.test(value))return value;
 return `images/${/\.[a-z0-9]+$/i.test(value)?value:`${value}.svg`}`;
}
function applyChapter(ch,page=null){
 let artwork=page&&ch.pageImages?.[page.chapterPage];
 // Nếu chương có nhiều trang hơn ảnh thật đã khai báo, chọn SVG chưa dùng
 // trước để trang tràn không lặp lại ảnh đầu chương.
 if(page&&!artwork){
  const safeFallbacks=['memory.svg','mountains.svg','opening.svg','home.svg','poem.svg','ending.svg'];
  const used=new Set((ch.pageImages||[]).slice(0,page.chapterPage).map(item=>{
   const source=typeof item==='string'?item:item?.src;
   return resolveImageSource(source);
  }));
  const fallback=safeFallbacks.find(source=>!used.has(resolveImageSource(source)))||safeFallbacks[page.chapterPage%safeFallbacks.length];
  artwork={src:fallback,...(illustrationDetails[fallback.replace('.svg','')]||{})};
 }
 const image=typeof artwork==='string'?artwork:(artwork?.src||ch.image);
 const imageKey=String(image||'').replace(/\.(svg|jpe?g|png|webp)$/i,'');
 const details=(artwork&&typeof artwork==='object')?artwork:(illustrationDetails[imageKey]||{});
 $('chapter-name').textContent=ch.label;$('page-type').textContent=ch.label;$('page-title').textContent=ch.title;
 $('page-image').src=resolveImageSource(image);
 $('page-image').alt=details.alt||ch.alt;
 $('image-caption').textContent=details.caption||ch.caption;
}
function buildPages(anchor){
 pages=[];
 chapters.forEach((ch,chapter)=>{applyChapter(ch);paginate(ch.blocks,$('page-copy'),ch.verse).forEach((p,chapterPage)=>pages.push({...p,chapter,chapterPage}));});
 pageIndex=anchor?Math.max(0,pages.findIndex(p=>p.chapter===anchor.chapter&&p.start<=anchor.start&&p.end>anchor.start)):0;
 renderPage();
}
function updateNav(){if(busy)return;$('prev').disabled=pageIndex<=0;$('next').disabled=false;$('next-label').textContent=pageIndex===pages.length-1?'Khép sổ':'Trang tiếp';$('letter-prev').disabled=letterIndex<=0;}
function renderPage(){
 const p=pages[pageIndex];if(!p)return;const ch=chapters[p.chapter];applyChapter(ch,p);putBlocks($('page-copy'),p.blocks,ch.verse);
 $('page-copy').classList.toggle('opening-lead',p.chapter===0&&p.start===0);
 $('page-copy').classList.toggle('opening-final',p.chapter===0&&(pageIndex===pages.length-1||pages[pageIndex+1].chapter!==0));
 $('school-watermark').hidden=p.chapter!==0||p.start!==0;
 $('folio').textContent=String(pageIndex+1).padStart(2,'0');$('page-status').textContent=`${pageIndex+1} / ${pages.length}`;$('progress-fill').style.width=`${(pageIndex+1)/pages.length*100}%`;updateNav();
}
function reveal(){const book=$('book');book.classList.remove('reveal');void book.offsetWidth;book.classList.add('reveal');}
function focusPage(){$('text-page').focus({preventScroll:true});}
$('enter').addEventListener('click',()=>{show('desk');$('desk').classList.add('arriving');$('cover').focus({preventScroll:true});});
$('desk-back').addEventListener('click',async()=>{if(state!=='desk')return;if(openingNow){openingNow=false;openSequence++;$('cover').classList.remove('opening');$('cover').classList.add('rewinding');await sleep(560);$('cover').classList.remove('rewinding');}show('welcome');lock(false);$('enter').focus({preventScroll:true});});
$('cover').addEventListener('click',async()=>{
 if(busy||openingNow)return;lock(true);openingNow=true;const sequence=++openSequence;$('cover').classList.add('opening');await sleep(1250);if(sequence!==openSequence)return;openingNow=false;$('cover').classList.remove('opening');show('reader');buildPages(null);$('book').classList.remove('closing');reveal();lock(false);focusPage();
});
async function turn(direction){
 if(busy||state!=='reader')return;
 if(direction<0&&pageIndex===0)return;
 if(direction>0&&pageIndex===pages.length-1){await closeBook();return;}
 lock(true);const book=$('book');book.classList.remove('reveal');book.classList.toggle('back',direction<0);book.classList.add('turning');
 await sleep(380);pageIndex+=direction;renderPage();await sleep(380);book.classList.remove('turning','back');reveal();lock(false);focusPage();
}
$('prev').addEventListener('click',()=>turn(-1));$('next').addEventListener('click',()=>turn(1));
async function closeToCover(){if(busy||state!=='reader')return;lock(true);$('book').classList.remove('reveal');$('book').classList.add('closing');await sleep(850);$('book').classList.remove('closing');show('desk');lock(false);$('cover').focus({preventScroll:true});}
$('back-cover').addEventListener('click',closeToCover);
async function closeBook(){
 lock(true);$('book').classList.remove('reveal');$('book').classList.add('closing');await sleep(850);$('book').classList.remove('closing');
 show('farewell');buildLetter(0);$('farewell').classList.remove('arriving');void $('farewell').offsetWidth;$('farewell').classList.add('arriving');
 await sleep(850);$('farewell').classList.remove('arriving');lock(false);$('letter-sheet').focus({preventScroll:true});
}
function buildLetter(anchor=0){letterPages=paginate(letterBlocks,$('letter-copy'));letterIndex=Math.max(0,letterPages.findIndex(p=>p.start<=anchor&&p.end>anchor));renderLetter();}
function renderLetter(){
 const p=letterPages[letterIndex];if(!p)return;putBlocks($('letter-copy'),p.blocks);$('letter-prev').hidden=letterIndex===0;$('letter-status').textContent=letterPages.length>1?`${letterIndex+1} / ${letterPages.length}`:'';
 const last=letterIndex===letterPages.length-1;$('letter-next').textContent=last?'Xem video':'Đọc tiếp lá thư';$('letter-next').setAttribute('aria-label',last?'Xem video kỷ niệm':'Đọc tiếp lá thư');$('letter-restart').hidden=!last;$('letter-sign').style.visibility=last?'visible':'hidden';updateNav();
}
$('letter-prev').addEventListener('click',()=>{if(busy||letterIndex===0)return;letterIndex--;renderLetter();$('letter-sheet').focus({preventScroll:true});});
$('letter-next').addEventListener('click',()=>{if(busy)return;if(letterIndex<letterPages.length-1){letterIndex++;renderLetter();$('letter-sheet').focus({preventScroll:true});}else openClosingVideo();});
$('letter-restart').addEventListener('click',()=>{if(busy)return;show('desk');$('cover').focus({preventScroll:true});});
function setVideoStatus(message=''){
 const status=$('video-status');status.textContent=message;status.hidden=!message;
}
function openClosingVideo(){
 const dialog=$('video-dialog'),empty=$('video-empty'),video=$('memory-video'),embed=$('memory-embed');
 empty.hidden=false;video.hidden=true;embed.hidden=true;setVideoStatus('');video.onerror=null;
 if(!dialog.open)dialog.showModal();$('video-close').focus();
 if(closingVideoUrl.trim())try{
  const url=new URL(closingVideoUrl.trim(),window.location.href);
  const youtubeHosts=['youtube.com','www.youtube.com','m.youtube.com','youtu.be','youtube-nocookie.com','www.youtube-nocookie.com'];
  if(youtubeHosts.includes(url.hostname)){
   const id=url.hostname==='youtu.be'?url.pathname.split('/').filter(Boolean)[0]:(url.searchParams.get('v')||url.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1]);
   if(!id)throw new Error('Thiếu mã video YouTube.');
   embed.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;embed.hidden=false;empty.hidden=true;requestMediaFullscreen(embed);
  }else{
   const localFile=window.location.protocol==='file:'&&url.protocol==='file:';
   const secureUrl=url.protocol==='https:';
   const sameOriginHttp=url.protocol==='http:'&&url.origin===window.location.origin;
   const supportedFile=/\.(mp4|webm|ogv)$/i.test(url.pathname);
   if(!(localFile||secureUrl||sameOriginHttp)||!supportedFile)throw new Error('Hãy dùng link YouTube hoặc tệp MP4/WebM/OGV. Nếu mở file HTML trực tiếp, video phải nằm trong thư mục của website.');
   video.onerror=()=>setVideoStatus('Không tải được video. Kiểm tra tên tệp, thư mục video/ và định dạng MP4, WebM hoặc OGV.');
   video.src=url.href;video.hidden=false;empty.hidden=true;video.load();
   const play=video.play();if(play?.catch)play.catch(()=>setVideoStatus('Video đã mở nhưng trình duyệt không cho tự phát. Hãy nhấn nút phát trên khung video.'));
   requestMediaFullscreen(video);
  }
 }catch(error){$('video-empty').querySelector('h3').textContent='Chưa mở được video';$('video-empty').querySelector('p').textContent=error.message;}
}
function requestMediaFullscreen(media){
 try{
  if(media.requestFullscreen){const promise=media.requestFullscreen();if(promise?.catch)promise.catch(()=>{});}
  else if(media.webkitRequestFullscreen)media.webkitRequestFullscreen();
  else if(media.webkitEnterFullscreen)media.webkitEnterFullscreen();
 }catch(_error){/* Trình duyệt có thể chặn tự bật toàn màn hình; điều khiển của trình phát vẫn dùng được. */}
}
function closeClosingVideo(){const dialog=$('video-dialog'),video=$('memory-video'),embed=$('memory-embed');if(video&&!video.hidden){video.pause();video.removeAttribute('src');video.onerror=null;video.load();}embed.removeAttribute('src');setVideoStatus('');if(dialog.open)dialog.close();}
$('video-close').addEventListener('click',closeClosingVideo);$('video-dialog-close').addEventListener('click',closeClosingVideo);$('video-dialog').addEventListener('click',e=>{if(e.target===$('video-dialog'))closeClosingVideo();});$('video-dialog').addEventListener('close',()=>{const video=$('memory-video'),embed=$('memory-embed');if(!video.hidden){video.pause();video.removeAttribute('src');video.onerror=null;video.load();}embed.removeAttribute('src');setVideoStatus('');});
$('video-dialog-restart').addEventListener('click',()=>{closeClosingVideo();show('desk');$('cover').focus({preventScroll:true});});
document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.target.matches('input,select,textarea'))return;if(state==='reader'&&e.key==='Escape'){e.preventDefault();closeToCover();return;}if(state==='desk'&&e.key==='Escape'){$('desk-back').click();return;}if(state==='reader'&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();turn(e.key==='ArrowRight'?1:-1);}});
let resizeTimer;
function relayout(){if(busy){resizePending=true;return;}if(state==='reader')buildPages(pages[pageIndex]);if(state==='farewell')buildLetter(letterPages[letterIndex]?.start||0);app.dataset.layoutWidth=String(window.innerWidth);app.dataset.layoutHeight=String(window.innerHeight);}
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(relayout,130);});
// Chia lại trang nếu font hoàn tất tải sau lần hiển thị đầu.
if(document.fonts)document.fonts.ready.then(relayout);
// Tải trước minh họa SVG nhỏ, không dùng tài nguyên bên thứ ba.
chapters.forEach(ch=>[ch.image,...(ch.pageImages||[]).map(item=>typeof item==='string'?item:item?.src)].filter(Boolean).forEach(source=>{const img=new Image();img.src=resolveImageSource(source);}));

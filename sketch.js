let stars = [];

function setup() { //初始設定
  createCanvas(windowWidth, windowHeight); //建立畫布，(視窗寬，視窗高)
  // 生成星星的位置
  for (let i = 0; i < 100; i++) {
    stars.push({ x: random(width), y: random(height / 2) });
  }
}

function draw() { //重複執行，開始畫圖
  background("#1b263b"); //畫布背景色為灰色，如果要使用RGB色碼可以改為background(255,255,255)，使用十六進位法，白色的RGB碼為"#..."
  
  // 設定文字大小、字型、對其方式
  textSize(32); //文字大小為32
  textFont("Arial"); //文字字型為Arial
  textAlign(CENTER, CENTER); //文字對齊方式為置中
  fill("#dad7cd"); //文字的顏色為單色
  // 在畫布的中心位置,另上文字“Hello, World!"
  text("Hello, World!", width / 2, height / 2); //文字的位置在畫布的中心

  // 設計背景建築物
  fill("#8d99ae"); // 建築物顏色
  stroke("#2b2d42"); // 邊框顏色
  strokeWeight(2); // 邊框粗細

  // 畫一些建築物
  rect(100, height - 300, 150, 300); // 建築物1
  rect(300, height - 200, 100, 200); // 建築物2
  rect(450, height - 400, 200, 400); // 建築物3
  rect(700, height - 250, 150, 250); // 建築物4
  rect(900, height - 350, 100, 350); // 建築物5
  rect(1050, height - 150, 250, 150); // 建築物6
  rect(1350, height - 250, 150, 250); // 建築物7
  rect(1550, height - 200, 100, 200); // 建築物8
  rect(1700, height - 300, 150, 300); // 建築物9

  // 設計背景道路
  fill("#495057"); // 道路顏色
  rect(0, height - 100, width, 100); // 道路位置
  fill(0); // 道路顏色
  rect(0, height - 100, width, 20); // 道路位置
  fill("#f8f9fa"); // 道路顏色
  for (let i = 0; i < width; i += 100) {
    rect(i, height - 50, 50, 10); // 道路位置
  }
  
  //背景星星
  fill("#f8f9fa"); //星星顏色
  noStroke(); //不畫邊框
  for (let star of stars) {
    ellipse(star.x, star.y, 2, 2); //星星位置
  }
  
  //背景月亮
  fill("#f8f9fa"); //月亮顏色
  ellipse(100, 100, 100, 100); //月亮位置
}

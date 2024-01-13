var matches = document.getElementById("matches-tab");
var playerTransfer = document.getElementById("transfer-tab");
var playerInjured = document.getElementById("injured-tab");
var playerScore = document.getElementById("score-tab");
var headerHome = document.getElementById("headerHome");
var newsSection = document.getElementById("news");
var premierLeageSection = document.getElementById("premierLeage");
var optionChoose = document.getElementById("optionChoose");
var homeNav = document.getElementById("homeNav");
var newsOption = document.getElementById("news-tab");
var fixturesPremierLeage = document.getElementById("fixtures-tab");
var fixturesPremierLeageBefore = document.getElementById("before-tab");
var fixturesPremierLeageAfter = document.getElementById("after-tab");
var topScorersOption = document.getElementById("topScorers-tab");
var tablePremier = document.getElementById("tablePremier-tab");
var toggle = document.getElementById("toggleId");
var body = document.getElementById("bodyId");
var container = document.getElementById("darkId");
var optionToggle = document.getElementById("optionToggle");
var whiteMoodId = document.getElementById("whiteMoodId");
var moonMoodId = document.getElementById("moonMoodId");
var imageTeamPlayers = document.getElementById("imageTeamPlayers");
var nameTeamPlayers = document.getElementById("nameTeamPlayer");
var playersContainerId = document.getElementById("playersContainerId");
var teamsContainerId = document.getElementById("teamsContainerId");
var navSignUp = document.getElementById("navSignUp");
var navSignIn = document.getElementById("navSignIn");
var signBox = document.getElementById("signBox");
var publicOpinionNav = document.getElementById("publicOpinionNav");
var adminSection=document.getElementById('adminSection')
var homeNavId=document.getElementById('homeNavId')
var sideRightHeaderId=document.getElementById('sideRightHeaderId')
var signBtnStyle = document.getElementById("signStyleId");
var backStyle = document.getElementById("backStyle");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rePassword = document.getElementById("rePassword");
var phone = document.getElementById("phone");
var nationality = document.getElementById("nationality");
var gender = document.getElementsByName("gender");
var signUp = document.getElementById("signUp");
var userEmailLogin = document.getElementById("userEmail");
var userPasswordLogin = document.getElementById("userPassword");
var signIn = document.getElementById("signInLogin");
var signSection = document.getElementById("sign");
var alertSignUP = document.getElementById("alertSignUP");
var alertSpan = document.getElementById("alertSpan");
var alertSignIn = document.getElementById("alertSignIn");
var userSection = document.getElementById("userSection");
var nameOfUser = document.getElementById("nameOfUser");
var addOpinionId = document.getElementById("addOpinionId");
var imageLinkOpinion = document.getElementById("imageLinkOpinion");
var descriptionOpinion = document.getElementById("descriptionOpinion");
var regexName = /^[a-zA-Z]{0,30}$/;
var regexEmail =
  /^[a-zA-Z0-9]{0,40}([#$%^&*+_\-\/]{0,3})?@((gmail)|(yahoo)).com$/;
var regexPassword = /^[a-z0-9]{5,30}[A-Z]{1,4}([a-z0-9]{0,30})?$/;
var regexPhone = /^01[0125][0-9]{8}$/;
var temp;
var mood;
var adsMood = "add";
var indexUpdate;
var users = [];
var userSessionMood = "signIn";
var adminAccount={
  adminEmail:'mahmoudismail@gmail.com',
  adminPassword:'35795145As'
}

var option = "moon";
toggle.addEventListener("click", function () {
  playersContainerId.classList.toggle("backDark2");
  teamsContainerId.classList.toggle("backDark2");
  body.classList.toggle("backDark");
  body.classList.toggle("colorDark");
  container.classList.toggle("backDark2");
  newsOption.classList.toggle("colorDark");
  fixturesPremierLeage.classList.toggle("colorDark");
  topScorersOption.classList.toggle("colorDark");
  tablePremier.classList.toggle("colorDark");
  homeNav.classList.toggle("colorDark");
  whiteMoodId.classList.toggle("whiteMoodId");
  moonMoodId.classList.toggle("moonMoodId");
  toggle.classList.toggle("flex-row-reverse");
  signBox.classList.toggle("backDark2");
  sideRightHeaderId.classList.toggle('backDark2')

  if (option == "moon") {
    optionToggle.innerHTML = "Moon";
    option = "light";
  } else {
    optionToggle.innerHTML = "Light";
    option = "moon";
  }
});

//               Premier Leage Vars

matches.addEventListener("click", function () {
  var searchMatches = "European soccer";
  newsFootball(searchMatches);
});
playerTransfer.addEventListener("click", function () {
  var searchTranfer = "European football transfers";
  newsFootball(searchTranfer);
});
playerInjured.addEventListener("click", function () {
  var searchInjured = "Europe football injuries";
  newsFootball(searchInjured);
});
playerScore.addEventListener("click", function () {
  var searchScore = "European football scores";
  newsFootball(searchScore);
});

async function newsFootball(search) {
  var data = await fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=7dcfbe1df9904e379765719a9f8da0a7`
  );
  var response = await data.json();
  var row = "matchesId";
  if (search == "European football transfers") {
    row = "transferId";
  } else if (search == "Europe football injuries") {
    row = "injuredId";
  } else if (search == "European football scores") {
    row = "scoreId";
  } else {
    row = "matchesId";
  }

  display(response.articles, row);
}

function display(news, rowId) {
  cartona = ``;
  for (var i = 0; i < news.length; i++) {
    if (news[i].urlToImage != null) {
      cartona += `
        <div class="col-md-4">
        <div class="laLeage">
          <div class="overflow-hidden"><img src="${news[i].urlToImage}" alt="Not Found"></div>
          <p class="p-2 pb-0">${news[i].description.slice(0, 200)}</p>
          <span class="text-info"><span class="text-info fw-bold">Date : </span>${news[
            i
          ].publishedAt.slice(0, 10)}</span>

        </div>
      </div>
        `;
    }
  }
  document.getElementById(`${rowId}`).innerHTML = cartona;
}

var mainMatches = "European soccer";

//               Premier Leage code

var premierLeageNav = document.getElementById("premierLeageNav");
var liNavPrimer=document.getElementById('liNavPrimer')
premierLeageNav.addEventListener("click", function () {
  premierLeageSection.style.display = "block";
  newsSection.style.display = "none";
  headerHome.style.display = "none";
  teamsSection.style.display = "none";
  playersSection.style.display = "none";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
  homeNavId.classList.add('aColorWhiteNav')
  premierLeageNav.classList.add('aColorBlackNav')
  liNavPrimer.classList.add('homePage')
  liNavHome.classList.remove('homePage')
  liNavTeams.classList.remove('homePage')
  teamsNav.classList.remove('aColorBlackNav')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')

  
});
async function premierLeageTable() {
  var data = await fetch(
    "https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=67aa146f9a0587dca2323808754aa451cea831f163e85a4ce100600b73040668"
  );
  var response = await data.json();
  var dataPremierNews = await fetch(
    `https://newsapi.org/v2/everything?q=Premier%20League%20scores&apiKey=7dcfbe1df9904e379765719a9f8da0a7`
  );
  var responseNews = await dataPremierNews.json();

  displayPremierLeageTable(response);
  displayPremierNews(responseNews.articles);
  displayMainPremierNews(responseNews.articles);
}

function displayPremierLeageTable(standings) {
  cartona = ``;
  for (var i = 0; i < standings.length; i++) {
    cartona += `
    <tr>
                  <td>${standings[i].overall_league_position}</td>
                  <td><img src="${
                    standings[i].team_badge
                  }" alt=""><span class="ms-2">${
      standings[i].team_name
    }</span></td>
                  <td>${standings[i].overall_league_payed}</td>
                  <td>${standings[i].overall_league_W}</td>
                  <td>${standings[i].overall_league_D}</td>
                  <td>${standings[i].overall_league_L}</td>
                  <td><span>${standings[i].overall_league_GF}</span> : <span>${
      standings[i].overall_league_GA
    }</span></td>
                  <td>${
                    standings[i].overall_league_GF -
                    standings[i].overall_league_GA
                  }</td>
                  <td>${standings[i].overall_league_PTS}</td>


                </tr>
    `;
  }
  document.getElementById("tbodyId").innerHTML = cartona;
}

function displayPremierNews(newsScore) {
  cartonaNews = ``;
  for (var i = 1; i < newsScore.length; i++) {
    if (newsScore[i].urlToImage != null) {
      cartonaNews += `
    
                      <div class="col-md-4">
                        <div class="laLeage news2">
                        <div class="overflow-hidden">
                        <img src="${newsScore[i].urlToImage}" alt="">
                        </div>
                          <p class="p-2 pb-0">${newsScore[i].description.slice(
                            0,
                            200
                          )}</p>
                          <span class="text-info"><span class="text-info fw-bold">Date : </span>${newsScore[
                            i
                          ].publishedAt.slice(0, 10)}</span>
                        </div>
                        </div>
                      
                      
    `;
    }
  }
  document.getElementById("rowNewsPremier").innerHTML = cartonaNews;
}
function displayMainPremierNews(newsScore) {
  var date = new Date().toISOString();
  var dateSlice = date.slice(0, 10);
  box = ``;
  for (var i = 0; i < newsScore.length; i++) {
    if (newsScore[i].publishedAt.slice(0, 10) === dateSlice) {
      box += `
    
                      
                        <div class="laLeage">
                        
                        <div class="overflow-hidden">
                        <img src="${newsScore[i].urlToImage}" alt="">
                        </div>
                         
                          <p class="p-2 pb-0">${newsScore[i].description.slice(
                            0,
                            200
                          )}</p>
                          <span class="text-info"><span class="text-info fw-bold">Date : </span>${
                            newsScore[i].publishedAt
                          }</span>
                        </div>
                        
                       
                      
                      
    `;
      break;
    } else {
      if (newsScore[i].urlToImage != null) {
        box += `
    
                      
                        <div class="laLeage">
                        <div class="overflow-hidden">
                        <img src="${newsScore[i].urlToImage}" alt="">
                        </div>
                          <p class="p-2 pb-0">${newsScore[i].description.slice(
                            0,
                            200
                          )}</p>
                          <span class="text-info"><span class="text-info fw-bold">Date : </span>${
                            newsScore[i].publishedAt
                          }</span>
                        </div>
                        
                      
                      
    `;
      }
    }
    break;
  }
  document.getElementById("rowMainNewsPremier").innerHTML = box;
}

function displayTopScorers(topScorers) {
  cartona = ``;
  for (var i = 0; i < topScorers.length; i++) {
    if (topScorers[i].assists == "") {
      cartona += `
    <tr class="text-center">
    <td>${i + 1}</td>
    <td> ${topScorers[i].player_name}
    </td>
    <td>${topScorers[i].goals}</td>
    <td>0</td>
    <td>${topScorers[i].penalty_goals}</td>
    <td>${topScorers[i].team_name}</td>
    
  </tr>
    `;
    } else {
      cartona += `
      <tr class="text-center">
      <td>${i + 1}</td>
      <td> ${topScorers[i].player_name}
      </td>
      <td>${topScorers[i].goals}</td>
      <td>${topScorers[i].assists}</td>
      <td>${topScorers[i].penalty_goals}</td>
      <td>${topScorers[i].team_name}</td>
      
    </tr>
      `;
    }
  }
  document.getElementById("tbodyIdTop").innerHTML = cartona;
}

function formatDate(date) {
  var options = { month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Get the current date
var currentDate = new Date();

// Get the date before the current date (1 day ago)
var dateBefore = new Date();
dateBefore.setMonth(currentDate.getMonth() - 1);

// Get the date after the current date (1 day ahead)
var dateAfter = new Date();
dateAfter.setMonth(currentDate.getMonth() + 1);

// Format the dates
var formattedCurrentDate = formatDate(currentDate);
var formattedDateBefore = formatDate(dateBefore);
var formattedDateAfter = formatDate(dateAfter);

document.getElementById("before-tab").innerHTML = formattedDateBefore;
document.getElementById("current-tab").innerHTML = formattedCurrentDate;
document.getElementById("after-tab").innerHTML = formattedDateAfter;

fixturesPremierLeage.addEventListener("click", async function () {
  optionChoose.innerHTML = "Fixtures";
  var date = new Date();
  var dataFixtures = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${date.getFullYear()}-${
      date.getMonth() + 1
    }-01&to=${date.getFullYear()}-${
      date.getMonth() + 2
    }-01&league_id=152&APIkey=67aa146f9a0587dca2323808754aa451cea831f163e85a4ce100600b73040668`
  );
  var responseFixtures = await dataFixtures.json();
  var rowIdCurrent = "rowFixturesCurrent";
  displayFixtures(responseFixtures, rowIdCurrent);
});
fixturesPremierLeageBefore.addEventListener("click", async function () {
  var date = new Date();

  var dataFixturesAfter = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${
      date.getFullYear() - 1
    }-${date.getMonth() + 12}-01&to=${date.getFullYear()}-${
      date.getMonth() + 1
    }-01&league_id=152&APIkey=67aa146f9a0587dca2323808754aa451cea831f163e85a4ce100600b73040668`
  );
  var responseFixturesAfter = await dataFixturesAfter.json();
  var rowIdBefore = "rowFixturesBefore";
  displayFixtures(responseFixturesAfter, rowIdBefore);
});
fixturesPremierLeageAfter.addEventListener("click", async function () {
  var date = new Date();

  var dataFixturesAfter = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${date.getFullYear()}-${
      date.getMonth() + 2
    }-01&to=${date.getFullYear()}-${
      date.getMonth() + 3
    }-01&league_id=152&APIkey=67aa146f9a0587dca2323808754aa451cea831f163e85a4ce100600b73040668`
  );
  var responseFixturesAfter = await dataFixturesAfter.json();
  var rowIdAfter = "rowFixturesAfter";
  displayFixtures(responseFixturesAfter, rowIdAfter);
});

topScorersOption.addEventListener("click", async function () {
  optionChoose.innerHTML = "Top Scorers";
  var dataTopScorers = await fetch(
    "https://apiv3.apifootball.com/?action=get_topscorers&league_id=152&APIkey=67aa146f9a0587dca2323808754aa451cea831f163e85a4ce100600b73040668"
  );
  var responseTopScorers = await dataTopScorers.json();
  displayTopScorers(responseTopScorers);
});

newsOption.addEventListener("click", async function () {
  optionChoose.innerHTML = "News";
});

homeNav.addEventListener("click", function () {
  headerHome.style.display = "block";
  newsSection.style.display = "block";
  premierLeageSection.style.display = "none";
  teamsSection.style.display = "none";
  playersSection.style.display = "none";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
});

function displayFixtures(fixtures, Id) {
  cartona = ``;
  for (var i = 0; i < fixtures.length; i++) {
    var indexOfPossession;
    for (let j = 0; j < fixtures[i].statistics.length; j++) {
      if(fixtures[i].statistics[j].type=='Ball Possession'){
        indexOfPossession=j      
      }
      
    }
    if (fixtures[i].match_status == "Finished") {
      cartona += `
    <div class="col-md-8">
                            <table class="table table-dark tableName">
                              <tbody class="tbodyFixtures">

    
                          <tr>
                            <td >
                              <div class="d-flex flex-column align-items-center mt-3">
                                <img src="${
                                  fixtures[i].team_home_badge
                                }" alt="">
                              <img src="img/field (2).png" alt="">
                              </div>
                            </td class="w-25">
                            <td>
                              <div class="d-flex flex-column mt-3">
                                <span class="mt-3">${
                                  fixtures[i].match_hometeam_name
                                }</span>
                              <span class="mt-4">${
                                fixtures[i].match_stadium.split(" ")[0] +
                                " " +
                                fixtures[i].match_stadium.split(" ")[1]
                              }</span>
                              </div>
                            </td>
                            <td class="w-25">
                             <div class="d-flex flex-column align-items-center">
                              <div class="d-flex justify-content-between w-100 mt-3">
                                <span>${fixtures[i].match_hometeam_score}</span>
                              <span class="mx-3 bg-danger p-2 rounded-2">${
                                fixtures[i].match_status
                              }</span>
                              <span>${fixtures[i].match_awayteam_score}</span>
                              </div>
                              <div class="d-flex justify-content-between w-100 mt-3">
                              <span>${fixtures[i].statistics[indexOfPossession].home}</span>
                              <span>${fixtures[i].statistics[indexOfPossession].away}</span>
                              
                              </div>
                        
                              <div class="mt-3">
                              <span>${fixtures[i].match_time}</span>
                              <span>${fixtures[i].match_date}</span>
                              </div>
                             </div>
                            </td>
                            <td class="w-25">
                              <div class="d-flex flex-column text-end  mt-3">
                                <span class="mt-3 ">${
                                  fixtures[i].match_awayteam_name
                                }</span>
                              <span class="mt-2 ">Round :</span>
                              </div>
                              
                            </td>
                            <td>
                              <div class="d-flex flex-column align-items-center  mt-3">
                                <img src="${
                                  fixtures[i].team_away_badge
                                }" alt="">
                              <span class="mt-4">${
                                fixtures[i].match_round
                              }</span>

                              </div>
                            </td>
                            
                          </tr>
                          
                          
                          </tbody>
                          </table>
                          </div>
  
    `;
    } else if(fixtures[i].match_status == ""){
      
      cartona += `
    <div class="col-md-8">
                            <table class="table table-dark tableName">
                              <tbody class="tbodyFixtures">
    <tr>
                            <td>
                              <div class="d-flex flex-column align-items-center mt-3">
                                <img src="${
                                  fixtures[i].team_home_badge
                                }" alt="">
                              <img src="img/field (2).png" alt="">
                              </div>
                            </td>
                            <td class="w-25">
                              <div class="d-flex flex-column mt-3">
                                <span class="mt-3">${
                                  fixtures[i].match_hometeam_name
                                }</span>
                              <span class="mt-4">${
                                fixtures[i].match_stadium.split(" ")[0] +
                                " " +
                                fixtures[i].match_stadium.split(" ")[1]
                              }</span>
                              </div>
                            </td>
                            <td class="w-25">
                             <div class="d-flex flex-column align-items-center">
                              <div class="d-flex justify-content-between w-100 mt-3">
                                <span class="fw-bold">-</span>
                              <span class="mx-3 bg-warning p-2 rounded-2">Not Started</span>
                              <span class="fw-bold">-</span>
                              </div>
                              <div class="mt-5">
                              <span>${fixtures[i].match_time}</span>
                              <span>${fixtures[i].match_date}</span>
                              </div>
                             </div>
                            </td>
                            <td class="w-25">
                              <div class="d-flex flex-column text-end  mt-3">
                                <span class="mt-3 ">${
                                  fixtures[i].match_awayteam_name
                                }</span>
                              <span class="mt-4 ">Round :</span>
                              </div>
                              
                            </td>
                            <td>
                              <div class="d-flex flex-column align-items-center  mt-3">
                                <img src="${
                                  fixtures[i].team_away_badge
                                }" alt="">
                              <span class="mt-2">${
                                fixtures[i].match_round
                              }</span>

                              </div>
                            </td>
                            
                          </tr>
                          </tbody>
                          </table>
                          </div>
    `;
    }else{
      cartona += `
      <div class="col-md-8">
                              <table class="table table-dark tableName">
                                <tbody class="tbodyFixtures">
      <tr>
                              <td>
                                <div class="d-flex flex-column align-items-center mt-3">
                                  <img src="${
                                    fixtures[i].team_home_badge
                                  }" alt="">
                                <img src="img/field (2).png" alt="">
                                </div>
                              </td>
                              <td class="w-25">
                                <div class="d-flex flex-column mt-3">
                                  <span class="mt-3">${
                                    fixtures[i].match_hometeam_name
                                  }</span>
                                <span class="mt-4">${
                                  fixtures[i].match_stadium.split(" ")[0] +
                                  " " +
                                  fixtures[i].match_stadium.split(" ")[1]
                                }</span>
                                </div>
                              </td>
                              <td class="w-25">
                               <div class="d-flex flex-column align-items-center">
                                <div class="d-flex justify-content-between w-100 mt-3">
                                  <span class="fw-bold">${fixtures[i].match_hometeam_score}</span>
                                <span class="mx-3 bg-success p-2 rounded-2">Live</span>
                                <span class="fw-bold">${fixtures[i].match_awayteam_score}</span>
                                </div>
                                <div class="mt-5">
                                <span>${fixtures[i].match_time}</span>
                                <span>${fixtures[i].match_date}</span>
                                </div>
                               </div>
                              </td>
                              <td class="w-25">
                                <div class="d-flex flex-column text-end  mt-3">
                                  <span class="mt-3 ">${
                                    fixtures[i].match_awayteam_name
                                  }</span>
                                <span class="mt-4 ">Round :</span>
                                </div>
                                
                              </td>
                              <td>
                                <div class="d-flex flex-column align-items-center  mt-3">
                                  <img src="${
                                    fixtures[i].team_away_badge
                                  }" alt="">
                                <span class="mt-2">${
                                  fixtures[i].match_round
                                }</span>
  
                                </div>
                              </td>
                              
                            </tr>
                            </tbody>
                            </table>
                            </div>
      `;
      
    }
  }
  document.getElementById(`${Id}`).innerHTML = cartona;
}

//                                        Teams

var teamsSection = document.getElementById("teams");
var teamsNav=document.getElementById('teamsNavId')
var liNavTeams=document.getElementById('liNavTeams')
var liNavHome=document.getElementById('liNavHome')
var homeNavId=document.getElementById('homeNavId')

homeNavId.addEventListener('click',function(){
  headerHome.style.display = "block";
  newsSection.style.display = "block";
  premierLeageSection.style.display = "none";
  playersSection.style.display = "none";
  teamsSection.style.display = "none";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
  teamsNav.classList.remove('aColorBlackNav')
  liNavTeams.classList.remove('homePage')
  liNavHome.classList.add('homePage')
  homeNavId.classList.replace('aColorWhiteNav','aColorBlackNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')


})
teamsNav.addEventListener("click", function () {
  headerHome.style.display = "none";
  newsSection.style.display = "none";
  premierLeageSection.style.display = "none";
  playersSection.style.display = "none";
  teamsSection.style.display = "block";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
  teamsNav.classList.add('aColorBlackNav')
  liNavTeams.classList.add('homePage')
  liNavHome.classList.remove('homePage')
  homeNavId.classList.add('aColorWhiteNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')

  

  teamsData();
  teamsSection.addEventListener("click", async function (e) {
    var data = await fetch(
      `https://apiv3.apifootball.com/?action=get_teams&team_id=${e.target.id}&APIkey=67aa146f9a0587dca2323808754aa451cea831f163e85a4ce100600b73040668`
    );
    var response = await data.json();
    displayPlayers(response[0].players);
    nameTeamPlayers.innerHTML = response[0].team_name;
    imageTeamPlayers.src = e.target.src;
    teamsSection.style.display = "none";
    playersSection.style.display = "block";
    headerHome.style.display = "none";
  newsSection.style.display = "none";
  premierLeageSection.style.display = "none";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
  });
});

var colorTeams = [
  { "Manchester City": "back0" },
  { "Liverpool": "back1" },
  { "Chelsea": "back2" },
  { "Manchester United": "back3" },
  { "Arsenal": "back4" },
  { "Tottenham Hotspur": "back5" },
  { "AFC Bournemouth": "back6" },
  { "Everton": "back7" },
  { "Sheffield United": "back8" },
  { "Burnley": "back9" },
  { "Wolverhampton Wanderers": "back10" },
  { "Brighton & Hove Albion": "back11" },
  { "West Ham United": "back12" },
  { "Fulham": "back13" },
  { "Brentford": "back14" },
  { "Aston Villa": "back15" },
  { "Nottingham Forest": "back16" },
  { "Luton Town": "back17" },
  { "Newcastle United": "back18" },
  { "Crystal Palace": "back19" },
];

var backTeam = document.getElementById("backTeamId");

async function teamsData() {
  var data = await fetch(
    `https://apiv3.apifootball.com/?action=get_teams&league_id=152&APIkey=67aa146f9a0587dca2323808754aa451cea831f163e85a4ce100600b73040668`
  );
  var response = await data.json();
  displayTeams(response);
}

function displayTeams(teams) {
  cartona = ``;
  for (var i = 0; i < teams.length; i++) {
    for (var j = 0; j < colorTeams.length; j++) {
      if (Object.keys(colorTeams[j]) == teams[i].team_name) {
        cartona += `
          <div class="col-md-3 rounded-3">
          <div class="${Object.values(
            colorTeams[j]
          )} d-flex flex-column align-items-center rounded-3 p-5" id="backTeamId">
            <div class="team d-flex flex-column align-items-center w-100 py-4"">
              <img src="${teams[i].team_badge}" alt="" id="${
          teams[i].team_key
        }"> 
            </div>
            <span class="mt-3 fw-bold text-dark">${teams[i].team_name}</span>
            

          </div>
        </div>
    
    `;
      }
    }
  }
  document.getElementById("teamRowId").innerHTML = cartona;
}

//                                                 Players

var playersSection = document.getElementById("players");
var navPremierPlayers = document.getElementById("navPremierPlayers");
var homeNavPremierPlayers = document.getElementById("homeNavPlayers");
var teamNavPlayers = document.getElementById("teamNavPlayers");

navPremierPlayers.addEventListener("click", function () {
  premierLeageSection.style.display = "block";
  newsSection.style.display = "none";
  headerHome.style.display = "none";
  teamsSection.style.display = "none";
  playersSection.style.display = "none";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
  teamsNav.classList.remove('aColorBlackNav')
  liNavTeams.classList.remove('homePage')
  liNavHome.classList.remove('homePage')
  homeNavId.classList.add('aColorWhiteNav')
  premierLeageNav.classList.add('aColorBlackNav')
  liNavPrimer.classList.add('homePage')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')
});
teamNavPlayers.addEventListener("click", function () {
  premierLeageSection.style.display = "none";
  newsSection.style.display = "none";
  headerHome.style.display = "none";
  teamsSection.style.display = "block";
  playersSection.style.display = "none";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
});

homeNavPremierPlayers.addEventListener("click", function () {
  premierLeageSection.style.display = "none";
  newsSection.style.display = "block";
  headerHome.style.display = "block";
  teamsSection.style.display = "none";
  playersSection.style.display = "none";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
  teamsNav.classList.remove('aColorBlackNav')
  liNavTeams.classList.remove('homePage')
  liNavHome.classList.add('homePage')
  homeNavId.classList.remove('aColorWhiteNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')
});

async function playersDate() {
  var data = await fetch(
    `https://apiv3.apifootball.com/?action=get_teams&team_id=80&APIkey=67aa146f9a0587dca2323808754aa451cea831f163e85a4ce100600b73040668`
  );
  var response = await data.json();
  displayPlayers(response[0].players);
}

function displayPlayers(players) {
  cartona = ``;
  box = ``;
  for (var i = 0; i < players.length; i++) {
    cartona += `
    <tr class="text-center">
    <td>${i + 1}</td>
    <td><img src="${players[i].player_image}" alt="Not Found"></td>
    <td>${players[i].player_name}</td>
    <td>${players[i].player_type}</td>
    <td class="numberPlayers">${players[i].player_number}</td>
    <td class="agePlayers">${players[i].player_age}</td>
    <td>${players[i].player_match_played}</td>
    <td class="injuredPlayers">${players[i].player_injured}</td>
    <td>${players[i].player_goals}</td>
    <td>${players[i].player_assists}</td>
    <td class="savesPlayers">${players[i].player_saves}</td>
  </tr>
    
    `;
  }
  document.getElementById("tbodyPlayers").innerHTML = cartona;
}

//                                     Register                                       //



navSignIn.addEventListener("click", function () {
  if (userSessionMood == "signIn") {
    premierLeageSection.style.display = "none";
    newsSection.style.display = "none";
    headerHome.style.display = "none";
    teamsSection.style.display = "none";
    playersSection.style.display = "none";
    publicOpinionSection.style.display = "none";
    signBtnStyle.innerHTML = "Sign Up";
    signSection.style.display = "block";
    userSection.style.display = "none";
  adminSection.style.display='none'
    backStyle.classList.add("style");
    mood = "signUp";
    homeNavId.classList.add('aColorWhiteNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liNavHome.classList.remove('homePage')
  liNavTeams.classList.remove('homePage')
  teamsNav.classList.remove('aColorBlackNav')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')
    
  } else {
    userSection.style.display = "none";
    headerHome.style.display = "block";
    newsSection.style.display = "block";
    premierLeageSection.style.display = "none";
    teamsSection.style.display = "none";
    playersSection.style.display = "none";
    publicOpinionSection.style.display = "none";
    adminSection.style.display='none'
    userSessionMood = "signIn";
    navSignIn.innerHTML = "Login";
    navSignUp.innerHTML = "Sign Up";
    homeNavId.classList.remove('aColorWhiteNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liNavHome.classList.add('homePage')
  liNavTeams.classList.remove('homePage')
  teamsNav.classList.remove('aColorBlackNav')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')

  }
});
navSignUp.addEventListener("click", function () {
  if (userSessionMood == "signIn") {
    premierLeageSection.style.display = "none";
    newsSection.style.display = "none";
    headerHome.style.display = "none";
    teamsSection.style.display = "none";
    playersSection.style.display = "none";
    signSection.style.display = "block";
    publicOpinionSection.style.display = "none";
  userSection.style.display = "none";
  adminSection.style.display='none'
    mood = "signIn";
    homeNavId.classList.add('aColorWhiteNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liNavHome.classList.remove('homePage')
  liNavTeams.classList.remove('homePage')
  teamsNav.classList.remove('aColorBlackNav')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')
  } else if(userSessionMood == "adminSession"){
    signSection.style.display = "none";
    userSection.style.display = "none";
    headerHome.style.display = "none";
    newsSection.style.display = "none";
    teamsSection.style.display = "none";
    playersSection.style.display = "none";
    premierLeageSection.style.display = "none";
    publicOpinionSection.style.display = "none";
    adminSection.style.display='block';
    homeNavId.classList.add('aColorWhiteNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liNavHome.classList.remove('homePage')
  liNavTeams.classList.remove('homePage')
  teamsNav.classList.remove('aColorBlackNav')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')

  }
  else {
    signSection.style.display = "none";
    userSection.style.display = "block";
    headerHome.style.display = "none";
    newsSection.style.display = "none";
    teamsSection.style.display = "none";
    playersSection.style.display = "none";
    premierLeageSection.style.display = "none";
    publicOpinionSection.style.display = "none";
    adminSection.style.display='none';
    homeNavId.classList.add('aColorWhiteNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liNavHome.classList.remove('homePage')
  liNavTeams.classList.remove('homePage')
  teamsNav.classList.remove('aColorBlackNav')
  liFansNav.classList.remove('homePage')
  publicOpinionNav.classList.remove('aColorBlackNav')
  }
});

if (localStorage.getItem("user")) {
  users = JSON.parse(localStorage.getItem("user"));
}

signBtnStyle.addEventListener("click", function () {
  if (mood == "signUp") {
    backStyle.classList.toggle("style");
    signBtnStyle.style.backgroundColor = "#ECF4D6";
    signBtnStyle.innerHTML = "Sign In";
    mood = "signIn";
  } else {
    backStyle.classList.toggle("style");
    signBtnStyle.style.backgroundColor = "#ECF4D6";
    signBtnStyle.innerHTML = "Sign Up";
    mood = "signUp";
    alertSignUP.style.display='none'
  }
});

signUp.addEventListener("click", function () {
  createUser();

  console.log(users);
});
function createUser() {
  for (var i = 0; i < 2; i++) {
    if (gender[i].checked) {
      var genderData = gender[i].value;
    }
  }
  userData = {
    id: "",
    fNameUser: firstName.value,
    lNameUser: lastName.value,
    emailUser: email.value,
    passwordUser: password.value,
    rePasswordUser: rePassword.value,
    phoneUser: phone.value,
    nationalityUser: nationality.value,
    genderUser: genderData,
    ads: []
  };

  
  if (
    regexName.test(firstName.value) &&
    regexName.test(lastName.value) &&
    regexEmail.test(email.value) &&
    regexPassword.test(password.value) &&
    password.value == rePassword.value &&
    regexPhone.test(phone.value) &&
    email.value!=adminAccount.adminEmail
  ) {
    var emailExisted = false;
    for (var i = 0; i < users.length; i++) {
      if (email.value == users[i].emailUser) {
        emailExisted = true;
      }
    }
    if (emailExisted == true) {
      alertSignUP.style.display = "block";
      alertSignIn.innerHTML="Email already Existed"
      alertSignIn.classList.add('bg-danger')
    } else {
      users.push(userData);
      localStorage.setItem("user", JSON.stringify(users));
      alertSpan.innerHTML = "Success";
      alertSignUP.classList.add("bg-success-subtle");
      alertSignUP.style.display = "block";
      setTimeout(function(){
        alertSignUP.style.display='none'
      },2000)
      clearTimeout(1)
      
      deleteUserData();
      for (var i = 0; i < users.length; i++) {
        users[i].id = `${i}`;
      }
      
      
      
    }
  } else {
    if(email.value==adminAccount.adminEmail){
      alertSpan.innerHTML = "Email already Existed";
    alertSignUP.style.display = "block";

    }
    else{
      alertSpan.innerHTML = "Your Data Non Valid Please Try Again";
    alertSignUP.style.display = "block";
    }
  }
}



function deleteUserData() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  rePassword.value = "";
  phone.value = "";
  genderData = "";
}

function deleteSignInData(){
  userEmailLogin.value='',
  userPasswordLogin.value=''
}



signIn.addEventListener("click", function () {
  signInLogin();
});
function signInLogin() {
  if (userSessionMood == "signIn") {
    var loginValid = false;
    for (var i = 0; i < users.length; i++) {
      if (
        userEmailLogin.value == users[i].emailUser &&
        userPasswordLogin.value == users[i].passwordUser
      ) {
        temp = users[i].id;
        loginValid = true;
        break;
      }
    }
    if (loginValid == true) {
      userSection.style.display = "block";
      nameOfUser.innerHTML = `${users[i].fNameUser}`;
      signSection.style.display = "none";
      loginValid = false;
      navSignIn.innerHTML = "Logout";
      navSignUp.innerHTML = "My Account";
      userSessionMood = "accountSession";
      console.log(users);     
      displayUserOpinion()     
      deleteSignInData()
      console.log(temp);
      
    } else if(userEmailLogin.value==adminAccount.adminEmail&&userPasswordLogin.value==adminAccount.adminPassword){
      signSection.style.display = "none";
    userSection.style.display = "none";
    headerHome.style.display = "none";
    newsSection.style.display = "none";
    teamsSection.style.display = "none";
    playersSection.style.display = "none";
    premierLeageSection.style.display = "none";
    publicOpinionSection.style.display = "none";
    adminSection.style.display='block'
    userSessionMood = "adminSession";
    navSignIn.innerHTML = "Logout";
    navSignUp.innerHTML = "My Account";
    deleteSignInData()
    displayUsersInAdminPage();
  displayFansOpinionAdmin()


  }
      
    }
    else {
      alertSignIn.style.display = "block";
    }
  }


for (var i = 0; i < users.length; i++) {
  users[i].id = `${i}`;
}

addOpinionId.addEventListener("click", function () {
  var dateAdd = new Date();
  if (adsMood == "add") {
    userOpinion = {
      image: imageLinkOpinion.value,
      description: descriptionOpinion.value,
      dateOpinion: dateAdd.toISOString().slice(0, 10),
    };
    users[temp].ads.push(userOpinion);
    localStorage.setItem("user", JSON.stringify(users));
    displayUserOpinion();
    displayPublicOpinion()
    clearOpinionData();
  } else {
    users[temp].ads[indexUpdate].image = imageLinkOpinion.value;
    users[temp].ads[indexUpdate].description = descriptionOpinion.value;
    localStorage.setItem("user", JSON.stringify(users));
    displayUserOpinion();
    displayPublicOpinion()
    clearOpinionData();
    adsMood = "add";
    addOpinionId.innerHTML = "Add";

  }
});

function displayUserOpinion() {
  cartona = ``;
  for (var i = 0; i < users[temp].ads.length; i++) {
    cartona += `
    <div class="col-md-4">
            <div class="laLeage">
              
              <div class="overflow-hidden">
              <img src="${users[temp].ads[i].image}" alt="Not Found" />
                        </div>
              
              <p class="p-2 pHight">${users[temp].ads[i].description.slice(
                0,
                40
              )}<br>${users[temp].ads[i].description.slice(40, 80)}</p>
             
              <span>Date : ${users[temp].ads[i].dateOpinion}</span>
              <div class="d-flex justify-content-center pb-3 pt-3">
                <button class="btn btn-danger px-3 me-3" onclick="deleteOpinion(${i})" id="deleteOpinion">
                  Delete
                </button>
                <button class="btn btn-warning px-3" onclick="updateOpinion(${i})">Update</button>
              </div>
            </div>
          </div>
    `
    ;
  }
  document.getElementById("rowOpinionId").innerHTML = cartona;
}

function deleteOpinion(index) {
  users[temp].ads.splice(index, 1);
  localStorage.setItem("user", JSON.stringify(users));
  displayUserOpinion();
  displayPublicOpinion()
}

function updateOpinion(index) {
  imageLinkOpinion.value = users[temp].ads[index].image;
  descriptionOpinion.value = users[temp].ads[index].description;
  addOpinionId.innerHTML = "Update";
  adsMood = "update";
  indexUpdate = index;
  window.scrollTo(0,0)
}

function clearOpinionData() {
  imageLinkOpinion.value = "";
  descriptionOpinion.value = "";
}

function displayPublicOpinion() {
  cartona = ``;
  for (var i = 0; i < users.length; i++) {
    for (var j = 0; j < users[i].ads.length; j++) {
      cartona += `
      <div class="col-md-4">
            <div class="laLeage">
            <div class="overflow-hidden">
            <img src="${users[i].ads[j].image}" alt="Not Found" />
                        </div>
              <p class="p-2">${users[i].ads[j].description}</p>
              <span class="text-info">${users[i].ads[j].dateOpinion}</span>
              
            </div>
          </div>
      `;
    }
  }
  document.getElementById("publicOpinionId").innerHTML = cartona;
}

var publicOpinionSection = document.getElementById("publicOpinionSection");
var liFansNav=document.getElementById('liFansNav')

publicOpinionNav.addEventListener("click", function () {
  premierLeageSection.style.display = "none";
  newsSection.style.display = "none";
  headerHome.style.display = "none";
  teamsSection.style.display = "none";
  playersSection.style.display = "none";
  signSection.style.display = "none";
  publicOpinionSection.style.display = "block";
  userSection.style.display = "none";
  adminSection.style.display='none'
  teamsNav.classList.remove('aColorBlackNav')
  liNavTeams.classList.remove('homePage')
  liNavHome.classList.remove('homePage')
  homeNavId.classList.add('aColorWhiteNav')
  premierLeageNav.classList.remove('aColorBlackNav')
  liNavPrimer.classList.remove('homePage')
  liFansNav.classList.add('homePage')
  publicOpinionNav.classList.add('aColorBlackNav')

});



////////////////////////////////////  Admin Page //////////////////////////////////////

function displayUsersInAdminPage() {
  var cartona = ``;
  for (var i = 0; i < users.length; i++) {
    cartona += `
    <tr>
                <td>${users[i].id}</td>
                <td>${users[i].fNameUser + " " + users[i].lNameUser}</td>
                <td>${users[i].emailUser}</td>
                <td>${users[i].phoneUser}</td>
                <td>${users[i].nationalityUser}</td>
                <td>${users[i].genderUser}</td>
                <td><button class="btn btn-danger" onclick='deleteUser(${i})'>Delete</button></td>
              </tr>
    `;
  }
  document.getElementById("usersAdmin").innerHTML = cartona;
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("user", JSON.stringify(users));
  displayUsersInAdminPage();
  
}


function displayFansOpinionAdmin() {
  var cartona = ``;
  for (var i = 0; i < users.length; i++) {
   for(var j=0;j<users[i].ads.length;j++){
    var key=i
    cartona += `
    <tr>
    <td>${users[i].id}</td>
    <td>${users[i].emailUser}</td>
    <td>${users[i].phoneUser}</td>
    <td><img src="${users[i].ads[j].image}" alt=""></td>
    <td>${users[i].ads[j].description} </td>
  
  
    <td><button class="btn btn-danger" onclick='deleteOpinionAdminPage(${key},${j})'>Delete</button></td>
  </tr>
   
    
    `;
  }
}
document.getElementById("fansOpinionAdmin").innerHTML = cartona;
}

function deleteOpinionAdminPage(keyUser,indexAds) {
  users[keyUser].ads.splice(indexAds,1);
  localStorage.setItem("user", JSON.stringify(users));
  displayFansOpinionAdmin();
  displayPublicOpinion()
}



function test() {
  newsFootball(mainMatches);
  premierLeageTable();
  displayPublicOpinion();
  displayUsersInAdminPage();
  displayFansOpinionAdmin()
}
test()



// ========================
// MODULES
// ========================

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

//===================================
// MIDDLEWARES
//===================================
//so user can access data from api from client-side code w/o cors issues
app.use(cors())

//===================================
// DATA
//===================================

const characters = {

    'justin anderson': {
        'firstAppearance': 'The Set Up',
        'lastAppearance': 'Galentine\'s Day',
        'portrayedBy': 'Justin Theroux',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Civil Litigation Lawyer',
    },

    'jennifer barkley': {
        'knownAlias1': 'Jen, A political mastermind.',
        'firstAppearance': 'Campaign Shake-Up',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Kathryn Hahn',
        'birthDate': 'June 25th',
        'birthLocation': 'Chicago IL',
        'age2021': 'early 40s',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Political Strategist',
    },

    'william barnes': {
        'firstAppearance': 'Li\'l Sebastian',
        'lastAppearance': 'The Comeback Kid',
        'portrayedBy': 'Johnny Sneed',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Political Scout',
    },

    'ethel beavers': {
        'knownAlias1': 'Adopted Grandma (by Andy and April)',
        'firstAppearance': 'The Bubble',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Helen Slayton-Hughes',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Court Stenographer',
    },

    'ben': {
        'knownAlias1': 'Derek\'s gay boyfriend',
        'firstAppearance': 'Pawnee Zoo',
        'lastAppearance': 'April and Andy\'s Fancy Party',
        'portrayedBy': 'Josh Duvendeck',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Flower Boy at Andy and April\'s Wedding',
    },

    'burly': {
        'knownAlias1': 'Puppy Hating Dan',
        'firstAppearance': 'Woman of the Year',
        'lastAppearance': 'The Johnny Karate Super Awesome Musical Explosion Show',
        'portrayedBy': 'Andrew Burlinson',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Guitarist at Mouse Rat',
    },

    'joan callamezzo': {
        'firstAppearance': 'Pawnee Zoo',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Mo Collins',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Host of Pawnee Today',
    },

    'champion': {
        'knownAlias1': 'Three Legged Wonder Dog',
        'firstAppearance': 'The Comeback Kid',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Lucy',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Dog',
    },

    'China Joe': {
        'knownAlias1': 'Doug Ng (real name)',
        'firstAppearance': 'Media Blitz',
        'lastAppearance': 'Ann\'s Decision',
        'portrayedBy': 'Danny Cho',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Sound Effects Guy on "Crazy Ira & The Douche" (former)',
    },

    'lord edgar covington': {
        'knownAlias1': 'Lord Fancy Face',
        'firstAppearance': 'London (Part 1)',
        'lastAppearance': 'The Johnny Karate Super Awesome Musical Explosion Show',
        'portrayedBy': 'Peter Serafinowicz',
        'gender': 'male',
        'status': 'alive',
        'occupation1': '14th Earl of Cornwall-Upon-Thames',
    },

    'Crazy Ira': {
        'firstAppearance': 'Media Blitz',
        'lastAppearance': 'New Slogan',
        'portrayedBy': 'Matt Besser',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Radio Show Host of Crazy Ira and The Douche at The Groove of Pawnee',
    },

    'ingrid de forest': {
        'firstAppearance': 'The Pawnee-Eagleton Tip Off Classic',
        'lastAppearance': 'Second Chunce',
        'portrayedBy': 'Kristen Bell',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Eagleton City Council Member',
    },

    'derek': {
        'knownAlias1': 'Ben\'s bisexual boyfriend',
        'firstAppearance': 'Rock Show',
        'lastAppearance': 'April and Andy\'s Fancy Party',
        'portrayedBy': 'Blake Lee',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Flower Boy at Andy and April\'s Wedding',
    },

    'dewey': {
        'firstAppearance': 'Women in Garbage',
        'lastAppearance': 'Are You Better Off?',
        'portrayedBy': 'Kiff VandenHeuvel',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Sanitation Worker',
    },

    'manrico della rossa': {
        'firstAppearance': 'The Debate',
        'lastAppearance': 'William Henry Harrison',
        'portrayedBy': 'Gary Carlos Cervantes',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'City Council Candidate',
    },


    'bill dexhart': {
        'knownAlias1': 'William Dexhart (real name)',
        'firstAppearance': 'Practice Date',
        'lastAppearance': 'Ron & Jammy',
        'portrayedBy': 'Kevin Symons',
        'age2021': 42,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Councilman',
    },

    'pete disellio': {
        'knownAlias1': '"Pistol" Pete Disellio',
        'firstAppearance': 'The Comeback Kid',
        'lastAppearance': 'Ann and Chris',
        'portrayedBy': 'Tuc Watkins',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Regional Distributor for Derwin Ham Loaves',
    },

    'dj roomba': {
        'firstAppearance': 'Sweetums',
        'lastAppearance': 'Gin it Up!',
        'portrayedBy': 'iRobot Roomba 650 Robotic Vacuum',
        'gender': 'Roomba',
        'status': 'alive?',
        'occupation1': 'DJ',
    },

    'the douche': {
        'knownAlias1': 'Howard Tuttleman',
        'firstAppearance': 'Media Blitz',
        'lastAppearance': 'Two Funerals',
        'portrayedBy': 'Nick Kroll',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Radio Show Host'
    },

    'andy dwyer': {
        'knownAlias1': 'The World\'s Funniest Man',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Chris Pratt',
        'birthDate': '6 April 1981',
        'birthLocation': 'Pawnee, Indiana',
        'age2021': 40,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Vocalist and guitarist of Mouse Rat (former)',
        'spouse1': 'April Ludgate'
    },

    'ron dunn': {
        'knownAlias1': 'Eagleton Ron',
        'firstAppearance': 'Doppelgängers',
        'lastAppearance': 'Two Funerals',
        'portrayedBy': 'Sam Elliot',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Head of Eagleton\'s Parks Department (former)',
    },

    'ed': {
        'firstAppearance': 'Moving Up',
        'lastAppearance': '2017',
        'portrayedBy': 'Jon Hamm',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Subordinate to Leslie Knope after she is promoted the Regional Director of National Park Service Midwest Region (fired)',
    },

    'eddie': {
        'knownAlias1': 'Dumb-dumb Eddie (Derogatorily)',
        'firstAppearance': 'Citizen Knope',
        'lastAppearance': 'Animal Control',
        'portrayedBy': 'uncredited',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Dennis Feinstein\'s CFO',
    },

    'eduardo': {
        'firstAppearance': 'Go Big or Go Home',
        'lastAppearance': 'Time Capsule',
        'portrayedBy': 'Carlo Mendez',
        'gender': 'male',
        'status': 'alive',
    },

    'elizabeth': {
        'firstAppearance': 'Li\'l Sebastian',
        'lastAppearance': 'The Comeback Kid',
        'portrayedBy': 'Antonia Raftu',
        'birthDate': 'May 5, 1980',
        'age2021': 31,
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Political Scout',
    },

    'joe fantringham': {
        'knownAlias1': 'Sewage Joe',
        'firstAppearance': 'The Camel',
        'lastAppearance': 'Bailout',
        'portrayedBy': 'Kirk Fox',
        'age2021': 53,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Former Head of the Pawnee Sewage Department',
    },

    'dennis feinstein': {
        'firstAppearance': 'Indianapolis',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Jason Mantzoukas',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Fragrance Maker',
    },

    'freddy': {
        'firstAppearance': 'Woman of the Year',
        'lastAppearance': 'The Fight',
        'portrayedBy': 'Andy Milder',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Owner of The Snakehole Lounge',
    },

    'chance frenlm': {
        'firstAppearance': 'Sweetums',
        'lastAppearance': 'Gryzzlbox',
        'portrayedBy': 'Jeffrey Markle',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Concerned Citizen',
    },

    'chief fugleberg': {
        'firstAppearance': 'Emergency Response',
        'portrayedBy': 'Rhomeyn Johnson',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Chief of Police',
    },

    'garry gergich': {
        'knownAlias1': 'Jerry',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Jim O\'Heir',
        'birthDate': '29 February 1948',
        'birthLocation': 'Pennsylvania',
        'age2021': 73,
        'gender': 'male',
        'status': 'alive (as of now; dies in 2048, aged 100)',
        'occupation1': 'Park ranger of Pawnee (former)',
        'spouse1': 'Gayle Gergich'
    },

    'gayle gergich': {
        'firstAppearance': 'Ron and Diane',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Christie Brinkley',
        'age2021': 'immortal',
        'gender': 'female',
        'status': 'alive',
        'spouse1': 'Garry Gergich'
    },

    'gladys gergich': {
        'firstAppearance': 'Ron and Diane',
        'portrayedBy': 'Katie Gill',
        'gender': 'female',
        'status': 'alive',
    },

    'millicent gergich': {
        'alias1': 'Millie Gergich',
        'firstAppearance': 'Pawnee Rangers',
        'lastAppearance': 'Jerry\'s Retirement',
        'portrayedBy': 'Sarah Wright',
        'age2021': 30,
        'gender': 'female',
        'status': 'alive',
        'spouse1': 'Carl (fiancé)',
    },

    'miriam gergich': {
        'firstAppearance': 'Ron and Diane',
        'portrayedBy': 'Maliabeth Johnson',
        'gender': 'female',
        'status': 'alive',
    },

    'lawrence gernway': {
        'firstAppearance': 'Canvassing',
        'lastAppearance': 'Sister City',
        'portrayedBy': 'Eric Edelstein',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Concerned Citizen',
    },

    'ginuwine': {
        'firstAppearance': 'Moving Up',
        'lastAppearance': 'Donna & Joe',
        'portrayedBy': 'Ginuwine',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Musical Artist',
    },

    'allison gliffert': {
        'firstAppearance': 'The Treaty',
        'lastAppearance': 'Prom',
        'portrayedBy': 'Kelly Washington',
        'age2021': 'teenager',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'High School Student'
    },

    'gretel': {
        'firstAppearance': 'Sweetums',
        'lastAppearance': 'London (Part 2)',
        'portrayedBy': 'Sara Van Horn',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Concerned Citizen'
    },

    'marlene griggs-knope': {
        'firstAppearance': 'Canvassing',
        'lastAppearance': 'Ben\'s Parents',
        'portrayedBy': 'Pamela Reed',
        'birthDate': '6 March 1953',
        'birthLocation': 'Pawnee Indiana',
        'age2021': 67,
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Director of the Education Department',
        'spouse1': 'Robert Knope (deceased)'
    },

    'bill haggerty': {
        'firstAppearance': '94 Meetings',
        'lastAppearance': 'William Henry Harrison',
        'portrayedBy': 'Hamilton Mitchell',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Historian from the Pawnee Historical Society'
    },

    'perd hapley': {
        'knownAlias1': 'Perderick L. Hapley (full name)',
        'firstAppearance': 'Practice Date',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Jay Jackson',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'News Anchor'
    },

    'harris': {
        'knownAlias1': 'Burnt-out Moron',
        'firstAppearance': 'The Possum',
        'lastAppearance': 'Pie-Mary',
        'portrayedBy': 'Harris Wittels',
        'age2021': 33,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Animal Control Co-Director',
    },

    'dr. harris': {
        'firstAppearance': 'Rock Show',
        'lastAppearance': 'One in 8,000',
        'portrayedBy': 'Cooper Thornton',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Doctor at Saint Joseph Hospital',
    },

    'tom haverford': {
        'knownAlias1': 'Tommy',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Aziz Ansari',
        'birthDate': '28 April, 1985',
        'birthLocation': 'Bennettsville, South Carolina',
        'age2021': 36,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Parks and Recreation Department Administrator (former)',
        'spouse1': 'Lucy Santo Domingo (current)'
    },

    'wendy haverford': {
        'firstAppearance': 'Rock Show',
        'lastAppearance': 'Ron & Tammy: Part 2',
        'portrayedBy': 'Jama Williamson',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Pediatric Surgeon',
        'spouse1': 'Tom Haverford (ex-husband)'
    },

    'roy hibbert': {
        'firstAppearance': 'Ron and Tammys',
        'lastAppearance': 'Two Parties',
        'portrayedBy': 'Roy Hibbert',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Center for the Indiana Pacers',
    },

    'ken hotate': {
        'firstAppearance': 'Harvest Festival',
        'lastAppearance': 'The Johnny Karate Super Awesome Musical Explosion Show',
        'portrayedBy': 'Jonathan Joss',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Wamapoke Native American',
    },

    'martin housely': {
        'firstAppearance': 'The Banquet',
        'lastAppearance': 'Pie-Mary',
        'portrayedBy': 'Jim Meskimen',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'MC for hire',
    },

    'douglass howser': {
        'firstAppearance': 'Hunting Trip',
        'lastAppearance': 'Ron & Jammy',
        'portrayedBy': 'Yvans Jourdain',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Councilman in Pawnee, Indiana',
    },
    
    'brett hull': {
        'knownAlias1': 'Burnt-Out Moron',
        'firstAppearance': 'The Possum',
        'lastAppearance': 'Pie-Mary',
        'portrayedBy': 'Colton Dunn',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Co-Director of the Animal Control',
    },

    'trish ianetta': {
        'knownAlias1': 'Amanda Bynes Without the Puffy Cheeks',
        'firstAppearance': 'Beauty Pageant',
        'lastAppearance': 'The Master Plan',
        'portrayedBy': 'April Marie Eden',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Beauty Pageant Competitor',
    },

    'jeremy jamm': {
        'knownAlias1': 'Jamm',
        'firstAppearance': 'How a Bill Becomes a Law',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Jon Glaser',
        'age2021': 51,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Councilman',
        'spouse1': 'Unnamed Wife (estranged)'
    },
    
    'leslie knope': {
        'knownAlias1': 'Leslie f*cking Knope',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Amy Poehler',
        'birthDate': 'January 18, 1975',
        'birthLocation': 'Eagleton, Indiana',
        'age2021': 46,
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'President of the United States (Implied) (Future,2048-)',
        'spouse1': 'Ben Wyatt'
    },

    'randy killnose': {
        'firstAppearance': 'Ron & Tammy: Part 2',
        'lastAppearance': 'The Johnny Karate Super Awesome Musical Explosion Show',
        'portrayedBy': 'Will McLaughlin',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Police Officer',
    },

    'kyle': {
        'firstAppearance': 'The Camel',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Andy Forrest',
        'age2021': 59,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Civil Attorney Assistant',
    },

    'marcia langman': {
        'firstAppearance': 'Pawnee Zoo',
        'lastAppearance': 'Pie-Mary',
        'portrayedBy': 'Darlene Hunt',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Activist for the Society for Family Stability Foundation (SFSF)',
        'spouse1': 'Marshall Langman'
    },

    'marshall langman': {
        'firstAppearance': 'Sex Education',
        'lastAppearance': 'Pie-Mary',
        'portrayedBy': 'Todd Sherry',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Activist for the Society for Family Stability Foundation (SFSF)',
        'spouse1': 'Marcia Langman'
    },

    'paul laresco': {
        'firstAppearance': 'Canvassing',
        'lastAppearance': 'Camping',
        'portrayedBy': 'Phil Reeves',
        'birthDate': '11 February, 1957',
        'age2021': 57,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Pawnee City Manager (former)'
    },

    'grant larson': {
        'firstAppearance': 'The Wall',
        'lastAppearance': 'Moving Up',
        'portrayedBy': 'Brady Smith',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Director of the Midwest Branch of the National Parks Service'
    },

    'bjorn lerpiss': {
        'firstAppearance': 'Indianapolis',
        'lastAppearance': 'New Slogan',
        'portrayedBy': 'Mike Mitchell',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Member of the Committee to Recall Councilwoman Leslie Knope',
    },

    'dennis lerpiss': {
        'firstAppearance': 'Bailout',
        'lastAppearance': 'Are You Better Off?',
        'portrayedBy': 'Jason Schwartzman',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Owner of Pawnee Video Dome',
    },

    'herman lerpiss': {
        'firstAppearance': 'Halloween Surprise',
        'lastAppearance': 'Save JJ\'s',
        'portrayedBy': 'Richard Burch',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Owns PawneePawn',
    },

    'morris lerpiss': {
        'firstAppearance': 'Halloween Surprise',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Joe Mande',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'City Councilman',
    },

    'diane lewis': {
        'knownAlias1': 'Diane Elizabeth "Tammy" Lewis Swanson',
        'firstAppearance': 'How a Bill Becomes a Law',
        'lastAppearance': 'Moving Up',
        'portrayedBy': 'Lucy Lawless',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Middle School Vice Principal',
        'spouse1': 'Ron Swanson'
    },   

    'ivy lewis': {
        'firstAppearance': 'How a Bill Becomes a Law',
        'lastAppearance': 'Moving Up (Part 2)',
        'portrayedBy': 'Rylan Lee',
        'age2021': 8,
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Princess'
    },

    'zoe lewis': {
        'firstAppearance': 'How a Bill Becomes a Law',
        'lastAppearance': 'Moving Up (Part 2)',
        'portrayedBy': 'Sadie Salazar',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Princess'
    },

    'jj lipscomb': {
        'firstAppearance': 'Flu Season',
        'lastAppearance': 'Save JJ\'s',
        'portrayedBy': 'Brent Briscoe',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Owner of JJ\'s Diner',
    },

    'linda lonegan': {
        'knownAlias1': 'Professor Linda Lonegan',
        'firstAppearance': 'Smallest Park',
        'lastAppearance': 'Lucky',
        'portrayedBy': 'Diane Bisutti',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Professor of Women\'s Studies at Pawnee Community College',
    },

    'natalie ludgate': {
        'firstAppearance': '94 Meetings',
        'lastAppearance': 'End of the World',
        'portrayedBy': 'Minni Jo Mazzola',
        'birthDate': 'October 31, 1986',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'High School Student',
    },

    'april ludgate': {
        'knownAlias1': 'Zuzu',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Aubrey Plaza',
        'birthDate': '1989',
        'birthLocation': 'Pawnee, Indiana',
        'age2021': 32,
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Student at Pawnee Community College (lapsed)',
        'spouse1': 'Andy Dwyer'
    },

    'larry ludgate': {
        'firstAppearance': '94 Meetings',
        'lastAppearance': 'April and Andy\'s Fancy Party',
        'portrayedBy': 'John Ellison Conlee',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'April\'s dad',
        'spouse1': 'Rita Ludgate'
    },

    'rita ludgate': {
        'firstAppearance': '94 Meetings',
        'lastAppearance': 'April and Andy\'s Fancy Party',
        'portrayedBy': 'Terri Hoyos',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'April\'s mom',
        'spouse1': 'Larry Ludgate'
    },

    'madison': {
        'alias1': 'Craig\'s quiet friend',
        'firstAppearance': 'Anniversaries',
        'lastAppearance': 'Moving Up',
        'portrayedBy': 'Sydney Endicott',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Event Coordinator for the Pawnee-Eagleton Unity Concert',
    },

    'salvatore manfrellotti': {
        'firstAppearance': 'The Banquet',
        'lastAppearance': 'Two Funerals',
        'portrayedBy': 'Cletus Young',
        'gender': 'male',
        'status': 'deceased',
        'occupation1': 'Barber at Modern Barber Shop',
    },

    'frank mann': {
        'firstAppearance': 'Fluoride',
        'lastAppearance': 'Mrs. Ludgate-Dwyer Goes to Washington',
        'portrayedBy': 'Bob Bancroft',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Accountant at Tilton & Radomski Accounting',
        'spouse1': 'Susan Lerpiss-Mann'
    },

    'brandi maxxxx': {
        'firstAppearance': 'Jerry\'s Painting',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Mara Marini',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Pornographic Star',
    },

    'donna meagle': {
        'knownAlias1': 'It happened once in a dream',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Retta',
        'birthDate': 'March 10th 1965',
        'birthLocation': 'Pawnee, Indiana',
        'age2021': 56,
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Permits Security at Pawnee\'s Parks and Recreation Department(former)',
        'spouse1': 'Joe Meagle'
    },

    'joe meagle': {
        'knownAlias1': 'Joseph Meagle (real name)',
        'firstAppearance': 'One in 8,000',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Keegan Michael Key',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Music Teacher',
        'spouse1': 'Donna Meagle'
    },

    'mel': {
        'knownAlias1': 'The Red Faced Man',
        'firstAppearance': 'Sister City',
        'lastAppearance': 'The Pawnee-Eagleton Tip Off Classic',
        'portrayedBy': 'Mel Cowan',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Concerned Citizen',
    },

    'fielding milton': {
        'firstAppearance': 'Soda Tax',
        'lastAppearance': 'Pie-Mary',
        'portrayedBy': 'James Greene',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Councilman in Pawnee, Indiana',
    },

    'derry murbles': {
        'firstAppearance': 'Born and Raised',
        'lastAppearance': 'Anniversaries',
        'portrayedBy': 'Dan Castellaneta',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Substitute Cohost of Thoughts for Your Thoughts',
    },

    'trevor nelsson': {
        'firstAppearance': 'Are You Better Off?',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Marc Evan Jackson',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Attorney',
    },

    'bobby newport': {
        'knownAlias1': 'Robert Newport (Full Name)',
        'firstAppearance': 'Campaign Ad',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Paul Rudd',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Senior Vice President of Sweetums (company)',
        'spouse1': 'Shauna Newport (née Malwae-Tweep)'
    },

    'nick newport': {
        'knownAlias1': 'Nicholas Newport, Sr. (Full Name)',
        'firstAppearance': 'Sweetums',
        'lastAppearance': '94 Meetings',
        'portrayedBy': 'Christopher Murray',
        'birthDate': '31 March 1914 or 1925?',
        'age2021': '98 or 87',
        'gender': 'male',
        'status': 'deceased',
        'occupation1': 'Former CEO of Sweetums',
        'spouse1': 'Jessica Wicks-Newport'
    },

    'shauna newport': {
        'knownAlias1': 'Shauna Malwae-Tweep',
        'firstAppearance': 'The Reporter',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Alison Becker',
        'gender': 'female',
        'birthDate': '3 April, 1985',
        'age2021': 33,
        'status': 'alive',
        'occupation1': 'Reporter for the Pawnee Journal',
        'spouse1': 'Bobby Newport'
    },

    'orin': {
        'firstAppearance': 'April and Andy\'s Fancy Party',
        'lastAppearance': 'Leslie & Ron',
        'portrayedBy': 'Eric Isenhower',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Artist',
    },

    'ann perkins': {
        'knownAlias1': 'Been There Done That',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Rashida Jones',
        'birthDate': '20 July 1981',
        'birthLocation': 'Michigan',
        'age2021': 40,
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Nurse at Saint Joseph Hospital (formerly; resigned)',
        'spouse1': 'Chris Traeger'
    },

    'phil': {
        'firstAppearance': 'Leslie\'s House',
        'portrayedBy': 'Stewart Skelton',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Disciplinary Committee Employee at Pawnee City Hall'
    },

    'greg pikitis': {
        'knownAlias1': 'Gregory Vernon Pikitis (real name)',
        'firstAppearance': 'Greg Pikitis',
        'lastAppearance': 'Prom',
        'portrayedBy': 'Cody Klop',
        'birthDate': '13 April 1994',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'High School Student'
    },

    'kathryn pinewood': {
        'firstAppearance': 'Soda Tax',
        'lastAppearance': 'Ann and Chris',
        'portrayedBy': 'Mary Faber',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Publicist/Lobbyist',
    },

    'annabel porter': {
        'firstAppearance': 'Recall Vote',
        'lastAppearance': 'William Henry Harrison',
        'portrayedBy': 'Erin Hayes',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Owner and CEO of Bloosh',
    },

    'david sanderson': {
        'knownAlias1': 'Dave',
        'firstAppearance': 'The Stakeout',
        'lastAppearance': 'Dave Returns',
        'portrayedBy': 'Louis C.K.',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Police Officer',
    },

    'lucy santo domingo': {
        'firstAppearance': 'The Master Plan',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Natalie Morales',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Manager of Tom\'s Bistro',
        'spouse1': 'Tom Haverford'
    },

    'lu saperstein': {
        'knownAlias1': 'Dr. Saperstein',
        'firstAppearance': 'London (Part 1)',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Henry Winkler',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Obstetrician',
    },

    'jean-ralphio saperstein': {
        'firstAppearance': 'Pilot',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Ben Schwartz',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Co-founder of Entertainment 720',
    },

    'mona-lisa saperstein': {
        'alias1': 'The Worst Person in the World',
        'firstAppearance': 'Bailout',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Jenny Slate',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Sales Associate at Rent-A-Swag (fired)',
    },

    'detlef schrempf': {
        'firstAppearance': 'Telethon',
        'lastAppearance': 'Ron and Tammys',
        'portrayedBy': 'Detlef Schrempf',
        'birthDate': '21 January, 1963',
        'age2021': 54,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Retired Professional basketball player for Indiana Pacers',
    },

    'officer skorggel': {
        'firstAppearance': 'Leslie vs. April',
        'lastAppearance': 'Leslie and Ben',
        'portrayedBy': 'Tracy Howe',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Police Officer',
    },

    'nadia stasky': {
        'firstAppearance': 'Gin It Up!',
        'lastAppearance': 'Filibuster',
        'portrayedBy': 'Tatiana Maslany',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Doctor at Doctors Without Borders',
    },

    'jon swanson': {
        'knownAlias1': 'Jonathan Leslie Swanson',
        'firstAppearance': 'The Wall',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'uncredited',
        'birthDate': 2013,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Student',
    },

    'ron swanson': {
        'knownAlias1': 'Duke Silver',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Nick Offerman',
        'birthDate': 'Spring Time, April 20 - May 20(Taurus, as stated in Season 6, Episode 3, “Dopplegangers”)',
        'age2021': 54,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Director of the Pawnee City Parks and Recreation Department',
        'spouse1': 'Diane Lewis (current)'
    },

    'tammy i': {
        'knownAlias1': 'Tammy Swanson',
        'firstAppearance': 'I\'m Leslie Knope',
        'lastAppearance': 'Ron and Tammys',
        'portrayedBy': 'Patricia Clarkson',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'IRS Agent',
        'spouse1': 'Ron Swanson (divorced)'
    },

    'tammy ii': {
        'knownAlias1': 'Tammy Swanson',
        'firstAppearance': 'Ron and Tammy',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Megan Mullally',
        'birthDate': '22 April, 1965',
        'birthLocation': 'Pawnee, Indiana',
        'age2021': 56,
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Deputy Director of Library Services',
        'spouse1': 'Ron Swanson (divorced)'
    },

    'tania': {
        'firstAppearance': 'Leslie\'s House',
        'lastAppearance': 'Meet N Greet',
        'portrayedBy': 'Becky Thyre',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Owner of Sue\'s Salads',
    },

    'theodore': {
        'knownAlias1': 'Ted',
        'firstAppearance': 'Article Two',
        'lastAppearance': 'Two Funerals',
        'portrayedBy': 'Brian Stack',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Jewellery Salesman',
        'spouse1': 'Unnamed (wife)'
    },

    'chris traeger': {
        'knownAlias1': 'The Bionic Man',
        'firstAppearance': 'The Master Plan',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Rob Lowe',
        'birthDate': '26 July, 1967',
        'age2021': 54,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Indiana government auditor (former)',
        'spouse1': 'Ann Perkins'
    },

    'hugh trumple': {
        'firstAppearance': 'Ron & Tammy: Part 2',
        'lastAppearance': 'Dave Returns',
        'portrayedBy': 'Eric Pierpoint',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Former Chief of Pawnee Police Department',
    },

    'typhoon': {
        'knownAlias1': 'Norman',
        'firstAppearance': 'Gin It Up!',
        'lastAppearance': 'One Last Ride',
        'portrayedBy': 'Rodney To',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Hairdresser',
        'spouse1': 'Craig Middlebrooks',
    },

    'unknown': {
        'knownAlias1': 'unknown',
        'firstAppearance': 'unknown',
        'lastAppearance': 'unknown',
        'portrayedBy': 'unknown',
        'birthDate': 'unknown',
        'birthLocation': 'unknown',
        'age2021': 'unknown',
        'gender': 'unknown',
        'status': 'unknown',
        'occupation1': 'unknown',
        'spouse1': 'unknown'
    },

    'barney varmn': {
        'firstAppearance': 'Leslie\'s House',
        'lastAppearance': 'Mrs. Ludgate-Dwyer Goes to Washington',
        'portrayedBy': 'John Balma',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Accountant at Tilton & Radomski Accounting',
    },

    'jessica wicks-newport': {
        'firstAppearance': 'Beauty Pageant',
        'lastAppearance': 'Save JJ\'s',
        'portrayedBy': 'Susan Yeagley',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'CEO of Smile, Wave, Walk, Inc.',
    },

    'george williams': {
        'firstAppearance': 'Jerry\'s Painting',
        'lastAppearance': 'The Trial of Leslie Knope',
        'portrayedBy': 'Biff Yeager',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Maintenance Worker in Public Works',
    },

    'ian winston': {
        'knownAlias1': 'coach',
        'firstAppearance': 'Pilot',
        'lastAppearance': 'Woman of the Year',
        'portrayedBy': 'Ian Roberts',
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Girls\' Soccer Coach',
    },

    'ben wyatt': {
        'knownAlias1': 'Ice Town',
        'firstAppearance': 'The Master Plan',
        'lastAppearance': 'A Parks and Recreation Special',
        'portrayedBy': 'Adam Scott',
        'birthDate': '14 November 1974',
        'birthLocation': 'Partridge, Minnesota',
        'age2021': 47,
        'gender': 'male',
        'status': 'alive',
        'occupation1': 'Mayor of Partridge, Minnesota (impeached)',
        'spouse1': 'Leslie Knope'
    },

    'elise yarktin': {
        'firstAppearance': 'Woman of the Year',
        'lastAppearance': 'Pie-Mary',
        'portrayedBy': 'Maribeth Monroe',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Director of Indiana Organization of Women',
    },

    'denise yermley': {
        'firstAppearance': 'Beauty Pageant',
        'lastAppearance': 'The Debate',
        'portrayedBy': 'Linda Montana',
        'gender': 'female',
        'status': 'alive',
        'occupation1': 'Singer',
    },

}    

//===================================
// ROUTES
//===================================

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//return query parameter
app.get('/api/:characters', (request, response) => {
    const charactersName = request.params.characters.toLowerCase()
    if (characters[charactersName]) {
        response.json(characters[charactersName])
    } else {
        response.json(characters['unknown'])
    }
})

//===================================
// LISTENER (PORT)
//===================================
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT}! You'd better go catch it...`)
})

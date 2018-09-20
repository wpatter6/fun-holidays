'use strict';

const holidays = {
	"0101": {
		name: "New Year's Day"
	},
	"0102": {
		name: "National Science Fiction Day"
	},
	"0103": {
		name: "JRR Tolkien Day"
	},
	"0104": {
		name: "National Spaghetti Day"
	},
	"0105": {
		name: "National Bird Day"
	},
	"0106": {
		name: "National Bean Day"
	},
	"0107": {
		name: "National Bobblehead Day"
	},
	"0108": {
		name: "National Bubble Bath Day"
	},
	"0109": {
		name: "National Law Enforcement Appreciation Day"
	},
	"0110": {
		name: "National Houseplant Appreciation Day"
	},
	"0111": {
		name: "National Milk Day"
	},
	"0112": {
		name: "Kiss a Ginger Day"
	},
	"0113": {
		name: "National Rubber Ducky Day"
	},
	"0114": {
		name: "National Hot Pastrami Sandwich Day"
	},
	"0115": {
		name: "Martin Luther King, Jr. Day"
	},
	"0116": {
		name: "National Fig Newton Day"
	},
	"0117": {
		name: "National Hot Buttered Rum Day"
	},
	"0118": {
		name: "National Thesaurus Day"
	},
	"0119": {
		name: "National Popcorn Day"
	},
	"0120": {
		name: "National Cheese Lover's Day"
	},
	"0121": {
		name: "National Squirrel Appreciation Day"
	},
	"0122": {
		name: "Celebration of Life Day"
	},
	"0123": {
		name: "National Pie Day"
	},
	"0124": {
		name: "National Beer Can Appreciation Day"
	},
	"0125": {
		name: "National Opposite Day"
	},
	"0126": {
		name: "National Spouses Day"
	},
	"0127": {
		name: "International Holocaust Remembrance Day"
	},
	"0128": {
		name: "National Daisy Day"
	},
	"0129": {
		name: "National Puzzle Day"
	},
	"0130": {
		name: "National Croissant Day"
	},
	"0131": {
		name: "National Hot Chocolate Day"
	},
	"0201": {
		name: "National Freedom Day"
	},
	"0202": {
		name: "Groundhog Day"
	},
	"0203": {
		name: "Doggy Date Night"
	},
	"0204": {
		name: "National Eat Ice Cream for Breakfast Day"
	},
	"0205": {
		name: "National Weatherperson's Day"
	},
	"0206": {
		name: "National Frozen Yogurt Day"
	},
	"0207": {
		name: "National Fettuccine Alfredo Day"
	},
	"0208": {
		name: "National Boy Scout Day"
	},
	"0209": {
		name: "National Pizza Day"
	},
	"0210": {
		name: "National Umbrella Day"
	},
	"0211": {
		name: "International Day of Women and Girls in Science"
	},
	"0212": {
		name: "National Clean Out Your Computer Day"
	},
	"0213": {
		name: "Mardi Gras"
	},
	"0214": {
		name: "Valentine's Day"
	},
	"0215": {
		name: "Singles Awareness Day"
	},
	"0216": {
		name: "Chinese New Year"
	},
	"0217": {
		name: "Random Act of Kindness Day"
	},
	"0218": {
		name: "Presidents' Day"
	},
	"0219": {
		name: "Tug of War Day"
	},
	"0220": {
		name: "National Love Your Pet Day"
	},
	"0221": {
		name: "National Sticky Bun Day"
	},
	"0222": {
		name: "National Margarita Day"
	},
	"0223": {
		name: "National Chili Day"
	},
	"0224": {
		name: "National Tortilla Chip Day"
	},
	"0225": {
		name: "National Clam Chowder Day"
	},
	"0226": {
		name: "National Pistachio Day"
	},
	"0227": {
		name: "National Pancake Day"
	},
	"0228": {
		name: "National Chocolate Souffle Day"
	},
	"0301": {
		name: "National Peanut Butter Lover's Day"
	},
	"0302": {
		name: "National Read Across America Day"
	},
	"0303": {
		name: "National If Pets Had Thumbs Day"
	},
	"0304": {
		name: "National Grammar Day"
	},
	"0305": {
		name: "National Absinthe Day"
	},
	"0306": {
		name: "National Dentist's Day"
	},
	"0307": {
		name: "National Cereal Day"
	},
	"0308": {
		name: "National Day of Unplugging"
	},
	"0309": {
		name: "National Meatball Day"
	},
	"0310": {
		name: "National Landline Telephone Day"
	},
	"0311": {
		name: "National Promposal Day"
	},
	"0312": {
		name: "National Napping Day"
	},
	"0313": {
		name: "National K9 Veterans Day"
	},
	"0314": {
		name: "National Pi Day"
	},
	"0315": {
		name: "Ides of March"
	},
	"0316": {
		name: "National Artichoke Day"
	},
	"0317": {
		name: "St. Patrick's Day"
	},
	"0318": {
		name: "Awkward Moments Day"
	},
	"0319": {
		name: "National Poultry Day"
	},
	"0320": {
		name: "Spring Equinox"
	},
	"0321": {
		name: "National Kick Butts Day"
	},
	"0322": {
		name: "National Goof Off Day"
	},
	"0323": {
		name: "National Puppy Day"
	},
	"0324": {
		name: "National Cheesesteak Day"
	},
	"0325": {
		name: "International Waffle Day"
	},
	"0326": {
		name: "National Spinach Day"
	},
	"0327": {
		name: "National Spanish Paella Day"
	},
	"0328": {
		name: "Respect Your Cat Day"
	},
	"0329": {
		name: "Major League Baseball Opening Day"
	},
	"0330": {
		name: "National Doctors' Day"
	},
	"0331": {
		name: "World Backup Day"
	},
	"0401": {
		name: "April Fools' Day"
	},
	"0402": {
		name: "National Peanut Butter and Jelly Day"
	},
	"0403": {
		name: "World Party Day"
	},
	"0404": {
		name: "National Walking Day"
	},
	"0405": {
		name: "National Burrito Day"
	},
	"0406": {
		name: "New Beer's Eve"
	},
	"0407": {
		name: "National Beer Day"
	},
	"0408": {
		name: "National Empanada Day"
	},
	"0409": {
		name: "National Winston Churchill Day"
	},
	"0410": {
		name: "National Siblings Day"
	},
	"0411": {
		name: "National Pet Day"
	},
	"0412": {
		name: "National Grilled Cheese Sandwich Day"
	},
	"0413": {
		name: "National Make Lunch Count Day"
	},
	"0414": {
		name: "National Ex Spouse Day"
	},
	"0415": {
		name: "National Laundry Day"
	},
	"0416": {
		name: "Wear Pajamas to Work Day"
	},
	"0417": {
		name: "National Cheeseball Day"
	},
	"0418": {
		name: "National Velociraptor Awareness Day"
	},
	"0419": {
		name: "National High Five Day"
	},
	"0420": {
		name: "National Look-Alike Day"
	},
	"0421": {
		name: "National Bulldogs are Beautiful Day"
	},
	"0422": {
		name: "Earth Day"
	},
	"0423": {
		name: "World Book Day"
	},
	"0424": {
		name: "National Pigs in a Blanket Day"
	},
	"0425": {
		name: "World Malaria Day"
	},
	"0426": {
		name: "National Pretzel Day"
	},
	"0427": {
		name: "National Prime Rib Day"
	},
	"0428": {
		name: "National Superhero Day"
	},
	"0429": {
		name: "National Shrimp Scampi Day"
	},
	"0430": {
		name: "National Raisin Day"
	},
	"0501": {
		name: "May Day"
	},
	"0502": {
		name: "National Brothers and Sisters Day"
	},
	"0503": {
		name: "National Paranormal Day"
	},
	"0504": {
		name: "Star Wars Day"
	},
	"0505": {
		name: "Cinco de Mayo"
	},
	"0506": {
		name: "International No Diet Day"
	},
	"0507": {
		name: "National Tourism Day"
	},
	"0508": {
		name: "National Teacher's Day"
	},
	"0509": {
		name: "National Moscato Day"
	},
	"0510": {
		name: "National Clean Your Room Day"
	},
	"0511": {
		name: "National Eat What You Want Day"
	},
	"0512": {
		name: "National Limerick Day"
	},
	"0513": {
		name: "Mother's Day"
	},
	"0514": {
		name: "National Buttermilk Biscuit Day"
	},
	"0515": {
		name: "National Chocolate Chip Day"
	},
	"0516": {
		name: "National Mimosa Day"
	},
	"0517": {
		name: "National Walnut Day"
	},
	"0518": {
		name: "National Pizza Party Day"
	},
	"0519": {
		name: "National Devil's Food Cake Day"
	},
	"0520": {
		name: "National Be a Millionaire Day"
	},
	"0521": {
		name: "National Waiters and Waitresses Day"
	},
	"0522": {
		name: "International Day for Biological Diversity"
	},
	"0523": {
		name: "National Taffy Day"
	},
	"0524": {
		name: "National Scavenger Hunt Day"
	},
	"0525": {
		name: "National Wine Day"
	},
	"0526": {
		name: "National Paper Airplane Day"
	},
	"0527": {
		name: "National Sunscreen Day"
	},
	"0528": {
		name: "National Hamburger Day"
	},
	"0529": {
		name: "Learn About Composting Day"
	},
	"0530": {
		name: "National Mint Julep Day"
	},
	"0531": {
		name: "National Macaroon Day"
	},
	"0601": {
		name: "National Donut Day"
	},
	"0603": {
		name: "National Egg Day"
	},
	"0604": {
		name: "National Day of Civic Hacking"
	},
	"0605": {
		name: "National Moonshine Day"
	},
	"0606": {
		name: "National Yo-Yo Day"
	},
	"0607": {
		name: "National Chocolate Ice Cream Day"
	},
	"0608": {
		name: "National Best Friends' Day"
	},
	"0609": {
		name: "National Donald Duck Day"
	},
	"0610": {
		name: "National Iced Tea Day"
	},
	"0611": {
		name: "National Corn on the Cob Day"
	},
	"0612": {
		name: "National Loving Day"
	},
	"0613": {
		name: "National Sewing Machine Day"
	},
	"0614": {
		name: "National Bourbon Day"
	},
	"0615": {
		name: "World Elder Abuse Awareness Day"
	},
	"0616": {
		name: "National Fudge Day"
	},
	"0617": {
		name: "Father's Day"
	},
	"0618": {
		name: "International Sushi Day"
	},
	"0619": {
		name: "National Garfield the Cat Day"
	},
	"0620": {
		name: "Ugliest Dog Day"
	},
	"0621": {
		name: "Summer Solstice"
	},
	"0622": {
		name: "National Take Your Dog to Work Day"
	},
	"0623": {
		name: "National Hydration Day"
	},
	"0624": {
		name: "Saint-Jean-Baptiste Day"
	},
	"0625": {
		name: "National Take Your Cat to Work Day"
	},
	"0626": {
		name: "National Chocolate Pudding Day"
	},
	"0627": {
		name: "National Sunglasses Day"
	},
	"0628": {
		name: "National Tapioca Day"
	},
	"0629": {
		name: "Hug Holiday"
	},
	"0630": {
		name: "International Asteroid Day"
	},
	"0701": {
		name: "International Joke Day"
	},
	"0702": {
		name: "World UFO Day"
	},
	"0703": {
		name: "National Stay Out of the Sun Day"
	},
	"0704": {
		name: "Independence Day"
	},
	"0705": {
		name: "National Bikini Day"
	},
	"0706": {
		name: "National Fried Chicken Day"
	},
	"0707": {
		name: "National Strawberry Sundae Day"
	},
	"0708": {
		name: "National Video Game Day"
	},
	"0709": {
		name: "National Sugar Cookie Day"
	},
	"0710": {
		name: "National Piña Colada Day"
	},
	"0711": {
		name: "National Free Slurpee Day"
	},
	"0712": {
		name: "National Eat Your Jello Day"
	},
	"0713": {
		name: "National French Fry Day"
	},
	"0714": {
		name: "National Mac and Cheese Day"
	},
	"0715": {
		name: "National Ice Cream Day"
	},
	"0716": {
		name: "National Corn Fritter Day"
	},
	"0717": {
		name: "World Emoji Day"
	},
	"0718": {
		name: "National Hot Dog Day"
	},
	"0719": {
		name: "National Daiquiri Day"
	},
	"0720": {
		name: "National Moon Day"
	},
	"0721": {
		name: "National Junk Food Day"
	},
	"0722": {
		name: "National Parents’ Day"
	},
	"0723": {
		name: "National Gorgeous Grandma Day"
	},
	"0724": {
		name: "National Tequila Day"
	},
	"0725": {
		name: "National Hot Fudge Sundae Day"
	},
	"0726": {
		name: "National Chili Dog Day"
	},
	"0727": {
		name: "National Creme Brûlée Day"
	},
	"0728": {
		name: "National Milk Chocolate Day"
	},
	"0729": {
		name: "National Chicken Wing Day"
	},
	"0730": {
		name: "International Day of Friendship"
	},
	"0731": {
		name: "National Mutt Day"
	},
	"0801": {
		name: "Spider-Man Day"
	},
	"0802": {
		name: "National Ice Cream Sandwich Day"
	},
	"0803": {
		name: "International Beer Day"
	},
	"0804": {
		name: "National Mustard Day"
	},
	"0805": {
		name: "National Underwear Day"
	},
	"0806": {
		name: "Terry Fox Day"
	},
	"0807": {
		name: "National Lighthouse Day"
	},
	"0808": {
		name: "World Cat Day"
	},
	"0809": {
		name: "National Book Lovers Day"
	},
	"0810": {
		name: "National Lazy Day"
	},
	"0811": {
		name: "National Bowling Day"
	},
	"0812": {
		name: "International Youth Day"
	},
	"0813": {
		name: "International Lefthanders Day"
	},
	"0814": {
		name: "National Financial Awareness Day"
	},
	"0815": {
		name: "Chant at the Moon Day"
	},
	"0816": {
		name: "National Tell A Joke Day"
	},
	"0817": {
		name: "National Black Cat Appreciation Day"
	},
	"0818": {
		name: "National Fajita Day"
	},
	"0819": {
		name: "National Potato Day"
	},
	"0820": {
		name: "National Lemonade Day"
	},
	"0821": {
		name: "National Senior Citizens Day"
	},
	"0822": {
		name: "National Tooth Fairy Day"
	},
	"0823": {
		name: "Cheap Flight Day"
	},
	"0824": {
		name: "National Waffle Day"
	},
	"0825": {
		name: "National Banana Split Day"
	},
	"0826": {
		name: "National Dog Day"
	},
	"0827": {
		name: "National Just Because Day"
	},
	"0828": {
		name: "National Red Wine Day"
	},
	"0829": {
		name: "National Lemon Juice Day"
	},
	"0830": {
		name: "National Beach Day"
	},
	"0831": {
		name: "National Trail Mix Day"
	},
	"0901": {
		name: "College Colors Day"
	},
	"0902": {
		name: "World Coconut Day"
	},
	"0903": {
		name: "National Skyscraper Day"
	},
	"0904": {
		name: "​National Wildlife Day"
	},
	"0905": {
		name: "National Cheese Pizza Day"
	},
	"0906": {
		name: "National Read a Book Day"
	},
	"0907": {
		name: "National Beer Lover's Day"
	},
	"0908": {
		name: "International Literacy Day"
	},
	"0909": {
		name: "National Wiener Schnitzel Day"
	},
	"0910": {
		name: "World Suicide Prevention Day"
	},
	"0911": {
		name: "National Make Your Bed Day"
	},
	"0912": {
		name: "National Video Games Day"
	},
	"0913": {
		name: "National Peanut Day"
	},
	"0914": {
		name: "International Stuttering Awareness Day"
	},
	"0915": {
		name: "Batman Day"
	},
	"0916": {
		name: "National Guacamole Day"
	},
	"0917": {
		name: "Constitution Day"
	},
	"0918": {
		name: "National Cheeseburger Day"
	},
	"0919": {
		name: "National Meow Like a Pirate Day"
	},
	"0920": {
		name: "National Pepperoni Pizza Day"
	},
	"0921": {
		name: "International Day of Peace"
	},
	"0922": {
		name: "National Ice Cream Cone Day"
	},
	"0923": {
		name: "National Dogs in Politics Day"
	},
	"0924": {
		name: "National Cherries Jubilee Day"
	},
	"0925": {
		name: "National Comic Book Day"
	},
	"0926": {
		name: "National Pancake Day"
	},
	"0927": {
		name: "World Tourism Day"
	},
	"0928": {
		name: "National Drink Beer Day"
	},
	"0929": {
		name: "National Coffee Day"
	},
	"0930": {
		name: "International Podcast Day"
	},
	"1001": {
		name: "National Homemade Cookies Day"
	},
	"1002": {
		name: "International Day of Non-Violence"
	},
	"1003": {
		name: "National Boyfriend Day"
	},
	"1004": {
		name: "National Crunchy Taco Day"
	},
	"1005": {
		name: "National Do Something Nice Day"
	},
	"1006": {
		name: "National Noodle Day"
	},
	"1007": {
		name: "World Smile Day"
	},
	"1008": {
		name: "National Kick Butt Day"
	},
	"1009": {
		name: "World Post Day"
	},
	"1010": {
		name: "World Mental Health Day"
	},
	"1011": {
		name: "National Pet Obesity Day"
	},
	"1012": {
		name: "National Farmers Day"
	},
	"1013": {
		name: "National No Bra Day"
	},
	"1014": {
		name: "National Dessert Day"
	},
	"1015": {
		name: "Global Handwashing Day"
	},
	"1016": {
		name: "National Feral Cat Day"
	},
	"1017": {
		name: "National Clean Your Virtual Desktop Day"
	},
	"1018": {
		name: "National Chocolate Cupcake Day"
	},
	"1019": {
		name: "National New Friends Day"
	},
	"1020": {
		name: "World Osteoporosis Day"
	},
	"1021": {
		name: "International Day of the Nacho"
	},
	"1022": {
		name: "National Nut Day"
	},
	"1023": {
		name: "National Boston Cream Pie Day"
	},
	"1024": {
		name: "National Bologna Day"
	},
	"1025": {
		name: "National Greasy Foods Day"
	},
	"1026": {
		name: "National Pumpkin Day"
	},
	"1027": {
		name: "National American Beer Day"
	},
	"1028": {
		name: "National Chocolate Day"
	},
	"1029": {
		name: "National Internet Day"
	},
	"1030": {
		name: "National Checklist Day"
	},
	"1031": {
		name: "Halloween"
	},
	"1101": {
		name: "National Cook For Your Pets Day"
	},
	"1102": {
		name: "Day of the Dead"
	},
	"1103": {
		name: "National Sandwich Day"
	},
	"1104": {
		name: "National Candy Day"
	},
	"1105": {
		name: "American Football Day"
	},
	"1106": {
		name: "National Nachos Day"
	},
	"1107": {
		name: "National Canine Lymphoma Awareness Day"
	},
	"1108": {
		name: "S.T.E.M. - S.T.E.A.M. Day"
	},
	"1109": {
		name: "Go to an Art Museum Day"
	},
	"1110": {
		name: "Sesame Street Day"
	},
	"1111": {
		name: "National Sundae Day"
	},
	"1112": {
		name: "National Happy Hour Day"
	},
	"1113": {
		name: "World Kindness Day"
	},
	"1114": {
		name: "National Pickle Day"
	},
	"1115": {
		name: "National Clean Out Your Fridge Day"
	},
	"1116": {
		name: "International Day For Tolerance"
	},
	"1117": {
		name: "National Unfriend Day"
	},
	"1118": {
		name: "Mickey Mouse Day"
	},
	"1119": {
		name: "World Toilet Day"
	},
	"1120": {
		name: "National Entrepreneur Day"
	},
	"1121": {
		name: "World Television Day"
	},
	"1122": {
		name: "Go For A Ride Day"
	},
	"1123": {
		name: "Black Friday"
	},
	"1124": {
		name: "Small Business Saturday"
	},
	"1125": {
		name: "International Day for the Elimination of Violence Against Women"
	},
	"1126": {
		name: "National Cake Day"
	},
	"1127": {
		name: "Giving Tuesday"
	},
	"1128": {
		name: "National French Toast Day"
	},
	"1129": {
		name: "National Lemon Cream Pie Day"
	},
	"1130": {
		name: "National Computer Security Day"
	},
	"1201": {
		name: "National Christmas Lights Day"
	},
	"1202": {
		name: "National Mutt Day"
	},
	"1203": {
		name: "National Disability Day"
	},
	"1204": {
		name: "National Cookie Day"
	},
	"1205": {
		name: "International Ninja Day"
	},
	"1206": {
		name: "National Gazpacho Day"
	},
	"1207": {
		name: "National Letter Writing Day"
	},
	"1208": {
		name: "National Brownie Day"
	},
	"1209": {
		name: "National Pastry Day"
	},
	"1210": {
		name: "National Lager Day"
	},
	"1211": {
		name: "International Mountain Day"
	},
	"1212": {
		name: "National Gingerbread House Day"
	},
	"1213": {
		name: "National Ice Cream Day"
	},
	"1214": {
		name: "National Monkey Day"
	},
	"1215": {
		name: "National Cat Herders Day"
	},
	"1216": {
		name: "National Chocolate Covered Anything Day"
	},
	"1217": {
		name: "National Maple Syrup Day"
	},
	"1218": {
		name: "Answer The Telephone Like Buddy The Elf Day"
	},
	"1219": {
		name: "National Hard Candy Day"
	},
	"1220": {
		name: "National Sangria Day"
	},
	"1221": {
		name: "National Crossword Puzzle Day"
	},
	"1222": {
		name: "National Cookie Exchange Day"
	},
	"1223": {
		name: "Festivus"
	},
	"1224": {
		name: "Christmas Eve"
	},
	"1225": {
		name: "Christmas"
	},
	"1226": {
		name: "National Thank You Note Day"
	},
	"1227": {
		name: "National Fruitcake Day"
	},
	"1228": {
		name: "National Call a Friend Day"
	},
	"1229": {
		name: "Still Need To Do Day"
	},
	"1230": {
		name: "National Bacon Day"
	},
	"1231": {
		name: "New Year's Eve"}
};

module.exports = holidays;
module.exports.default = holidays;

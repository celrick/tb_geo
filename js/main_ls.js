/* Custom directive for detecting click outside of element */
/*Vue.directive('click-outside', {
	bind: function (el, binding, vnode) {
		this.event = function (event) {
		if (!(el == event.target || el.contains(event.target))) {
			vnode.context[binding.expression](event);
		}
	};
	document.body.addEventListener('click', this.event)
	},
	unbind: function (el) {
		document.body.removeEventListener('click', this.event)
	},
});
	*/
Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,
		squads: [
		//---------------------------------------------------------------------------------------------------------------------------------DS SQUADS
			{	
				id: 0,
				name: 'Sith Empire',
				toons: ['darth_revan', 'bastila_shan_(fallen)', 'hk-47', 'sith_marauder', 'darth_malak']
			},
			{
				id: 1,
				name: 'First Order',
				toons: ['kylo_ren_(unmasked)', 'kylo_ren', 'first_order_executioner', 'first_order_officer', 'first_order_stormtrooper'],
			},
			{
				id: 2,
				name: 'Bounty Hunters',
				toons: ['bossk','jango_fett', 'boba_fett', 'dengar', 'cad_bane']
			},
			{
				id: 3,
				name: 'Empire',
				toons: ['emperor_palpatine', 'darth_vader', 'grand_admiral_thrawn', 'grand_moff_tarkin', 'tie_fighter_pilot'  ]
			},
			{
				id: 4,
				name: 'Night Sisters',
				toons: ['mother_talzin', 'asajj_ventress', 'nightsister_zombie', 'old_daka', 'nightsister_spirit' ]
			},
			{
				id: 5,
				name: 'Sith Triumvirate',
				toons: ['darth_traya', 'darth_sion', 'darth_nihilus', 'sith_empire_trooper', 'count_dooku']
			},
			{
				id: 6,
				name: 'Separatist Droids',
				toons: ['general_grievous', 'b2_super_battle_droid', 'b1_battle_droid', 'droideka', 'ig100_magnaguard']
			},
			{
				id: 7,
				name: 'Geonosians',
				toons: ['geonosian_brood_alpha', 'geonosian_soldier', 'geonosian_spy', 'poggle_the_lesser', 'sun_fac']
			},
			{
				id: 8,
				name: 'Nute team',
				toons: ['nute_gunrey', 'b1_battle_droid', 'b2_super_battle_droid', 'droideka', 'ig100_magnaguard' ]
			},
			{
				id: 9,
				name: 'Dooku + Asajj',
				toons: ['count_dooku', 'asajj_ventress']
			},
			{
				id: 10,
				name: 'Poggle Geos',
				toons: ['poggle_the_lesser', 'geonosian_soldier', 'geonosian_spy', 'sun_fac', 'geonosian_brood_alpha']
			},
			{
				id: 11,
				name: 'Chimaera standard',
				toons: ['hound\'s_tooth', 'imperial_tie_fighter', 'tie_silencer', 'xanadu_blood', 'emperor\'s_shuttle']
			},
			{
				id: 12,
				name: 'Executrix standard',
				toons: ['sun_fac\'s_geonosian_starfighter', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'gauntlet_starfighter', 'slave_i' ]
			},
			{
				id: 13,
				name: 'Chimaera bugs (without Hound\'s Tooth)',
				toons: ['sun_fac\'s_geonosian_starfighter', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'gauntlet_starfighter', 'slave_i']
			},
			{
				id: 14,
				name: 'Nightsisters without Asajj',
				toons: ['mother_talzin',  'nightsister_zombie', 'old_daka', 'nightsister_spirit', 'talia' ]
			},
			{
				id: 15,
				name: 'Sith Triumvirate without Dooku',
				toons: ['darth_traya', 'darth_sion', 'darth_nihilus', 'sith_empire_trooper', 'sith_assassin']
			},
			{
				id: 16,
				name: 'Test squad',
				toons: ['count_dooku', 'general_grievous', 'b2_super_battle_droid', 'nute_gunrey', 'b1_battle_droid']
			},
			{
				id: 17,
				name: 'Executrix without Hound\'s Tooth',
				toons: ['b-28_extinction-class_bomber', 'emperor\'s_shuttle', 'sith_fighter', 'tie_advanced_x1', 'xanadu_blood']
			},
			{
				id: 18,
				name: 'Chimaera with Hound\'s Tooth and bugs',
				toons: ['hound\'s_tooth', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'sun_fac\'s_geonosian_starfighter', 'gauntlet_starfighter', 'slave_i']
			},
			
			//---------------------------------------------------------------------------------------------------------------------------------LS SQUADS
			{
				id: 19, 
				name: 'LS test squad',
				toons: ['ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)',] //hands down best character
			},
			{
				id: 20, //Use once points are updated
				name: 'LS test squad',
				toons: ['ahsoka_tano','ahsoka_tano','ahsoka_tano','ahsoka_tano','ahsoka_tano',] 
			},
			
			


		],
		enemies: [
			'Mace Windu (instantly kills Jango Fett)',     																				//0  (counter Jango)                   
			"CT-5555 'Fives' (Enemies killed by clone troopers can't be revived)",    													//1 (counter Sion, NS, Wat Tambor)
			'Clone Commander (Speed of all characters equals 150)', 																	//2  (counter Darth Revan)           
			'Padawan Anakin (Strong aoe)',																								//3 (counter NS)                           
			'ARC Trooper',                               																				//4
			'CT-7567 "Rex" (Clones receive 15% tm when suffer critical hit)',															//5 (counter Geonosians, General Grievous)                               
			'Shaak-Ti',																													//6 (counter all, Sith Empire or Traya prefered)                                 
			'CC-2224 "Cody"',                          																					//7
			'Ki-Adi Mundi',                            																					//8
			'General Kenobi (Paired with Padme; GR allies gain protection up when are attacked out of turn, tm can\'t be removed',  	//9
			'Clone Trooper Medic',                                                                                                  	//10
			'Padme Amidala (Galactic republic allies gain protection up when are attacked out of turn; tm can\'t be removed)',     		//11 (counter Geonosians, General Grievous)                          
			'Grand Master Yoda (High tenacity, gain tm when resists debuffs)',                       									//12
		],
		platoons: [
				[
					'BB-8',
					'Hera Syndulla',
					'Garazeb "Zeb" Orrelios',
					'Chirrut Îmwe',
					'General Kenobi',
					'R2D2',
				],
				[
					"Sabine Wren",
					"Rose Tico",
					"Amilyn Holdo",
					"CUP",
					"Stormtooper Han",
					"Resistance Trooper"
				],
				[
					"Resistance Pilot",
					"Rey (Scavenger)",
					"C3PO",
					"Hera Syndulla",
					'Garazeb "Zeb" Orrelios',
					"Hermit Yoda"
				],
				[
					"Finn",
					"Baze Malbus",
					"Rey (Jedi Training)",
					"Visas Marr",
					"C3PO",
					"Amilyn Holdo"
				],
				[
					"R2D2",
					"Barriss Offee",
					"Barriss Offee",
					"Sabine Wren",
					"C3PO",
					"C3PO"
				],
				[
					"Finn",
					'Garazeb "Zeb" Orrelios',
					"Hermit Yoda",
					"Enfys Nest",
					"Ahsoka Tano",
					"C3PO"
				],
				[
					"Biggs Darklighter",
					"Shaak-Ti",
					"Visas Marr",
					"Commander Luke Skywalker",
					"Enfys Nest",
					"General Kenobi"
				],
				[
					"Finn",
					"R2D2",
					"Ahsoka Tano",
					"Rose Tico",
					"Biggs Darklighter",
					"Chirrut Îmwe"
				],
				[
					"Visas Marr",
					"Chewbacca",
					"Rey (Jedi Training)",
					"Luminara Unduli",
					"L3-37",
					"Ahsoka Tano"
				],
				[
					"C3PO",
					"Biggs Darklighter",
					"Hera Syndulla",
					"Visas Marr",
					"BB-8",
					"Commander Luke Skywalker"
				],
				[
					'Garazeb "Zeb" Orrelios',
					"Finn",
					"Amilyn Holdo",
					"R2D2",
					"Barriss Offee",
					"Sabine Wren"
				],
				[			
					"C3PO",
			        "L3-37",
					"Pao",
					"Luminara Unduli",
					"Ahsoka Tano (Fulcrum)",
					"Princess Leia",
				],
				[
					"CUP",
					"Stormtrooper Han",
					"Resistance Trooper",
					"Resistance Pilot",
					"Rey (Scavenger)",	
					"Commander Luke Skywalker"
				],
				[
					"Shaak-Ti",	
					"Hermit Yoda",
					"Finn",	
					"Rex",
					"Jawa Scavenger",
					"Cody",
					
				],
				[	
					"Echo",
					"Ugnaught",
					"Biggs Darklighter",
					"Princess Leia",	
					"R2D2",
					"Hera Syndulla"
				],
				/* 15 */
				[
					"Gar Saxon",
					"Darth Sidious", 	
					"Old Daka", 	
					"Talia", 	
					"Emperor Palpatine", 	
					"Grand Admiral Thrawn", 
				],
				[
					"Imperial Super Commando", 	"Darth Maul", 	"General Veers", 	"Mother Talzin", 	"General Veers", 	"TIE Fighter Pilot", 
				],
				["Bastila Shan (Fallen)", "Savage Opress", "Nightsister Zombie", "Old Daka", "Darth Nihilus", "Royal Guard", ],
				["Director Krennic", "General Veers", "Nightsister Initiate", "Savage Opress", "Darth Maul", "Bastila Shan (Fallen)", ],
				["TIE Fighter Pilot", "Sith Trooper", "Talia", "Nightsister Initiate", "Sith Trooper", "Grand Moff Tarkin", ],
				["Darth Nihilus", "HK-47", "Darth Traya", "Wampa", "Bastila Shan (Fallen)", "Captain Phasma", ],
				["Sith Assassin", "Jango Fett", "Jango Fett", "Director Krennic", "Imperial Super Commando", "First Order Stormtrooper", ],
				["Sith Trooper", "IG-86", "Bastila Shan (Fallen)", "IG-86", "Mother Talzin", "First Order TIE Pilot", ],
				["Bastila Shan (Fallen)", "Darth Traya", "Bossk", "Bossk", "Director Krennic", "First Order Officer", ],
				["Savage Opress", "Range Trooper", "Wampa", "General Veers", "TIE Fighter Pilot", "Kylo Ren", ],
				["URoRRuR'R'Rorror", "Bossk", "Captain Phasma", "Grand Moff Tarkin", "HK-47", "Darth Sidious", ],
				["Tusken Shaman", "Bastila Shan (Fallen)", "First Order Stormtrooper", "TIE Fighter Pilot", "Darth Revan", "Darth Maul", ],
				["Mother Talzin", "IG-86", "First Order TIE Pilot", "Royal Guard", "IG-86", "Savage Opress", ],
				["Mob Enforcer", "Jango Fett", "First Order Officer", "Director Krennic", "Wampa", "General Veers", ],
				["Grand Moff Tarkin", "Range Trooper", "Mother Talzin", "Bastila Shan (Fallen)", "Gar Saxon", "Sith Trooper", ],
/*30 */
				["Lando's Millennium Falcon", "Scimitar", "Ebon Hawk", "Cassian's U-wing", "Ebon Hawk", "Hound's Tooth", ],
				["Ebon Hawk", "Imperial TIE Fighter", "Gauntlet Starfighter", "Ebon Hawk", "Bistan's U-wing", "B-28 Extinction-class Bomber", ],
				["Imperial TIE Fighter", "Emperor's Command Shuttle", "Wedge Antilles's X-wing", "Geonosian Spy's Starfighter", "Wedge Antilles's X-wing", "Slave I", ],
				["Slave I", "Geonosian Spy's Starfighter", "Phantom II", "Poe Dameron's X-wing", "Biggs Darklighter's X-wing", "Xanadu Blood", ],
				["Hound's Tooth", "Slave I", "Imperial TIE Fighter", "Scimitar", "Ghost", "Gauntlet Starfighter", ],
				["First Order TIE FIghter", "Biggs Darklighter's X-wing", "Ahsoka Tano's Jedi Starfighter", "Wedge Antilles's X-wing", "Hound's Tooth", "Hound's Tooth", ],
				["Imperial TIE Fighter", "Hound's Tooth", "Jedi Consular's Starfighter", "Poe Dameron's X-wing", "IG-2000", "Phantom II", ],
				["TIE Reaper", "Geonosian Soldier's Starfighter", "Rex's ARC-170", "Plo Koon's Jedi Starfighter", "Rey's Millennium Falcon", "Kylo Ren's Command Shuttle", ],
				["TIE Advanced x1", "Sun Fac's Starfighter", "Clone Sergeant's ARC-170", "Hound's Tooth", "Slave I", "Emperor's Command Shuttle", ],
				["TIE Silencer", "Slave I", "Plo Koon's Jedi Starfighter", "TIE Silencer", "Xanadu Blood", "Cassian's U-wing", ],
				["Ahsoka Tano's Jedi Starfighter", "Cassian's U-wing", "Clone Sergeant's ARC-170", "Ahsoka Tano's Jedi Starfighter", "Slave I", "Clone Sergeant's ARC-170", ],
				["Clone Sergeant's ARC-170", "Bistan's U-wing", "Rex's ARC-170", "Emperor's Command Shuttle", "Phantom II", "Rex's ARC-170", ],
				["Plo Koon's Jedi Starfighter", "Wedge Antilles's X-wing", "Poe Dameron's X-wing", "Plo Koon's Jedi Starfighter", "Gauntlet Starfighter", "Ebon Hawk", ],
				["Jedi Consular's Starfighter", "Biggs Darklighter's X-wing", "Biggs Darklighter's X-wing", "Clone Sergeant's ARC-170", "Rex's ARC-170", "Plo Koon's Jedi Starfighter", ],
				["Emperor's Command Shuttle", "Ebon Hawk", "Wedge Antilles's X-wing", "Rex's ARC-170", "Umbaran Starfighter", "Umbaran Starfighter", ],
/*45 */
				["General Grievous", "Cad Bane", "Darth Sion", "Cad Bane", "Bastila Shan (Fallen)", "Bastila Shan (Fallen)", ],
				["Darth Maul", "Droideka", "Darth Nihilus", "Jango Fett", "Mob Enforcer", "Darth Nihilus", ],
				["Cad Bane", "Darth Sidious", "Sith Assassin", "Mother Talzin", "Aurra Sing", "Sith Marauder", ],
				["Zam Wesell", "Darth Revan", "Sith Marauder", "Bossk", "Bossk", "Mother Talzin", ],
				["Darth Revan", "General Grievous", "Sith Trooper", "Embo", "Imperial Probe Droid", "HK-47", ],
				["B1 Battle Droid", "Grand Moff Tarkin", "Droideka", "Captain Phasma", "Jango Fett", "First Order Executioner", ],
				["Stormtrooper", "Shoretrooper", "B1 Battle Droid", "Kylo Ren", "Zam Wesell", "First Order Officer", ],
				["General Grievous", "Stormtrooper", "Nute Gunray", "First Order Stormtrooper", "Bastila Shan (Fallen)", "First Order SF TIE Pilot", ],
				["Magmatrooper", "Imperial Probe Droid", "Darth Traya", "First Order TIE Pilot", "Boba Fett", "First Order TIE Pilot", ],
				["Imperial Probe Droid", "Droideka", "General Grievous", "Bastila Shan (Fallen)", "Greedo", "Darth Traya", ],
				["Mother Talzin", "Nightsister Acolyte", "Darth Revan", "Colonel Starck", "Jango Fett", "Nute Gunray", ],
				["Bossk", "Nightsister Zombie", "Jango Fett", "Range Trooper", "Darth Revan", "Darth Revan", ],
				["Darth Maul", "Nightsister Spirit", "First Order TIE Pilot", "Stormtrooper", "General Grievous", "Jango Fett", ],
				["Jango Fett", "Bossk", "Kylo Ren Unmasked", "Death Trooper", "Droideka", "Droideka", ],
				["Old Daka", "Old Daka", "First Order Stormtrooper", "General Grievous", "B1 Battle Droid", "B1 Battle Droid", ],
/*60*/
				["General Grievous", "Imperial Super Commando", "First Order Officer", "General Grievous", "Bastila Shan (Fallen)", "Darth Revan", ],
				["Death Trooper", "Darth Revan", "General Grievous", "Bastila Shan (Fallen)", "Canderous Ordo", "Gar Saxon", ],
				["Stormtrooper", "Jango Fett", "First Order Stormtrooper", "Darth Sidious", "Mother Talzin", "Jango Fett", ],
				["TIE Fighter Pilot", "Greedo", "Kylo Ren Unmasked", "Darth Traya", "Darth Sion", "Stormtrooper", ],
				["Darth Vader", "Bossk", "Mob Enforcer", "Jango Fett", "HK-47", "Range Trooper", ],
				["Mother Talzin", "TIE Fighter Pilot", "First Order Stormtrooper", "Mother Talzin", "Kylo Ren Unmasked", "Darth Sidious", ],
				["Darth Revan", "Darth Vader", "Kylo Ren", "Darth Maul", "First Order Stormtrooper", "Darth Traya", ],
				["Darth Traya", "Bastila Shan (Fallen)", "Kylo Ren Unmasked", "Kylo Ren Unmasked", "First Order TIE Pilot", "Tusken Raider", ],
				["Old Daka", "Shoretrooper", "Darth Sidious", "General Grievous", "Darth Revan", "Tusken Shaman", ],
				["Nightsister Acolyte", "Imperial Probe Droid", "Darth Revan", "Bossk", "Mob Enforcer", "URoRRuR'R'R", ],
				["Bastila Shan (Fallen)", "Nightsister Initiate", "Jango Fett", "Cad Bane", "Darth Traya", "General Grievous", ],
				["Nightsister Spirit", "Nightsister Spirit", "Bossk", "IG-86 Sentinel Droid", "Death Trooper", "Droideka", ],
				["Bossk", "Mother Talzin", "HK-47", "IG-100 MagnaGuard", "Shoretrooper", "B1 Battle Droid", ],
				["Mother Talzin", "General Grievous", "Bastila Shan (Fallen)", "Darth Revan", "Stormtrooper", "Bastila Shan (Fallen)", ],
				["Darth Traya", "Savage Opress", "Dengar", "B2 Super Battle Droid", "General Grievous", "Jango Fett", ],
/*75*/
				["Hound's Tooth", "Cassian's U-wing", "Hound's Tooth", "Lando's Millennium Falcon", "Han's Millennium Falcon", "Ebon Hawk", ],
				["Gauntlet Starfighter", "Hound's Tooth", "IG-2000", "Biggs Darklighter's X-Wing", "Imperial TIE Fighter", "Bistan's U-wing", ],
				["Wedge Antilles's X-wing", "Han's Millennium Falcon", "Ebon Hawk", "Imperial TIE Fighter", "TIE Advanced x1", "Wedge Antilles's X-wing", ],
				["Ebon Hawk", "Emperor's Shuttle", "Xanadu Blood", "Emperor's Shuttle", "Ebon Hawk", "Biggs Darklighter's X-wing", ],
				["Imperial TIE Fighter", "Scimitar", "Gauntlet Starfighter", "Hound's Tooth", "Slave I", "Hound's Tooth", ],
				["Clone Sergeant's ARC-170", "Wedge Antilles's X-wing", "Clone Sergeant's ARC-170", "Hound's Tooth", "Biggs Darklighter's X-wing", "Sith Fighter", ],
				["Rex's ARC-170", "Poe Dameron's X-wing", "Rex's ARC-170", "IG-2000", "Rey's Millennium Falcon", "B-28 Extinction-class Bomber", ],
				["Ebon Hawk", "Han's Millennium Falcon", "Poe Dameron's X-wing", "Rey's Millennium Falcon", "Anakin's Jedi Starfighter", "Ebon Hawk", ],
				["Plo Koon's Jedi Starfighter", "Hound's Tooth", "Biggs Darklighter's X-wing", "Slave I", "Han's Millennium Falcon", "Xanadu Blood", ],
				["Anakin's Jedi Starfighter", "Emperor's Shuttle", "Ebon Hawk", "Xanadu Blood", "Emperor's Shuttle", "IG-2000", ],
				["First Order TIE FIghter", "Anakin's Jedi Starfighter", "Ahsoka Tano's Jedi Starfighter", "Han's Millennium Falcon", "Hound's Tooth", "Slave I", ],
				["Imperial TIE Fighter", "Bistan's U-wing", "Jedi Consular's Starfighter", "Anakin's Jedi Starfighter", "Anakin's Jedi Starfighter", "Anakin's Jedi Starfighter", ],
				["Han's Millennium Falcon", "Wedge Antilles's X-wing", "Han's Millennium Falcon", "Ebon Hawk", "Kylo Ren's Command Shuttle", "Gauntlet Starfighter", ],
				["TIE Advanced x1", "Biggs Darklighter's X-wing", "Clone Sergeant's ARC-170", "Jedi Consular's Starfighter", "Gauntlet Starfighter", "Ebon Hawk", ],
				["Emperor's Shuttle", "Hound's Tooth", "Plo Koon's Jedi Starfighter", "Rex's ARC-170", "Emperor's Shuttle", "Umbaran Starfighter", ],
/*90*/
				["Captain Phasma", "Asajj Ventress", "Bossk", "Bastila Shan (Fallen)", "Darth Traya", "Bastila Shan (Fallen)", ],
				["Darth Malak", "Range Trooper", "Emperor Palpatine", "Canderous Ordo", "Jango Fett", "Canderous Ordo", ],
				["Bossk", "Bastila Shan (Fallen)", "Grand Admiral Thrawn", "HK-47", "Sith Marauder", "Sith Marauder", ],
				["First Order Executioner", "Darth Revan", "Range Trooper", "Bossk", "Sith Trooper", "Sith Trooper", ],
				["First Order SF TIE Pilot", "Darth Malak", "Darth Revan", "Darth Revan", "Darth Sion", "Mother Talzin", ],
				["Mother Talzin", "Mother Talzin", "Mother Talzin", "Jango Fett", "Captain Phasma", "First Order TIE Pilot", ],
				["Talia", "Emperor Palpatine", "Death Trooper", "Shoretrooper", "First Order Officer", "Kylo Ren Unmasked", ],
				["Darth Revan", "Jango Fett", "Shoretrooper", "Grand Admiral Thrawn", "Darth Revan", "Darth Revan", ],
				["Savage Opress", "Grand Admiral Thrawn", "Stormtrooper", "Wampa", "Bossk", "First Order Executioner", ],
				["Old Daka", "Imperial Probe Droid", "Grand Moff Tarkin", "Royal Guard", "First Order Stormtrooper", "First Order Officer", ],
				["Emperor Palpatine", "Nightsister Initiate", "TIE Fighter Pilot", "Darth Malak", "General Veers", "Embo", ],
				["TIE Fighter Pilot", "Mother Talzin", "Wampa", "Old Daka", "Darth Malak", "Jango Fett", ],
				["Aurra Sing", "Bossk", "Colonel Starck", "Nightsister Spirit", "Bossk", "Darth Malak", ],
				["Director Krennic", "Savage Opress", "Shoretrooper", "Mother Talzin", "Wampa", "Darth Revan", ],
				["Death Trooper", "Old Daka", "Imperial Probe Droid", "Nightsister Acolyte", "Snowtrooper", "Asajj Ventress", ],
/*105*/
				["Grand Moff Tarkin", "Grand Moff Tarkin", "Talia", "Embo", "Darth Malak", "Tusken Shaman", ],
				["Darth Revan", "Emperor Palpatine", "Mother Talzin", "Aurra Sing", "Aurra Sing", "URoRRuR'R'R", ],
				["Emperor Palpatine", "Magma Trooper", "Asajj Ventress", "Darth Revan", "Jango Fett", "Bossk", ],
				["Grand Admiral Thrawn", "Bossk", "Old Daka", "Nute Gunray", "Cad Bane", "Tusken Raider", ],
				["Wampa", "Range Trooper", "Jango Fett", "Shoretrooper", "Bossk", "Mob Enforcer", ],
				["General Veers", "Captain Phasma", "Tusken Raider", "General Veers", "Nightsister Acolyte", "Sith Marauder", ],
				["Snowtrooper", "First Order Officer", "Stormtrooper", "First Order Officer", "Nightsister Zombie", "Darth Revan", ],
				["Darth Revan", "Darth Revan", "Bossk", "First Order Stormtrooper", "Bossk", "URoRRuR'R'R", ],
				["Emperor Palpatine", "First Order Stormtrooper", "Snowtrooper", "First Order TIE Pilot", "Grand Admiral Thrawn", "Bossk", ],
				["Grand Moff Tarkin", "IG-86 Sentinel Droid", "Magmatrooper", "Kylo Ren Unmasked", "Range Trooper", "Shoretrooper", ],
				["General Veers", "Bossk", "Darth Sion", "Wampa", "Tusken Raider", "Grand Admiral Thrawn", ],
				["Kylo Ren (Unmasked)", "Jango Fett", "Darth Traya", "Darth Malak", "Range Trooper", "IG-86 Sentinel Droid", ],
				["Snowtrooper", "Aurra Sing", "Darth Nihilus", "Tusken Raider", "URoRRuR'R'R", "Darth Malak", ],
				["TIE Fighter Pilot", "Embo", "Sith Assassin", "Tusken Shaman", "TIE Fighter Pilot", "Darth Revan", ],
				["Imperial Super Commando", "Dengar", "Sith Marauder", "Grand Admiral Thrawn", "Darth Revan", "IG-88", ],
/*120*/
				["Emperor's Shuttle", "Ebon Hawk", "Hound's Tooth", "Emperor's Shuttle", "Slave I", "Hound's Tooth", ],
				["Bistan's U-wing", "Anakin's Jedi Starfighter", "Imperial TIE Fighter", "TIE Silencer", "Anakin's Jedi Starfighter", "IG-2000", ],
				["Wedge Antilles's X-wing", "Biggs Darklighter's X-wing", "TIE Advanced x1", "First Order TIE FIghter", "Gauntlet Starfighter", "Slave I", ],
				["Biggs Darklighter's X-wing", "Hound's Tooth", "Ebon Hawk", "Hound's Tooth", "Hound's Tooth", "Xanadu Blood", ],
				["Hound's Tooth", "Clone Sergeant's ARC-170", "Slave I", "TIE Reaper", "Umbaran Starfighter", "Gauntlet Starfighter", ],
				["Ahsoka Tano's Jedi Starfighter", "Han's Millennium Falcon", "Wedge Antilles's X-wing", "Ahsoka Tano's Jedi Starfighter", "Geonosian Spy's Starfighter", "Emperor's Shuttle", ],
				["Emperor's Shuttle", "Anakin's Jedi Starfighter", "Hound's Tooth", "Jedi Consular's Starfighter", "Geonosian Soldier's Starfighter", "Hound's Tooth", ],
				["Plo Koon's Jedi Starfighter", "Hound's Tooth", "Han's Millennium Falcon", "Ebon Hawk", "Sun Fac's Starfighter", "Ebon Hawk", ],
				["Jedi Consular's Starfighter", "Ebon Hawk", "Anakin's Jedi Starfighter", "Emperor's Shuttle", "Hound's Tooth", "Biggs Darklighter's X-wing", ],
				["Hound's Tooth", "Slave I", "TIE Silencer", "Plo Koon's Jedi Starfighter", "Ebon Hawk", "Wedge Antilles's X-wing", ],
				["TIE Reaper", "Umbaran Starfighter", "Han's Millennium Falcon", "Hound's Tooth", "B-28 Extinction-class Bomber", "Emperor's Shuttle", ],
				["Imperial TIE Fighter", "Emperor's Shuttle", "Rey's Millennium Falcon", "Rey's Millennium Falcon", "Xanadu Blood", "Ebon Hawk", ],
				["Emperor's Shuttle", "Ebon Hawk", "Lando's Millennium Falcon", "Han's Millennium Falcon", "IG-2000", "Kylo Ren's Command Shuttle", ],
				["Ebon Hawk", "Ahsoka Tano's Jedi Starfighter", "Anakin's Jedi Starfighter", "Ebon Hawk", "Sith Fighter", "Hound's Tooth", ],
				["TIE Advanced x1", "Hound's Tooth", "Hound's Tooth", "Lando's Millennium Falcon", "Scimitar", "Rey's Millennium Falcon", ],
/*135*/
				["Captain Phasma", "Emperor Palpatine", "Jango Fett", "Darth Sion", "Mother Talzin", "Bastila Shan (Fallen)", ],
				["Bossk", "Darth Malak", "Bossk", "Darth Traya", "Dengar", "Canderous Ordo", ],
				["First Order Stormtrooper", "Death Trooper", "Darth Malak", "Darth Nihilus", "Boba Fett", "Darth Nihilus", ],
				["First Order Executioner", "Director Krennic", "Darth Sidious", "Darth Revan", "Wampa", "Sith Trooper", ],
				["First Order SF TIE Pilot", "Sith Trooper", "Darth Revan", "Sith Marauder", "Bossk", "Darth Sion", ],
				["Darth Revan", "Mother Talzin", "Jango Fett", "Dengar", "Darth Traya", "Gamorrean Guard", ],
				["Bossk", "Death Trooper", "Zam Wesell", "Darth Malak", "Darth Malak", "Gar Saxon", ],
				["Zam Wesell", "Grand Admiral Thrawn", "IG-88", "Aurra Sing", "Canderous Ordo", "Grand Admiral Thrawn", ],
				["Savage Opress", "Wampa", "Bossk", "Bossk", "Darth Revan", "Wampa", ],
				["Old Daka", "Darth Revan", "IG-86 Sentinel Droid", "Boba Fett", "Darth Sion", "Snowtrooper", ],
				["First Order SF TIE Pilot", "Nightsister Initiate", "Darth Revan", "Darth Revan", "Darth Revan", "Darth Revan", ],
				["First Order Executioner", "Nightsister Spirit", "Mother Talzin", "Nightsister Spirit", "Bossk", "Darth Malak", ],
				["Darth Malak", "Bossk", "IG-86 Sentinel Droid", "Nightsister Zombie", "Nightsister Spirit", "Jango Fett", ],
				["First Order TIE Pilot", "Savage Opress", "Jango Fett", "Mother Talzin", "Savage Opress", "Mother Talzin", ],
				["First Order Stormtrooper", "Old Daka", "Nightsister Spirit", "Nightsister Acolyte", "URoRRuR'R'R", "Bossk", ],
/*150*/
				["Grand Admiral Thrawn", "Grand Moff Tarkin", "Imperial Super Commando", "IG-88", "Wampa", "Darth Revan", ],
				["Emperor Palpatine", "Emperor Palpatine", "Emperor Palpatine", "Bossk", "Dengar", "Jango Fett", ],
				["Mob Enforcer", "TIE Fighter Pilot", "Grand Admiral Thrawn", "Gammorean Guard", "Bossk", "Mother Talzin", ],
				["Death Trooper", "Stormtrooper", "Range Trooper", "Mob Enforcer", "Aurra Sing", "Darth Malak", ],
				["Magmatrooper", "Bossk", "Darth Malak", "Tusken Raider", "Darth Revan", "Darth Maul", ],
				["Darth Revan", "Mother Talzin", "Director Krennic", "Bossk", "Darth Malak", "Bastila Shan (Fallen)", ],
				["Darth Malak", "First Order Officer", "Death Trooper", "Darth Sion", "URoRRuR'R'R", "Canderous Ordo", ],
				["Darth Sidious", "First Order SF TIE Pilot", "Grand Admiral Thrawn", "Wampa", "Tusken Raider", "HK-47", ],
				["Kylo Ren (Unmasked)", "First Order TIE Pilot", "Mob Enforcer", "HK-47", "Wampa", "Sith Trooper", ],
				["Wampa", "First Order Executioner", "Bossk", "Sith Assassin", "Gar Saxon", "Darth Traya", ],
				["Emperor Palpatine", "Tusken Shaman", "Darth Revan", "Kylo Ren Unmasked", "Magmatrooper", "Darth Malak", ],
				["Darth Vader", "IG-86 Sentinel Droid", "Greedo", "First Order Officer", "Bossk", "Wampa", ],
				["Grand Admiral Thrawn", "Darth Revan", "Death Trooper", "Darth Revan", "Death Trooper", "Darth Revan", ],
				["Mother Talzin", "Bossk", "TIE Fighter Pilot", "Darth Traya", "TIE Fighter Pilot", "Jango Fett", ],
				["Death Trooper", "Darth Malak", "Range Trooper", "Darth Malak", "Imperial Super Commando", "Mother Talzin", ],
/*165*/
		],
		missions: [{
			id: 0,
			name: 'c1',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 511 500',
				'Wave 2: 867 000',
				'Wave 3: 1 242 500',
				'Wave 4: 1 837 500'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},	{
			id: 1,
			name: 'c2',
			type: 'req',
			position: 'right',
			rewards: [
				'Wave 1: 2,750,000'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			}, {
			id: 2,
			name: 'c3',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 511 500',
				'Wave 2: 867 000',
				'Wave 3: 1 242 500',
				'Wave 4: 1 837 500'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 3,
			name: 'c4',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 867 000',
				'Wave 2: 1 837 500',
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 4,
			name: 'c5',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 1 800 000',
				],
				preferredSquads: [20],
			}, 
			{
			id: 5,
			name: 'c6',
			type: 'special',
			position: 'right',
			rewards: [
				'32 GET2',
				],
				preferredSquads: [20],
			}, 
			{
			id: 6,
			name: 'c7',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 464 000',
				'Wave 2: 775 500',
				'Wave 3: 1 105 000',
				'Wave 4: 1 627 500'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{id: 7, // GR Jedi mission
			name: 'c8',
			type: 'req',
			position: 'right',
			rewards: [
				'Wave 1: 603 200',
				'Wave 2: 1 008 150',
				'Wave 3: 1 436 500',
				'Wave 4: 2 115 750'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 8,
			name: 'c9',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 464 000',
				'Wave 2: 775 500',
				'Wave 3: 1 105 000',
				'Wave 4: 1 627 500'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 9,
			name: 'c10',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 464 000',
				'Wave 2: 775 500',
				'Wave 3: 1 105 000',
				'Wave 4: 1 627 500'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 10,
			name: 'c11',
			type: 'KAM',
			position: 'right',
			rewards: [
				'1 whole KAM Shard'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 11,
			name: 'c12',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 900,000',
				],
			preferredSquads: [20],
			},
			{
			id: 12,
			name: 'c13',
			type: 'special',
			position: 'left',
			rewards: [
				'21 GET2',
				],
			preferredSquads: [20],
			},
			{id: 13,
			name: 'c14',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 434 000',
				'Wave 2: 704 000',
				'Wave 3: 1 014 750',
				'Wave 4: 1 377 000'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 14,
			name: 'c15',
			type: 'req',
			position: 'left',
			rewards: [
				'Wave 1: 434 000',
				'Wave 2: 704 000',
				'Wave 3: 1 014 750',
				'Wave 4: 1 377 000'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 15,
			name: 'c16',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 434 000',
				'Wave 2: 704 000',
				'Wave 3: 1 014 750',
				'Wave 4: 1 377 000'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 16,
			name: 'c17',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 434 000',
				'Wave 2: 704 000',
				'Wave 3: 1 014 750',
				'Wave 4: 1 377 000'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{//LS New mission  Anakin and snips
		    id: 38,
		    name: 'ls1',
		    type: 'special',
		    position: 'left',
		    rewards: [
				'21 GET2'
				],
			preferredSquads: [20],
			dangerousEnemies: []
		    },
		    {
		    id: 41,
		    name: 'ls2',
		    type: 'special',
		    position: 'right',
		    rewards: [
				'20 GET2',
				],
			preferredSquads: [20],
			dangerousEnemies: []
		    },
		    {
		    id: 42,
		    name: 'ls3',
		    type: 'usual',
		    position: 'right',
		    rewards: [
				'Wave 1: 511 500',
				'Wave 2: 867 000',
				'Wave 3: 1 242 500',
				'Wave 4: 1 837 500'
				],
			preferredSquads: [20],
			dangerousEnemies: []
		    },
			{
			id: 17,
			name: 'c18',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 523 900',
				],
			preferredSquads: [20],	
			},
			{
			id: 18,
			name: 'c19',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 403 000',
				'Wave 2: 573 500',
				'Wave 3: 840 000',
				'Wave 4: 1 155 000',
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{id: 19,//----------------JEDI  special mission
			name: 'c20',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 403 000',
				'Wave 2: 573 500',
				'Wave 3: 840 000',
				'Wave 4: 1 155 000',
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 20,//   -----------------Galactic Republic
			name: 'c21',
			type: 'special',
			position: 'left',
			rewards: [
				'15 GET2',
				],
				dangerousEnemies: [],
				preferredSquads: [20]
			},
			{
			id: 21,
			name: 'c22',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 403 000',
				'Wave 2: 573 500',
				'Wave 3: 840 000',
				'Wave 4: 1 155 000',
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 22, //---------Jedi mission
			name: 'c23',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 523 900',
				'Wave 2: 745 550',
				'Wave 3: 1 092 000',
				'Wave 4: 1 501 500',
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 23,
			name: 's1',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 664 950',
				'Wave 2: 1 127 100',
				'Wave 3: 1 615 250',
				'Wave 4: 2 388 750'
				],
			preferredSquads: [20],
			dangerousEnemies: []
			},
			{
			id: 24,
			name: 's2',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 464 000',
				'Wave 2: 775 500',
				'Wave 3: 1 105 000',
				'Wave 4: 1 627 500'
				],
				preferredSquads: [20],
			},
			{
			id: 25,
			name: 's3',
			type: 'usual',
		    position: 'left',
		    rewards: [
				'Wave 1: 564 200',
				'Wave 2: 915 200',
				'Wave 3: 1 319 175',
				'Wave 4: 1 790 100'
				],
			preferredSquads: [20],
			dangerousEnemies: []
		    
			},
			/*{
			id: 26,
			name: 's4',
			type: 'special',
			position: 'left',
			rewards: [
				'40 GET2',
				],
			dangerousEnemies: []
			},
			* */
			/* Platoons */
			{id: 27,
			name: 't1',
			type: 'platoon',
			position: 'right',
			requiredToons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
			},
			{id: 28, name: 'b1', type: 'platoon', position: 'right', requiredToons: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]},
			{id: 29, name: 't2', type: 'platoon', position: 'right', requiredToons: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]},
			{id: 30, name: 'm2', type: 'platoon', position: 'right', requiredToons: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]},
			{id: 31, name: 'b2', type: 'platoon', position: 'right', requiredToons: [60, 61,62,63,64,65,66,67,68,69,70,71,72,73,74]},
			{id: 32, name: 't3', type: 'platoon', position: 'left', requiredToons: [75, 76,77,78,79,80,81,82,83,84,85,86,87,88,89]},
			{id: 40, name: 'lsp1', type: 'platoon', position: 'right', requiredToons: [77,77,77,77,77,77,77,77,77,77,77,77,77,77,77]},
			{id: 33, name: 'm3', type: 'platoon', position: 'left', requiredToons: [90,91,92,93,94,95,96,97,98,99,100,101,102,103,104]},
			{id: 34, name: 'b3', type: 'platoon', position: 'left', requiredToons: [105,106,107,108,109,110,111,112,113,114,115,116,117,118,119]},
			{id: 35, name: 't4', type: 'platoon', position: 'left', requiredToons: [120,121,122,123,124,125,126,127,128,129,130,131,132,133,134]},
			{id: 36, name: 'm4', type: 'platoon', position: 'left', requiredToons: [135,136,137,138,139,140,141,142,143,144,145,146,147,148,149]},
			{id: 37, name: 'b4', type: 'platoon', position: 'left', requiredToons: [150,151,152,153,154,155,156,157,158,159,160,161,162,163,164]}
		],
		selectedMission: '',
		seen: false,
		hide: function() {
			this.seen = false;
		}
	}
	},
	template: '#mission',
	methods: {
		mq () {
			this.isMobile = window.matchMedia('(max-width: 600px)').matches;
		},
		
	}
})

let app = new Vue({
	el: '#app',
	data: {
		isVisible: false
	},
});

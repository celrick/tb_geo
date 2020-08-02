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
			'Clone Trooper Medic',                          	                                                                        //10
			'Padme Amidala (Galactic republic allies gain protection up when are attacked out of turn; tm can\'t be removed)',     		//11 (counter Geonosians, General Grievous)                          
			'Grand Master Yoda (High tenacity, gain tm when resists debuffs)',                       									//12
		],
		platoons: [
		['General Veers', '6', 'Mother Talzin', '5', 'Bossk', '5', 'IG-86', '4', 'Darth Maul', '4', 'Savage Opress', '4', 'Sith Trooper', '4', 'Old Daka', '3', 'Nightsister Acolyte', '3', 'Nightsister Initiate', '3', 'Talia', '3', 'Darth Sidious', '3', 'Wampa', '3', 'Jango Fett', '3', 'Bastila Shan (Fallen)', '2', 'Darth Traya', '2', 'Captain Phasma', '2', 'First Order Stormtrooper', '2', 'First Order TIE Pilot', '2', 'First Order Officer', '2', 'Kylo Ren', '2', 'HK-47', '2', 'Range Trooper', '2', 'Gar Saxon', '2', 'Royal Guard', '2', 'TIE Fighter Pilot', '2', 'Sith Assassin', '2', 'IG-88', '1', 'Death Trooper', '1', 'Director Krennic', '1', 'Darth Nihilus', '1', 'Grand Admiral Thrawn', '1', 'Emperor Palpatine', '1', 'Darth Revan', '1', 'Tusken Raider', '1', 'Tusken Shaman', '1', 'Asajj Ventriss', '1', "URoRRuR'R'R", '1'
],//0
        ['Bastila Shan (Fallen)', '7', 'General Veers', '5', 'Director Krennic', '4', 'TIE Fighter Pilot', '4', 'Sith Trooper', '4', 'Savage Opress', '4', 'Mother Talzin', '4', 'IG-86', '4', 'Grand Moff Tarkin', '3', 'Darth Maul', '3', 'Jango Fett', '3', 'Bossk', '3', 'Wampa', '3', 'Gar Saxon', '2', 'Imperial Super Commando', '2', 'Darth Nihilus', '2', 'Darth Sidious', '2', 'HK-47', '2', 'Darth Traya', '2', 'Range Trooper', '2', 'Old Daka', '2', 'Nightsister Initiate', '2', 'Talia', '2', 'Captain Phasma', '2', 'First Order Stormtrooper', '2', 'First Order TIE Pilot', '2', 'First Order Officer', '2', 'Royal Guard', '2', 'Sith Assassin', '1', "URoRRuR'R'Rorror", '1', 'Tusken Shaman', '1', 'Mob Enforcer', '1', 'Nightsister Zombie', '1', 'Emperor Palpatine', '1', 'Darth Revan', '1', 'Grand Admiral Thrawn', '1', 'Kylo Ren', '1'
],//1
        ['Ebon Hawk', '6', 'Slave I', '6', "Hound's Tooth", '6', "Clone Sergeant's ARC-170", '5', "Plo Koon's Jedi Starfighter", '5', "Wedge Antilles's X-wing", '5', "Rex's ARC-170", '5', 'Imperial TIE Fighter', '4', "Emperor's Command Shuttle", '4', "Biggs Darklighter's X-wing", '4', "Ahsoka Tano's Jedi Starfighter", '3', "Cassian's U-wing", '3', 'Gauntlet Starfighter', '3', 'Phantom II', '3', "Poe Dameron's X-wing", '3', 'TIE Silencer', '2', "Jedi Consular's Starfighter", '2', 'Scimitar', '2', "Geonosian Spy's Starfighter", '2', "Bistan's U-wing", '2', 'Xanadu Blood', '2', 'Umbaran Starfighter', '2', "Lando's Millennium Falcon", '1', 'First Order TIE FIghter', '1', 'TIE Reaper', '1', 'TIE Advanced x1', '1', "Geonosian Soldier's Starfighter", '1', "Sun Fac's Starfighter", '1', 'Ghost', '1', 'IG-2000', '1', "Rey's Millennium Falcon", '1', 'B-28 Extinction-class Bomber', '1', "Kylo Ren's Command Shuttle", '1'
],//2
        ['General Grievous', '6', 'Jango Fett', '6', 'Darth Revan', '5', 'Droideka', '5', 'B1 Battle Droid', '4', 'Bossk', '4', 'Bastila Shan (Fallen)', '4', 'Cad Bane', '3', 'Stormtrooper', '3', 'Imperial Probe Droid', '3', 'Mother Talzin', '3', 'First Order TIE Pilot', '3', 'Darth Maul', '2', 'Zam Wesell', '2', 'Old Daka', '2', 'Darth Nihilus', '2', 'Sith Marauder', '2', 'Nute Gunray', '2', 'Darth Traya', '2', 'First Order Stormtrooper', '2', 'Magmatrooper', '1', 'Darth Sidious', '1', 'Grand Moff Tarkin', '1', 'Shoretrooper', '1', 'Nightsister Acolyte', '1', 'Nightsister Zombie', '1', 'Nightsister Spirit', '1', 'Darth Sion', '1', 'Sith Assassin', '1', 'Sith Trooper', '1', 'Kylo Ren Unmasked', '1', 'Embo', '1', 'Captain Phasma', '1', 'Kylo Ren', '1', 'Colonel Starck', '1', 'Range Trooper', '1', 'Death Trooper', '1', 'Mob Enforcer', '1', 'Aurra Sing', '1', 'Boba Fett', '1', 'Greedo', '1', 'HK-47', '1', 'First Order Executioner', '1', 'First Order Officer', '1', 'First Order SF TIE Pilot', '1'
],//3
        ['General Grievous', '7', 'Darth Revan', '6', 'Bastila Shan (Fallen)', '6', 'Mother Talzin', '5', 'Darth Traya', '5', 'Jango Fett', '5', 'Bossk', '4', 'Kylo Ren Unmasked', '4', 'Stormtrooper', '3', 'First Order Stormtrooper', '3', 'Darth Sidious', '3', 'Death Trooper', '2', 'TIE Fighter Pilot', '2', 'Darth Vader', '2', 'Nightsister Spirit', '2', 'Shoretrooper', '2', 'Mob Enforcer', '2', 'HK-47', '2', 'Old Daka', '1', 'Nightsister Acolyte', '1', 'Imperial Super Commando', '1', 'Greedo', '1', 'Imperial Probe Droid', '1', 'Nightsister Initiate', '1', 'Savage Opress', '1', 'First Order Officer', '1', 'Kylo Ren', '1', 'Dengar', '1', 'Darth Maul', '1', 'Cad Bane', '1', 'IG-86 Sentinel Droid', '1', 'IG-100 MagnaGuard', '1', 'B2 Super Battle Droid', '1', 'Canderous Ordo', '1', 'Darth Sion', '1', 'First Order TIE Pilot', '1', 'Gar Saxon', '1', 'Range Trooper', '1', 'Tusken Raider', '1', 'Tusken Shaman', '1', "URoRRuR'R'R", '1', 'Droideka', '1', 'B1 Battle Droid', '1'
],//4
        ["Hound's Tooth", '9', 'Ebon Hawk', '9', "Han's Millennium Falcon", '7', "Anakin's Jedi Starfighter", '6', "Emperor's Shuttle", '6', 'Gauntlet Starfighter', '4', "Wedge Antilles's X-wing", '4', 'Imperial TIE Fighter', '4', "Biggs Darklighter's X-wing", '4', "Clone Sergeant's ARC-170", '3', "Rex's ARC-'170", '3', 'IG-2000', '3', 'Xanadu Blood', '3', 'Slave I', '3', "Plo Koon's Jedi Starfighter", '2', 'TIE Advanced x1', '2', "Poe Dameron's X-wing", '2', "Bistan's U-wing", '2', "Jedi Consular's Starfighter", '2', "Rey's Millennium Falcon", '2', 'First Order TIE FIghter', '1', "Cassian's U-wing", '1', 'Scimitar', '1', "Ahsoka Tano's Jedi Starfighter", '1', "Lando's Millennium Falcon", '1', "Biggs Darklighter's X-Wing", '1', "Kylo Ren's Command Shuttle", '1', 'Sith Fighter', '1', 'B-28 Extinction-class Bomber', '1', 'Umbaran Starfighter', '1'
],//5
        ['Darth Revan', '7', 'Bossk', '6', 'Mother Talzin', '6', 'Darth Malak', '5', 'Jango Fett', '4', 'Old Daka', '3', 'Emperor Palpatine', '3', 'Grand Admiral Thrawn', '3', 'Shoretrooper', '3', 'Wampa', '3', 'Captain Phasma', '2', 'First Order Executioner', '2', 'Savage Opress', '2', 'TIE Fighter Pilot', '2', 'Death Trooper', '2', 'Asajj Ventress', '2', 'Range Trooper', '2', 'Imperial Probe Droid', '2', 'Bastila Shan (Fallen)', '2', 'Canderous Ordo', '2', 'Sith Marauder', '2', 'Sith Trooper', '2', 'First Order Officer', '2', 'First Order SF TIE Pilot', '1', 'Talia', '1', 'Aurra Sing', '1', 'Director Krennic', '1', 'Bastila Shan (Fallen)', '1', 'Nightsister Initiate', '1', 'Stormtrooper', '1', 'Grand Moff Tarkin', '1', 'Colonel Starck', '1', 'HK-47', '1', 'Royal Guard', '1', 'Nightsister Spirit', '1', 'Nightsister Acolyte', '1', 'Darth Traya', '1', 'Darth Sion', '1', 'First Order Stormtrooper', '1', 'General Veers', '1', 'Snowtrooper', '1', 'First Order TIE Pilot', '1', 'Kylo Ren Unmasked', '1', 'Embo', '1'
],//6
        ['Darth Revan', '7', 'Bossk', '7', 'Grand Admiral Thrawn', '4', 'Tusken Raider', '4', 'Grand Moff Tarkin', '3', 'Emperor Palpatine', '3', 'General Veers', '3', 'Snowtrooper', '3', 'Range Trooper', '3', 'Jango Fett', '3', 'Aurra Sing', '3', 'Darth Malak', '3', "URoRRuR'R'R", '3', 'Wampa', '2', 'TIE Fighter Pilot', '2', 'First Order Officer', '2', 'First Order Stormtrooper', '2', 'IG-86 Sentinel Droid', '2', 'Embo', '2', 'Sith Marauder', '2', 'Shoretrooper', '2', 'Tusken Shaman', '2', 'Kylo Ren (Unmasked)', '1', 'Imperial Super Commando', '1', 'Magma Trooper', '1', 'Captain Phasma', '1', 'Dengar', '1', 'Talia', '1', 'Mother Talzin', '1', 'Asajj Ventress', '1', 'Old Daka', '1', 'Stormtrooper', '1', 'Magmatrooper', '1', 'Darth Sion', '1', 'Darth Traya', '1', 'Darth Nihilus', '1', 'Sith Assassin', '1', 'Nute Gunray', '1', 'First Order TIE Pilot', '1', 'Kylo Ren Unmasked', '1', 'Cad Bane', '1', 'Nightsister Acolyte', '1', 'Nightsister Zombie', '1', 'Mob Enforcer', '1', 'IG-88', '1'
],//7
        ["Hound's Tooth", '15', 'Ebon Hawk', '10', "Emperor's Shuttle", '8', "Anakin's Jedi Starfighter", '5', "Han's Millennium Falcon", '4', 'Slave I', '4', "Wedge Antilles's X-wing", '3', "Biggs Darklighter's X-wing", '3', "Ahsoka Tano's Jedi Starfighter", '3', "Rey's Millennium Falcon", '3', "Plo Koon's Jedi Starfighter", '2', "Jedi Consular's Starfighter", '2', 'TIE Reaper', '2', 'Imperial TIE Fighter', '2', 'TIE Advanced x1', '2', 'Umbaran Starfighter', '2', 'TIE Silencer', '2', "Lando's Millennium Falcon", '2', 'Gauntlet Starfighter', '2', 'Xanadu Blood', '2', 'IG-2000', '2', "Bistan's U-wing", '1', "Clone Sergeant's ARC-'1''7'0", '1', 'First Order TIE FIghter', '1', "Geonosian Spy's Starfighter", '1', "Geonosian Soldier's Starfighter", '1', "Sun Fac's Starfighter", '1', 'B-28 Extinction-class Bomber', '1', 'Sith Fighter', '1', 'Scimitar', '1', "Kylo Ren's Command Shuttle", '1'
],//8
        ['Bossk', '9', 'Darth Revan', '9', 'Darth Malak', '6', 'Mother Talzin', '5', 'Nightsister Spirit', '4', 'Jango Fett', '4', 'Savage Opress', '3', 'Wampa', '3', 'Darth Sion', '3', 'First Order Stormtrooper', '2', 'First Order Executioner', '2', 'First Order SF TIE Pilot', '2', 'Zam Wesell', '2', 'Old Daka', '2', 'Death Trooper', '2', 'Sith Trooper', '2', 'Grand Admiral Thrawn', '2', 'IG-86 Sentinel Droid', '2', 'Darth Traya', '2', 'Darth Nihilus', '2', 'Dengar', '2', 'Boba Fett', '2', 'Canderous Ordo', '2', 'Captain Phasma', '1', 'First Order TIE Pilot', '1', 'Emperor Palpatine', '1', 'Director Krennic', '1', 'Nightsister Initiate', '1', 'Darth Sidious', '1', 'IG-88', '1', 'Sith Marauder', '1', 'Aurra Sing', '1', 'Nightsister Zombie', '1', 'Nightsister Acolyte', '1', "URoRRuR'R'R", '1', 'Bastila Shan (Fallen)', '1', 'Gamorrean Guard', '1', 'Gar Saxon', '1', 'Snowtrooper', '1'
],//9
        ['Darth Revan', '7', 'Darth Malak', '7', 'Bossk', '7', 'Death Trooper', '5', 'Wampa', '5', 'Grand Admiral Thrawn', '4', 'Emperor Palpatine', '4', 'Mother Talzin', '4', 'Mob Enforcer', '3', 'TIE Fighter Pilot', '3', 'Magmatrooper', '2', 'First Order Officer', '2', 'Imperial Super Commando', '2', 'Range Trooper', '2', 'Tusken Raider', '2', 'HK-47', '2', 'Darth Traya', '2', 'Jango Fett', '2', 'Darth Sidious', '1', 'Kylo Ren (Unmasked)', '1', 'Darth Vader', '1', 'Grand Moff Tarkin', '1', 'Stormtrooper', '1', 'First Order SF TIE Pilot', '1', 'First Order TIE Pilot', '1', 'First Order Executioner', '1', 'Tusken Shaman', '1', 'IG-86 Sentinel Droid', '1', 'Director Krennic', '1', 'Greedo', '1', 'IG-88', '1', 'Gammorean Guard', '1', 'Darth Sion', '1', 'Sith Assassin', '1', 'Kylo Ren Unmasked', '1', 'Dengar', '1', 'Aurra Sing', '1', "URoRRuR'R'R", '1', 'Gar Saxon', '1', 'Darth Maul', '1', 'Bastila Shan (Fallen)', '1', 'Canderous Ordo', '1', 'Sith Trooper', '1'
],//10
        [],//11 (less areas in DS)
        ['Ahsoka Tano (Fulcrum) 100'], //test platoon 12
        ['Ahsoka Tano  100'], //test platoon 13
		],
		missions: [{
			id: 0,
			name: 'c1',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 187 500',
				'Wave 2: 297 500',
				'Wave 3: 500 000',
				'Wave 4: 792 000'
				],
			preferredSquads: [0,1,2,3],
			dangerousEnemies: [1, 3, 4, 5]
			},	{
			id: 1,
			name: 'c2',
			type: 'req',
			position: 'right',
			rewards: [
				'Wave 1: 187 500',
				'Wave 2: 297 500',
				'Wave 3: 500 000',
				'Wave 4: 792 000'
				],
			preferredSquads: [10],
			dangerousEnemies: [1, 3, 4, 5]
			}, {
			id: 2,
			name: 'c3',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 187 500',
				'Wave 2: 297 500',
				'Wave 3: 500 000',
				'Wave 4: 792 000'
				],
			preferredSquads: [1,3,4,5],
			dangerousEnemies: [0, 2, 4, 6]
			},
			{
			id: 3,
			name: 'c4',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 187 500',
				'Wave 2: 297 500',
				'Wave 3: 500 000',
				'Wave 4: 792 000'
				],
			preferredSquads: [1,3,4,5],
			dangerousEnemies: [0, 2, 4, 6]
			},
			{
			id: 4,
			name: 'c5',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 825 000',
				],
				preferredSquads: [11, 17],
			}, 
			{
			id: 5,
			name: 'c6',
			type: 'req',
			position: 'right',
			rewards: [
				'Wave 1: 1 072 500',
				],
				preferredSquads: [12, 13],
			}, 
			{
			id: 6,
			name: 'c7',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 270 000',
				'Wave 2: 420 000',
				'Wave 3: 708 000',
				'Wave 4: 1 080 000'
				],
			preferredSquads: [1, 2, 3, 15],
			dangerousEnemies: [1, 2, 4, 7]
			},
			{id: 7,
			name: 'c8',
			type: 'req',
			position: 'right',
			rewards: [
				'Wave 1: 351 000',
				'Wave 2: 546 000',
				'Wave 3: 920 400',
				'Wave 4: 1 404 000'
				],
			preferredSquads: [9],
			dangerousEnemies: [2, 7]
			},
			{
			id: 8,
			name: 'c9',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 270 000',
				'Wave 2: 420 000',
				'Wave 3: 708 000',
				'Wave 4: 1 080 000'
				],
			preferredSquads: [1, 2, 3, 15],
			dangerousEnemies: [1, 2, 4, 7]
			},
			{
			id: 9,
			name: 'c10',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 270 000',
				'Wave 2: 420 000',
				'Wave 3: 708 000',
				'Wave 4: 1 080 000'
				],
			preferredSquads: [0, 3, 14, 15, 6],
			dangerousEnemies: [0, 3, 8, 9]
			},
			{
			id: 10,
			name: 'c11',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 270 000',
				'Wave 2: 420 000',
				'Wave 3: 708 000',
				'Wave 4: 1 080 000'
				],
			preferredSquads: [0, 3, 14, 15, 6],
			dangerousEnemies: [0, 3, 8, 9]
			},
			{
			id: 11,
			name: 'c12',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 1 665 000',
				],
			preferredSquads: [11, 17],
			},
			{
			id: 12,
			name: 'c13',
			type: 'req',
			position: 'left',
			rewards: [
				'Wave 1: 2 164 500',
				],
			preferredSquads: [12, 13],
			},
			{id: 13,
			name: 'c14',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 336 000',
				'Wave 2: 540 000',
				'Wave 3: 910 000',
				'Wave 4: 1 352 000'
				],
			preferredSquads: [3, 4, 5],
			dangerousEnemies: [2, 4, 6, 8, 10]
			},
			{
			id: 14,
			name: 'c15',
			type: 'req',
			position: 'left',
			rewards: [
				'Wave 1: 336 000',
				'Wave 2: 540 000',
				'Wave 3: 910 000',
				'Wave 4: 1 352 000'
				],
			preferredSquads: [6],
			dangerousEnemies: [2, 4, 6, 8, 10]
			},
			{
			id: 15,
			name: 'c16',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 336 000',
				'Wave 2: 540 000',
				'Wave 3: 910 000',
				'Wave 4: 1 352 000'
				],
			preferredSquads: [0, 1, 2 , 3],
			dangerousEnemies: [1, 2, 3, 4, 5, 10]
			},
			{
			id: 16,
			name: 'c17',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 336 000',
				'Wave 2: 540 000',
				'Wave 3: 910 000',
				'Wave 4: 1 352 000'
				],
			preferredSquads: [0, 1, 2 , 3],
			dangerousEnemies: [1, 2, 3, 4, 5, 10]
			},
			{
			id: 17,
			name: 'c18',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 2 530 000',
				],
			preferredSquads: [18, 13],	
			},
			{
			id: 18,
			name: 'c19',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 405 000',
				'Wave 2: 675 000',
				'Wave 3: 1 038 500',
				'Wave 4: 1 564 000',
				],
			preferredSquads: [3, 4, 15, 6, 7],
			dangerousEnemies: [2, 3, 4, 5, 6, 9, 11, 12]
			},
			{id: 19,
			name: 'c20',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 405 000',
				'Wave 2: 675 000',
				'Wave 3: 1 038 500',
				'Wave 4: 1 564 000',
				],
			preferredSquads: [3, 4, 15, 6, 7],
			dangerousEnemies: [2, 3, 4, 5, 6, 9, 11, 12]
			},
			{
			id: 20,
			name: 'c21',
			type: 'req',
			position: 'left',
			rewards: [
				'Wave 1: 1 350 050',
				'Wave 2: 2 033 200',
				],
				dangerousEnemies: [2, 4, 6, 9, 12],
				preferredSquads: [16]
			},
			{
			id: 21,
			name: 'c22',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 405 000',
				'Wave 2: 675 000',
				'Wave 3: 1 038 500',
				'Wave 4: 1 564 000',
				],
			preferredSquads: [0, 1, 2, 3, 15],
			dangerousEnemies: [0, 1, 2, 4, 7, 8, 10]
			},
			{
			id: 22,
			name: 'c23',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 405 000',
				'Wave 2: 675 000',
				'Wave 3: 1 038 500',
				'Wave 4: 1 564 000',
				],
			preferredSquads: [0, 1, 2, 3, 15],
			dangerousEnemies: [0, 1, 2, 4, 7, 8, 10]
			},
			{
			id: 23,
			name: 's1',
			type: 'special',
			position: 'right',
			rewards: [
				'15 GET2',
				],
			preferredSquads: [8],
			dangerousEnemies: [0, 4, 6, 7]
			},
			{
			id: 24,
			name: 's2',
			type: 'special',
			position: 'right',
			rewards: [
				'20 GET2',
				],
				preferredSquads: [7],
			},
			{
			id: 25,
			name: 's3',
			type: 'WT',
			position: 'left',
			rewards: [
				'1 Wat Tambor Shard',
				],
			preferredSquads: [7]
			},
			{
			id: 26,
			name: 's4',
			type: 'special',
			position: 'left',
			rewards: [
				'40 GET2',
				],
			dangerousEnemies: [0, 2, 4, 7]
			},
			/* Platoons */
			{id: 27,
			name: 't1',
			type: 'platoon',
			position: 'right',
			requiredToons: [0]
			},
			{id: 28, name: 'b1', type: 'platoon', position: 'right', requiredToons: [1]},
			{id: 29, name: 't2', type: 'platoon', position: 'right', requiredToons: [2]},
			{id: 30, name: 'm2', type: 'platoon', position: 'right', requiredToons: [3]},
			{id: 31, name: 'b2', type: 'platoon', position: 'right', requiredToons: [4]},
			{id: 32, name: 't3', type: 'platoon', position: 'left', requiredToons: [5]},
			{id: 40, name: 'lsp1', type: 'platoon', position: 'right', requiredToons: [12]},
			{id: 33, name: 'm3', type: 'platoon', position: 'left', requiredToons: [6]},
			{id: 34, name: 'b3', type: 'platoon', position: 'left', requiredToons: [7]},
			{id: 35, name: 't4', type: 'platoon', position: 'left', requiredToons: [8]},
			{id: 36, name: 'm4', type: 'platoon', position: 'left', requiredToons: [9]},
			{id: 37, name: 'b4', type: 'platoon', position: 'left', requiredToons: [10]}
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

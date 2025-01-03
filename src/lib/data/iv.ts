import { IVCharacter, IVMission } from "$lib/classes";

export const ivCharacters = {
    RomanBellic: new IVCharacter("Roman Bellic", "#b2d5d9", "R"),
    Michelle: new IVCharacter("Michelle", "#deb3e0", "M"),
    LittleJacob: new IVCharacter("Little Jacob", "#89a889", "LJ"),
    VladimirGlebov: new IVCharacter("Vladimir Glebov", "#cd9b9c", "V"),
    MikhailFaustin: new IVCharacter("Mikhail Faustin", "#cd9b9c", "F"),
    DimitriRascalov: new IVCharacter("Dimitri Rascalov", "#cd9b9c", "DR"),
    BrucieKibbutz: new IVCharacter("Brucie Kibbutz", "#e9b87e", "B"),
    MannyEscuela: new IVCharacter("Manny Escuela", "#d5c578", "M"),
    ElizabetaTorres: new IVCharacter("Elizabeta Torres", "#d5c578", "E"),
    PatrickMcReary: new IVCharacter("Patrick McReary", "#bdd9a5", "PM"),
    GeraldMcReary: new IVCharacter("Gerald McReary", "#bdd9a5", "GM"),
    MallorieBardas: new IVCharacter("Mallorie Bardas", "#ff65ea", "MB"),
    FrancisMcReary: new IVCharacter("Francis McReary", "#bdd9a5", "FM"),
    PlayboyX: new IVCharacter("Playboy X", "#f9ffc5", "X"),
    DwayneForge: new IVCharacter("Dwayne Forge", "#b0a484", "D"),
    UnitedLibertyPaper: new IVCharacter("United Liberty Paper", "#ffffff", "U"),
    RayBoccino: new IVCharacter("Ray Boccino", "#b5b3b5", "RB"),
    DerrickMcReary: new IVCharacter("Derrick McReary", "#bdd9a5", "DM"),
    BernieCrane: new IVCharacter("Bernie Crane", "#d6b2d9", "BC"),
    PhilBell: new IVCharacter("Phil Bell", "#b5b6b5", "PB"),
    JimmyPegorino: new IVCharacter("Jimmy Pegorino", "#b5b6b5", "J"),
    JonGravelli: new IVCharacter("Jon Gravelli", "#8c8c8c", "G"),
    NikoBellic: new IVCharacter("NikoBellic", "#aa3d47", "NB"),
}

export const ivMissions = {
    TheCousinsBellic: new IVMission("The Cousins Bellic", ivCharacters.RomanBellic),
    ItsYourCall: new IVMission("It's Your Call", ivCharacters.RomanBellic),
    ThreesaCrowd: new IVMission("Three's a Crowd", ivCharacters.RomanBellic),
    BleedOut: new IVMission("Bleed Out", ivCharacters.RomanBellic),
    FirstDate: new IVMission("First Date", ivCharacters.Michelle),
    EasyFare: new IVMission("Easy Fare", ivCharacters.RomanBellic),
    JamaicanHeat: new IVMission("Jamaican Heat", ivCharacters.RomanBellic),
    ConcreteJungle: new IVMission("Concrete Jungle", ivCharacters.LittleJacob),
    BullinaChinaShop: new IVMission("Bull in a China Shop", ivCharacters.VladimirGlebov),
    HungOuttoDry: new IVMission("Hung Out to Dry", ivCharacters.VladimirGlebov),
    CleanGetaway: new IVMission("Clean Getaway", ivCharacters.VladimirGlebov),
    IvantheNotSoTerrible: new IVMission("Ivan the Not So Terrible", ivCharacters.VladimirGlebov),
    UncleVlad: new IVMission("Uncle Vlad", ivCharacters.RomanBellic),
    CrimeandPunishment: new IVMission("Crime and Punishment", ivCharacters.RomanBellic),
    DoYouHaveProtection: new IVMission("Do You Have Protection?", ivCharacters.MikhailFaustin),
    FinalDestination: new IVMission("Final Destination", ivCharacters.MikhailFaustin),
    LoggingOn: new IVMission("Logging On", ivCharacters.RomanBellic),
    NoLoveLost: new IVMission("No Love Lost", ivCharacters.MikhailFaustin),
    RiggedtoBlow: new IVMission("Rigged to Blow", ivCharacters.MikhailFaustin),
    TheMasterandtheMolotov: new IVMission("The Master and the Molotov", ivCharacters.DimitriRascalov),
    Shadow: new IVMission("Shadow", ivCharacters.LittleJacob),
    RussianRevolution: new IVMission("Russian Revolution", ivCharacters.DimitriRascalov),
    RomansSorrow: new IVMission("Roman's Sorrow", ivCharacters.RomanBellic),
    SearchandDelete: new IVMission("Search and Delete", ivCharacters.BrucieKibbutz),
    EasyasCanBe: new IVMission("Easy as Can Be", ivCharacters.BrucieKibbutz),
    OutoftheCloset: new IVMission("Out of the Closet", ivCharacters.BrucieKibbutz),
    EscuelaoftheStreets: new IVMission("Escuela of the Streets", ivCharacters.MannyEscuela),
    StreetSweeper: new IVMission("Street Sweeper", ivCharacters.MannyEscuela),
    LuckoftheIrish: new IVMission("Luck of the Irish", ivCharacters.ElizabetaTorres),
    BlowYourCover: new IVMission("Blow Your Cover", ivCharacters.ElizabetaTorres),
    ThePuertoRicanConnection: new IVMission("The Puerto Rican Connection", ivCharacters.MannyEscuela),
    TheSnowStorm: new IVMission("The Snow Storm", ivCharacters.ElizabetaTorres),
    HaveaHeart: new IVMission("Have a Heart", ivCharacters.ElizabetaTorres),
    CallandCollect: new IVMission("Call and Collect", ivCharacters.FrancisMcReary),
    FinalInterview: new IVMission("Final Interview", ivCharacters.FrancisMcReary),
    HollandNights: new IVMission("Holland Nights", ivCharacters.FrancisMcReary),
    Lure: new IVMission("Lure", ivCharacters.FrancisMcReary),
    HarboringaGrudge: new IVMission("Harboring a Grudge", ivCharacters.PatrickMcReary),
    WasteNotWantKnots: new IVMission("Waste Not Want Knots", ivCharacters.PatrickMcReary),
    ThreeLeafClover: new IVMission("Three Leaf Clover", ivCharacters.PatrickMcReary),
    ActionsSpeakLouderthanWords: new IVMission("Actions Speak Louder than Words", ivCharacters.GeraldMcReary),
    INeedYourClothesYourBootsandYourMotorcycle: new IVMission("I Need Your Clothes, Your Boots, and Your Motorcycle", ivCharacters.GeraldMcReary),
    ALongWaytoFall: new IVMission("A Long Way to Fall", ivCharacters.RayBoccino),
    TakingintheTrash: new IVMission("Taking in the Trash", ivCharacters.RayBoccino),
    Meltdown: new IVMission("Meltdown", ivCharacters.RayBoccino),
    MuseumPiece: new IVMission("Museum Piece", ivCharacters.RayBoccino),
    NoWayontheSubway: new IVMission("No Way on the Subway", ivCharacters.RayBoccino),
    LateCheckout: new IVMission("Late Checkout", ivCharacters.RayBoccino),
    Smackdown: new IVMission("Smackdown", ivCharacters.DerrickMcReary),
    Babysitting: new IVMission("Babysitting", ivCharacters.DerrickMcReary),
    TunnelofDeath: new IVMission("Tunnel of Death", ivCharacters.DerrickMcReary),
    BloodBrothers: new IVMission("Blood Brothers", ivCharacters.FrancisMcReary),
    Undertaker: new IVMission("Undertaker", ivCharacters.PatrickMcReary),
    TruckHustle: new IVMission("Truck Hustle", ivCharacters.PhilBell),
    PegorinosPride: new IVMission("Pegorino's Pride", ivCharacters.JimmyPegorino),
    Payback: new IVMission("Payback", ivCharacters.JimmyPegorino),
    CatchtheWave: new IVMission("Catch the Wave", ivCharacters.PhilBell),
    Flatline: new IVMission("Flatline", ivCharacters.JimmyPegorino),
    Trespass: new IVMission("Trespass", ivCharacters.PhilBell),
    ToLiveandDieinAlderney: new IVMission("To Live and Die in Alderney", ivCharacters.PhilBell),
    DeconstructionforBeginners: new IVMission("Deconstruction for Beginners", ivCharacters.PlayboyX),
    PhotoShoot: new IVMission("Photo Shoot", ivCharacters.PlayboyX),
    HostileNegotiation: new IVMission("Hostile Negotiation", ivCharacters.MallorieBardas),
    WrongisRight: new IVMission("Wrong is Right", ivCharacters.UnitedLibertyPaper),
    PortraitofaKiller: new IVMission("Portrait of a Killer", ivCharacters.UnitedLibertyPaper),
    DustOff: new IVMission("Dust Off", ivCharacters.UnitedLibertyPaper),
    PaperTrail: new IVMission("Paper Trail", ivCharacters.UnitedLibertyPaper),
    IllTakeHer1: new IVMission("I'll Take Her...", ivCharacters.GeraldMcReary),
    IllTakeHer2: new IVMission("...I'll Take Her", ivCharacters.GeraldMcReary),
    Ransom: new IVMission("Ransom", ivCharacters.PatrickMcReary),
    ShesaKeeper: new IVMission("She's a Keeper", ivCharacters.GeraldMcReary),
    DiamondsAreaGirlsBestFriend: new IVMission("Diamonds Are a Girl's Best Friend", ivCharacters.GeraldMcReary),
    WeekendatFlorians: new IVMission("Weekend at Florian's", ivCharacters.RayBoccino),
    HatingtheHaters: new IVMission("Hating the Haters", ivCharacters.BernieCrane),
    UnionDrive: new IVMission("Union Drive", ivCharacters.BernieCrane),
    BuoysAhoy: new IVMission("Buoys Ahoy", ivCharacters.BernieCrane),
    Entourage: new IVMission("Entourage", ivCharacters.JonGravelli),
    DiningOut: new IVMission("Dining Out", ivCharacters.JonGravelli),
    LiquidizetheAssets: new IVMission("Liquidize the Assets", ivCharacters.JonGravelli),
    ThatSpecialSomeone: new IVMission("That Special Someone", ivCharacters.UnitedLibertyPaper),
    OneLastThing: new IVMission("One Last Thing", ivCharacters.JimmyPegorino),
}

export const ivDealEndingMissions = {
    IfthePriceisRight: new IVMission("If the Price is Right", ivCharacters.JimmyPegorino),
    MrMrsBellic_deal: new IVMission("Mr. & Mrs. Bellic", ivCharacters.RomanBellic),
    ARevengersTragedy: new IVMission("A Revenger's Tragedy", ivCharacters.LittleJacob),
}

export const ivRevengeEndingMissions = {
    ADishServedCold: new IVMission("A Dish Served Cold", ivCharacters.NikoBellic),
    MrMrsBellic_deal: new IVMission("Mr. & Mrs. Bellic", ivCharacters.RomanBellic),
    OutofCommission: new IVMission("Out of Commission", ivCharacters.LittleJacob),
}

export const ivOptionalMissions = {
    No1: new IVMission("No. 1", ivCharacters.BrucieKibbutz),
    RuffRider: new IVMission("Ruff Rider", ivCharacters.DwayneForge),
    UndresstoKill: new IVMission("Undress to Kill", ivCharacters.DwayneForge),
    TheHollandPlay: new IVMission("The Holland Play", ivCharacters.PlayboyX),
}

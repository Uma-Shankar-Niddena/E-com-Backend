
const connectDB = require("./connection");

const insertData=async()=>{
    const db=await connectDB()

   

    const isDev = process.env.DEV_MODE === "true";


//update category to wine 

await db.run(
  `UPDATE products SET category = ? WHERE category IN (?, ?, ?, ?, ?)`,
  ['wine', 'whisky', 'brandy', 'beer', 'vodka', 'rum']
);

/// update inStock "1"

await db.run(`UPDATE products SET inStock=? WHERE category IN (?,?,?,?)`,["1","stuff","water","soda","cigar"])

///update products originalPrice 

await db.run(`UPDATE products 
SET originalPrice = ROUND(price * 1.2, 2)
WHERE category = 'stuff';`)

///update category soda to water 
await db.run(`UPDATE products SET category=? WHERE category=?`,["water","soda"])

///update rating to stuff 

await db.run(`UPDATE products SET rating = CASE name 
    WHEN 'Hyderabadi Biryani' THEN 4.8
    WHEN 'Mirchi Bajji' THEN 4.6
    WHEN 'Cheese Platter' THEN 4.7
    WHEN 'Kodi 65' THEN 4.6
    WHEN 'Paneer Tikka' THEN 4.5
    WHEN 'Sakinalu' THEN 4.5
    WHEN 'Aloogadda Pakodi' THEN 4.5
    WHEN 'Kodi Vepudu' THEN 4.5
    WHEN 'Ankapur Kodi Kura' THEN 4.6
    WHEN 'Haleem' THEN 4.7
    WHEN 'Chegodilu' THEN 4.2
    WHEN 'Pesarattu Chips' THEN 4.1
    WHEN 'Guntur Chili Poppers' THEN 4.3
    WHEN 'Jeedi Pappu Vepudu' THEN 4.2
    WHEN 'Avocado Salad' THEN 4.0
    WHEN 'Mokka Jonna Chaat' THEN 4.1
    WHEN 'Dosakaya Pachadi' THEN 4.0
    WHEN 'Bendakaya Vepudu' THEN 4.2
    WHEN 'Verusenaga Masala' THEN 4.3
    WHEN 'Kura Vegetables Skewers' THEN 4.1
    WHEN 'Pappadam' THEN 4.0
    WHEN 'Tamata Pachadi' THEN 4.1
    WHEN 'Palakura Pakodi' THEN 4.2
    WHEN 'Pandla Platter' THEN 4.0
    WHEN 'Garlic Bread' THEN 4.1
    WHEN 'Mixed Nuts' THEN 4.2
    WHEN 'Kheera Perugu' THEN 4.0
    WHEN 'Ullipaya Pakodi' THEN 4.3
    WHEN 'Bruschetta' THEN 4.1
    WHEN 'Veg Cutlet' THEN 4.2
    WHEN 'Senaga Pappu Vepudu' THEN 4.1
    WHEN 'Caprese Salad' THEN 4.0
    WHEN 'Kodi Pulusu' THEN 4.3
    WHEN 'Mamsam Pulusu' THEN 4.2
    WHEN 'Boti Kebab' THEN 4.4
    WHEN 'Paya' THEN 4.1
    WHEN 'Murgh ka Korma' THEN 4.2
    WHEN 'Ulavacharu' THEN 4.0
    WHEN 'Guddu Pulusu' THEN 4.1
    WHEN 'Mamsam Vepudu' THEN 4.3
    WHEN 'Chepala Pulusu' THEN 4.2
    WHEN 'Chepala Vepudu' THEN 4.3
    WHEN 'Nalli Nihari' THEN 4.1
    WHEN 'Dalcha' THEN 4.2
    WHEN 'Pattar ka Gosht' THEN 4.1
    WHEN 'Marag' THEN 4.0
    WHEN 'Mamsam Keema' THEN 4.2
    WHEN 'Royyala Vepudu' THEN 4.3
    WHEN 'Chakna' THEN 4.1
    WHEN 'Kodi Mandi' THEN 4.2
    WHEN 'Mamsam Mandi' THEN 4.2
    WHEN 'Kodi Kura' THEN 4.1
    WHEN 'Gongura Pachadi' THEN 3.9
    WHEN 'Stuffed Mushrooms' THEN 3.8
    WHEN 'Pottu Pachadi' THEN 3.7
    WHEN 'Chinta Chiguru Mamsam' THEN 3.8
    WHEN 'Kaleja Vepudu' THEN 3.7
    WHEN 'Bheja Vepudu' THEN 3.6
    WHEN 'Gurda Vepudu' THEN 3.5
    ELSE 4.0 -- Default for any missed
END
WHERE category = 'stuff';
    
    `)
///update rating to cigars 
await db.run(`
UPDATE products 
SET rating = CASE name
    
    WHEN 'Cohiba Siglo VI' THEN 4.8
    WHEN 'Montecristo No. 2' THEN 4.7
    WHEN 'Romeo y Julieta Churchill' THEN 4.6
    WHEN 'Partagas Serie D No. 4' THEN 4.5
    WHEN 'Davidoff Winston Churchill' THEN 4.8
    WHEN 'Arturo Fuente Opus X' THEN 4.7
    WHEN 'Padron 1964 Anniversary' THEN 4.6
    WHEN 'Ashton VSG Robusto' THEN 4.5
    WHEN 'H. Upmann Magnum 50' THEN 4.6
    WHEN 'Rocky Patel Decade' THEN 4.5
    WHEN 'Gold Flake Kings' THEN 4.4
    WHEN 'Classic Milds' THEN 4.3
    WHEN 'Wills Navy Cut' THEN 4.3
    WHEN 'Charminar' THEN 4.2
    WHEN 'Marlboro Red' THEN 4.1
    WHEN 'Four Square' THEN 4.0
    WHEN 'Editions' THEN 3.9
    WHEN 'Scissors' THEN 3.9
    WHEN 'Cavanders Gold' THEN 3.8
    WHEN 'Bristol' THEN 3.6
    WHEN 'Panama' THEN 3.5
    WHEN 'Capstan' THEN 3.6
    WHEN 'Gold Flake Lights' THEN 3.8
    WHEN 'Red & White' THEN 3.5
    WHEN 'Chancellor' THEN 3.5
    ELSE 4.0 
END
WHERE category = 'cigar';`)

///update ratings for water  
await db.run(`UPDATE products 
SET rating = CASE name
   
    WHEN 'Bisleri Mineral Water' THEN 4.5
    WHEN 'Kinley Water' THEN 4.4
    WHEN 'Aquafina Purified Water' THEN 4.4
    
    WHEN 'Himalayan Natural Mineral Water' THEN 4.2
    WHEN 'Tata Water Plus' THEN 4.1
    WHEN 'Bailley Packaged Water' THEN 4.0
    WHEN 'Vedica Himalayan Water' THEN 4.2
    WHEN 'Oxigen Water' THEN 4.1
    WHEN 'Patanjali Divya Jal' THEN 4.0
    WHEN 'B Natural Mineral Water' THEN 4.0
   
    WHEN 'Evian Natural Spring Water' THEN 3.9
    WHEN 'San Pellegrino Still Water' THEN 3.8
    WHEN 'Voss Still Water' THEN 3.8
    WHEN 'Perrier Still Water' THEN 3.7
    WHEN 'Fiji Artesian Water' THEN 3.7
    ELSE 4.0 -- Default for any missed
END
WHERE category = 'water';`)

///update images 
await db.exec(`UPDATE products
SET image = CASE name

  WHEN 'Budweiser Magnum' THEN '/images/budweiser22.jpg'
  WHEN 'Tuborg Strong' THEN '/images/tuborgstrongbeer.jpg'
  WHEN 'Royal Stag' THEN '/images/Royalstag.webp'
  WHEN '100 Pipers' THEN '/images/100pipers.jpg'
  WHEN "McDowell's No.1" THEN '/images/mcdonaldsNo1.jpg'
  WHEN 'Sula Chenin Blanc' THEN '/images/sula.jpg'
  WHEN 'Kingfisher Premium' THEN '/images/kinigfisherpremium.jpg'
  WHEN 'Bira 91 Blonde' THEN '/images/bira.jpg'
  WHEN 'Amrut Fusion' THEN '/images/amritfusion.jpg'
  WHEN 'Old Monk' THEN '/images/oldmonk.jpg'
  WHEN 'Blenders Pride' THEN '/images/blenderspride.jpg'
  WHEN 'Magic Moments' THEN '/images/magicmoments.jpg'
  WHEN 'Smirnoff Red' THEN '/images/smirnoff.avif'
  WHEN 'Hennessy VS' THEN '/images/hennessy.avif'
  WHEN "Jacob's Creek Shiraz" THEN '/images/jacobs2.jpg'
  WHEN 'KRSMA Cabernet' THEN '/images/krsma.webp'
  WHEN 'Carlsberg Elephant' THEN '/images/carlesberg2.jpg'
  WHEN "Beck's Ice" THEN '/images/becksice2.jpg'
  WHEN 'Heineken' THEN '/images/heinken2.jpg'
  WHEN 'Paul John Brilliance' THEN '/images/PaulJohnBrilliance.jpg'
  WHEN 'Black Dog' THEN '/images/BlackDog.webp'
  WHEN 'Imperial Blue' THEN '/images/ImperialBlue.webp'
  WHEN 'Haywards 5000' THEN '/images/Haywards5000.webp'
  WHEN 'Signature Premium' THEN '/images/SignaturePremium.webp'
  WHEN 'Royal Challenge' THEN '/images/RoyalChallenge.jpg'
  WHEN 'Antiquity Blue' THEN '/images/AntiquityBlue.png'
  WHEN 'Morpheus Brandy' THEN '/images/MorpheusBrandy.webp'
  WHEN 'Johnnie Walker Red' THEN '/images/redlabel2.jpg'
  WHEN "Teacher's Highland Cream" THEN '/images/TeachersHighlandCream.webp'
  WHEN 'White Mischief' THEN '/images/WhiteMischief.jpg'

  -- Stuff (Veg) Products
  WHEN 'Gongura Pachadi' THEN '/images/gongurapacchadi.jpg'
  WHEN 'Mirchi Bajji' THEN '/mirapakayabajji.jpg'
  WHEN 'Sakinalu' THEN '/images/senakailu.jpg'
  WHEN 'Chegodilu' THEN '/images/chegodilu.jpg'
  WHEN 'Cheese Platter' THEN '/images/cheeseplatter.jpg'
  WHEN 'Pesarattu Chips' THEN '/images/pesarattuchips.jpg'
  WHEN 'Aloogadda Pakodi' THEN '/images/allogaddapakodi.jpg'
  WHEN 'Stuffed Mushrooms' THEN '/images/stuffedmushroom.jpg'
  WHEN 'Guntur Chili Poppers' THEN '/images/stuffedmushroom.jpg'
  WHEN 'Jeedi Pappu Vepudu' THEN '/images/chicken65.jpg'
  WHEN 'Avocado Salad' THEN '/images/stuffedmushroom.jpg'
  WHEN 'Mokka Jonna Chaat' THEN '/images/mokkajonnachat.jpg'
  WHEN 'Paneer Tikka' THEN '/images/pannertikka.jpg'
  WHEN 'Dosakaya Pachadi' THEN '/images/dosakayapachadi.jpg'
  WHEN 'Pottu Pachadi' THEN '/images/pottupacchadi.jpg'
  WHEN 'Bendakaya Vepudu' THEN '/images/bendakayavepudu.jpg'
  WHEN 'Verusenaga Masala' THEN '/images/verusenagamasala.jpg'
  WHEN 'Kura Vegetables Skewers' THEN '/images/kuravegitablessk.jpg'
  WHEN 'Pappadam' THEN '/images/papadalu.jpg'
  WHEN 'Tamata Pachadi' THEN '/images/tomatopacchadi.jpg'
  WHEN 'Palakura Pakodi' THEN '/images/ullipayapakodi.jpg'
  WHEN 'Pandla Platter' THEN '/images/pandlaplatter.jpg'
  WHEN 'Garlic Bread' THEN '/images/garlicbread.jpg'
  WHEN 'Mixed Nuts' THEN '/images/mixednuts.jpg'
  WHEN 'Kheera Perugu' THEN '/images/kheeraperugu.jpg'
  WHEN 'Ullipaya Pakodi' THEN '/images/ullipayapakodi.jpg'
  WHEN 'Bruschetta' THEN '/images/Bruchette.jpg'
  WHEN 'Veg Cutlet' THEN '/images/vegcutlet.jpg'
  WHEN 'Senaga Pappu Vepudu' THEN '/images/senagapappuvepudu.jpg'
  WHEN 'Caprese Salad' THEN '/images/capraseslad.jpg'
  -- Non-Veg Products
  WHEN 'Hyderabadi Biryani' THEN '/images/Hyderabadbiryani.jpg'
  WHEN 'Ankapur Kodi Kura' THEN '/images/anakapurkodikura.jpg'
  WHEN 'Kodi Pulusu' THEN '/images/kodipulusu.jpg'
  WHEN 'Mamsam Pulusu' THEN '/images/mamsampulusu.jpg'
  WHEN 'Chinta Chiguru Mamsam' THEN '/images/chintachigurumamsam.jpg'
  WHEN 'Kodi Bhuna Masala' THEN '/images/kodibhaunmasala.jpg'
  WHEN 'Boti Kebab' THEN '/images/botikabad.jpg'
  WHEN 'Paya' THEN '/images/paya.jpg'
  WHEN 'Haleem' THEN '/images/haleem.jpg'
  WHEN 'Murgh ka Korma' THEN '/images/murgkakurma.jpg'
  WHEN 'Kaleja Vepudu' THEN '/images/khalejamasalavepudu.jpg'
  WHEN 'Ulavacharu' THEN '/images/ulavacharusoup.jpg'
  WHEN 'Guddu Pulusu' THEN '/images/guddupulusu.jpg'
  WHEN 'Kodi Vepudu' THEN '/images/kodivepudu.jpg'
  WHEN 'Mamsam Vepudu' THEN '/images/mamsamvepudu.jpg'
  WHEN 'Chepala Pulusu' THEN '/images/chapalapulusu.jpg'
  WHEN 'Chepala Vepudu' THEN '/images/chepalavepudu.jpg'
  WHEN 'Nalli Nihari' THEN '/images/nallinihari.jpg'
  WHEN 'Dalcha' THEN '/images/dalcha.jpg'
  WHEN 'Pattar ka Gosht' THEN '/images/Pattarkagosht.jpg'
  WHEN 'Marag' THEN '/images/murgkakurma.jpg'
  WHEN 'Kodi 65' THEN '/images/chicken65.jpg'
  WHEN 'Mamsam Keema' THEN '/images/mamsamkeema.jpg'
  WHEN 'Royyala Vepudu' THEN '/images/prawnsfry.jpg'
  WHEN 'Chakna' THEN '/images/chakna.jpg'
  WHEN 'Kodi Mandi' THEN '/images/chickenmandi.jpg'
  WHEN 'Mamsam Mandi' THEN '/images/muttonmandi.jpg'
  WHEN 'Bheja Vepudu' THEN '/images/brainfry.jpg'
  WHEN 'Gurda Vepudu' THEN '/images/kidneyfry.jpg'
  WHEN 'Kodi Kura' THEN '/images/traditionalchickencurry.jpg'

  WHEN 'Bisleri Mineral Water' THEN '/images/bisleri2.jpg'
  WHEN 'Kinley Water' THEN '/images/KinleyWater.webp'
  WHEN 'Aquafina Purified Water' THEN '/images/AquafinaPurifiedWater.webp'
  WHEN 'Himalayan Natural Mineral Water' THEN '/images/HimalayanNaturalMineralWater.jpg'
  WHEN 'Evian Natural Spring Water' THEN '/images/EvianNaturalSpringWater.jpg'
  WHEN 'Tata Water Plus' THEN '/images/tatawaterplus.jpg'
  WHEN 'Bailley Packaged Water' THEN '/images/BailleyWater.webp'
  WHEN 'San Pellegrino Still Water' THEN '/images/SanPellegrinoStillWater.jpg'
  WHEN 'Voss Still Water' THEN '/images/vossstillwater.jpg'
  WHEN 'Patanjali Divya Jal' THEN '/images/patanjalidivyajal.jpg'
  WHEN 'Oxigen Water' THEN '/images/oxigenwater.jpg'
  WHEN 'Vedica Himalayan Water' THEN '/images/vidicahimalayawater.jpg'
  WHEN 'Perrier Still Water' THEN '/images/perrierwater.webp'
  WHEN 'Fiji Artesian Water' THEN '/images/fijiwater.webp'
  WHEN 'B Natural Mineral Water' THEN '/images/bnaturalmineralwater.avif'
  -- Soda Products
  WHEN 'Thums Up' THEN '/images/thumsup2.jpg'
  WHEN 'Limca' THEN '/images/limcatin.jpg'
  WHEN 'Sprite' THEN '/images/sprite.jpg'
  WHEN 'Schweppes Tonic Water' THEN '/images/scpewers.jpg'
  WHEN 'Coca-Cola' THEN '/images/cocacola.jpg'
  WHEN 'Fanta Orange' THEN '/images/fanta2.jpg'
  WHEN 'Bovonto' THEN '/images/bovonto.png'
  WHEN 'San Pellegrino Sparkling' THEN '/images/SanPellegrinoStillWater.jpg'
  WHEN 'Mirinda' THEN '/images/mirinda.jpg'
  WHEN 'Ginger Ale' THEN '/images/gingerale.jpg'
  WHEN 'Maaza Mango' THEN '/images/maaza.avif'
  WHEN 'Appy Fizz' THEN '/images/appyfiz.jpg'
  WHEN '7Up' THEN '/images/7up.jpg'
  WHEN 'Pepsi' THEN '/images/pepsi.jpg'
  WHEN 'Schweppes Ginger Beer' THEN '/images/scpewers.jpg'
  -- Cigars Products
  WHEN 'Cohiba Siglo VI' THEN '/images/Cohiba.jpg'
  WHEN 'Montecristo No. 2' THEN '/images/Montecristo.webp'
  WHEN 'Romeo y Julieta Churchill' THEN '/images/Romeo.webp'
  WHEN 'Partagas Serie D No. 4' THEN '/images/Partagas.webp'
  WHEN 'Davidoff Winston Churchill' THEN '/images/churchill.webp'
  WHEN 'Arturo Fuente Opus X' THEN '/images/ArturoFuenteOpus.jpg'
  WHEN 'Padron 1964 Anniversary' THEN '/images/Partagas.webp'
  WHEN 'Ashton VSG Robusto' THEN '/images/ashton.jpg'
  WHEN 'H. Upmann Magnum 50' THEN '/images/HUpmann.webp'
  WHEN 'Rocky Patel Decade' THEN '/images/Rocky.jpg'
  WHEN 'Gold Flake Kings' THEN '/images/goldflake2.avif'
  WHEN 'Classic Milds' THEN '/images/classiccigar.jpg'
  WHEN 'Wills Navy Cut' THEN '/images/willsnavycut.jpg'
  WHEN 'Charminar' THEN '/images/charminarcigar.jpg'
  WHEN 'Four Square' THEN '/images/foursquare.jpg'
  WHEN 'Editions' THEN '/images/editions.jpg'
  WHEN 'Marlboro Red' THEN '/images/marlboro.png'
  WHEN 'Bristol' THEN '/images/bristol.jpg'
  WHEN 'Scissors' THEN '/images/scissors.jpg'
  WHEN 'Cavanders Gold' THEN '/images/cavanders.png'
  WHEN 'Panama' THEN '/images/panama.jpg'
  WHEN 'Capstan' THEN '/images/capstan.png'
  WHEN 'Gold Flake Lights' THEN '/images/goldflakelights.jpeg'
  WHEN 'Red & White' THEN '/images/redwhite.png'
  WHEN 'Chancellor' THEN '/images/chancalor.jpg'
  ELSE '/images/carlsberg.webp'
  
END ;`)


 if (isDev){
        let  isExistoo= await db.all(`SELECT * FROM products`)


        
        if (isExistoo.length===0){
            ///inserting wine products 

              await db.exec(`
            INSERT INTO products (name, price, originalPrice, image, description, vintage, region, type, rating, category, inStock) VALUES
            ('Budweiser Magnum', 180, 200, '/images/wine3.png', 'Smooth strong lager beer.', '2022', 'India', 'Beer', 4.2, 'beer', 1),
            ('Tuborg Strong', 120, 140, '/images/wine3.png', 'Classic strong beer.', '2022', 'India', 'Beer', 4.0, 'beer', 1),
            ('Royal Stag', 500, 550, '/images/wine3.png', 'Popular Indian whisky.', '2021', 'India', 'Whisky', 4.3, 'whisky', 1),
            ('100 Pipers', 850, 900, '/images/wine3.png', 'Premium blended Scotch.', '2021', 'Scotland', 'Whisky', 4.6, 'whisky', 1),
            ('McDowell\''s No.1', 400, 450, '/images/wine3.png', 'Smooth Indian whisky.', '2020', 'India', 'Whisky', 4.1, 'whisky', 1),
            ('Sula Chenin Blanc', 750, 799, '/images/wine3.png', 'Fruity Indian white wine.', '2021', 'Nashik', 'Wine', 4.3, 'wine', 1),
            ('Kingfisher Premium', 110, 130, '/images/wine3.png', 'Iconic Indian lager.', '2022', 'India', 'Beer', 4.0, 'beer', 1),
            ('Bira 91 Blonde', 160, 180, '/images/wine3.png', 'Smooth craft beer.', '2022', 'India', 'Beer', 4.4, 'beer', 1),
            ('Amrut Fusion', 3400, 3600, '/images/wine3.png', 'Indian single malt whisky.', '2019', 'India', 'Whisky', 4.7, 'whisky', 1),
            ('Old Monk', 300, 350, '/images/wine3.png', 'Classic Indian dark rum.', '2020', 'India', 'Rum', 4.5, 'rum', 1),
            ('Blenders Pride', 750, 800, '/images/wine3.png', 'Premium Indian whisky.', '2021', 'India', 'Whisky', 4.4, 'whisky', 1),
            ('Magic Moments', 500, 530, '/images/wine3.png', 'Popular Indian vodka.', '2021', 'India', 'Vodka', 4.1, 'vodka', 1),
            ('Smirnoff Red', 900, 950, '/images/wine3.png', 'Well-known vodka brand.', '2022', 'Russia', 'Vodka', 4.4, 'vodka', 1),
            ('Hennessy VS', 4500, 5000, '/images/wine3.png', 'Premium Cognac.', '2020', 'France', 'Cognac', 4.8, 'brandy', 1),
            ('Jacob\''s Creek Shiraz', 1100, 1300, '/images/wine3.png', 'Australian red wine.', '2019', 'Australia', 'Wine', 4.5, 'wine', 1),
            ('KRSMA Cabernet', 2500, 2800, '/images/wine3.png', 'Indian red wine.', '2018', 'India', 'Wine', 4.6, 'wine', 1),
            ('Carlsberg Elephant', 190, 210, '/images/wine3.png', 'Strong Danish beer.', '2022', 'Denmark', 'Beer', 4.1, 'beer', 1),
            ('Beck\''s Ice', 150, 170, '/images/wine3.png', 'Light crisp beer.', '2022', 'Germany', 'Beer', 4.0, 'beer', 1),
            ('Heineken', 180, 200, '/images/wine3.png', 'Popular international beer.', '2022', 'Netherlands', 'Beer', 4.3, 'beer', 1),
            ('Paul John Brilliance', 3100, 3300, '/images/wine3.png', 'Indian single malt.', '2019', 'Goa', 'Whisky', 4.7, 'whisky', 1),
            ('Black Dog', 1300, 1450, '/images/wine3.png', 'Premium Indian Scotch.', '2021', 'India', 'Whisky', 4.5, 'whisky', 1),
            ('Imperial Blue', 380, 400, '/images/wine3.png', 'Popular affordable whisky.', '2021', 'India', 'Whisky', 4.0, 'whisky', 1),
            ('Haywards 5000', 100, 120, '/images/wine3.png', 'Strong Indian beer.', '2022', 'India', 'Beer', 4.0, 'beer', 1),
            ('Signature Premium', 950, 999, '/images/wine3.png', 'Premium Indian whisky.', '2021', 'India', 'Whisky', 4.4, 'whisky', 1),
            ('Royal Challenge', 430, 460, '/images/wine3.png', 'Indian whisky.', '2021', 'India', 'Whisky', 4.2, 'whisky', 1),
            ('Antiquity Blue', 850, 880, '/images/wine3.png', 'Indian grain whisky.', '2021', 'India', 'Whisky', 4.4, 'whisky', 1),
            ('Morpheus Brandy', 600, 650, '/images/wine3.png', 'Smooth Indian brandy.', '2021', 'India', 'Brandy', 4.3, 'brandy', 1),
            ('Johnnie Walker Red', 1800, 1900, '/images/wine3.png', 'Scotch whisky.', '2020', 'Scotland', 'Whisky', 4.6, 'whisky', 1),
            ('Teacher\''s Highland Cream', 1300, 1350, '/images/wine3.png', 'Blended Scotch whisky.', '2020', 'Scotland', 'Whisky', 4.5, 'whisky', 1),
            ('White Mischief', 250, 280, '/images/wine3.png', 'Indian vodka.', '2021', 'India', 'Vodka', 3.9, 'vodka', 1)

          `);
      ///inserting stuff products 

          await db.exec(`INSERT INTO products (name, category, type, description, spice_level, price, image, best_with, region, isVeg)
VALUES
-- Vegetarian Products (30, Wine-Friendly)
('Gongura Pachadi', 'stuff', 'Pickle', 'Tangy sorrel leaves pickle with red chilies and garlic.', 'Very Spicy', 40, '/images/gongura_pachadi.jpg', 'Red wine or mandu, pairs with cheese board', 'Telangana', true),
('Mirchi Bajji', 'stuff', 'Snack', 'Banana peppers stuffed with potato, coated in flour, deep-fried.', 'Very Spicy', 30, '/images/mirchi_bajji.jpg', 'White wine or mandu', 'Hyderabad', true),
('Sakinalu', 'stuff', 'Snack', 'Crispy rice flour snack with sesame and carom seeds.', 'Mild', 60, '/images/sakinalu.jpg', 'Rosé wine or mandu', 'Northern Telangana', true),
('Chegodilu', 'stuff', 'Snack', 'Crunchy ring-shaped rice flour snack with chili powder.', 'Medium', 40, '/images/chegodilu.jpg', 'Sparkling wine or mandu', 'Telangana', true),
('Cheese Platter', 'stuff', 'Appetizer', 'Assorted cheeses (cheddar, brie, gouda) with nuts and grapes.', 'Mild', 250, '/images/cheese_platter.jpg', 'Red or white wine', 'Hyderabad', true),
('Pesarattu Chips', 'stuff', 'Snack', 'Crispy green gram pancakes broken into chips.', 'Medium', 50, '/images/pesarattu_chips.jpg', 'White wine or mandu', 'Telangana', true),
('Aloogadda Pakodi', 'stuff', 'Snack', 'Spicy potato fritters with green chilies and curry leaves.', 'Spicy', 35, '/images/aloogadda_pakodi.jpg', 'Rosé wine or mandu', 'Telangana', true),
('Stuffed Mushrooms', 'stuff', 'Appetizer', 'Mushrooms stuffed with paneer and spices, baked.', 'Mild', 120, '/images/stuffed_mushrooms.jpg', 'White wine or sparkling wine', 'Hyderabad', true),
('Guntur Chili Poppers', 'stuff', 'Snack', 'Spicy chili poppers with cream cheese filling.', 'Very Spicy', 80, '/images/guntur_poppers.jpg', 'White wine or mandu', 'Telangana', true),
('Jeedi Pappu Vepudu', 'stuff', 'Snack', 'Salted roasted cashews with chili powder dusting.', 'Mild', 100, '/images/jeedi_pappu_vepudu.jpg', 'Red wine or mandu', 'Telangana', true),
('Avocado Salad', 'stuff', 'Salad', 'Fresh avocado with onions, tomatoes, and lemon dressing.', 'Mild', 90, '/images/avocado_salad.jpg', 'White wine or soda', 'Hyderabad', true),
('Mokka Jonna Chaat', 'stuff', 'Snack', 'Roasted corn with butter, chili, and lemon.', 'Spicy', 40, '/images/mokka_jonna_chaat.jpg', 'Sparkling wine or mandu', 'Telangana', true),
('Paneer Tikka', 'stuff', 'Appetizer', 'Marinated paneer cubes grilled with spices.', 'Medium', 150, '/images/paneer_tikka.jpg', 'Red wine or soda', 'Hyderabad', true),
('Dosakaya Pachadi', 'stuff', 'Pickle', 'Cucumber chutney with tamarind and spices.', 'Spicy', 35, '/images/dosakaya_pachadi.jpg', 'White wine or mandu', 'Telangana', true),
('Pottu Pachadi', 'stuff', 'Pickle', 'Ridge and bottle gourd peel chutney, tangy and spicy.', 'Spicy', 40, '/images/pottu_pachadi.jpg', 'Rosé wine or mandu', 'Telangana', true),
('Bendakaya Vepudu', 'stuff', 'Snack', 'Deep-fried okra with Telangana spices.', 'Spicy', 60, '/images/bendakaya_vepudu.jpg', 'White wine or mandu', 'Telangana', true),
('Verusenaga Masala', 'stuff', 'Snack', 'Fried peanuts with chili powder and curry leaves.', 'Spicy', 30, '/images/verusenaga_masala.jpg', 'Mandu or beer', 'Telangana', true),
('Kura Vegetables Skewers', 'stuff', 'Appetizer', 'Grilled bell peppers, onions, and paneer skewers.', 'Medium', 100, '/images/kura_vegetables_skewers.jpg', 'Red wine or soda', 'Hyderabad', true),
('Pappadam', 'stuff', 'Snack', 'Crispy lentil wafers, lightly spiced.', 'Mild', 20, '/images/pappadam.jpg', 'White wine or mandu', 'Telangana', true),
('Tamata Pachadi', 'stuff', 'Pickle', 'Spicy tomato chutney with garlic and red chilies.', 'Spicy', 35, '/images/tamata_pachadi.jpg', 'Rosé wine or mandu', 'Telangana', true),
('Palakura Pakodi', 'stuff', 'Snack', 'Crispy spinach fritters with besan and spices.', 'Spicy', 40, '/images/palakura_pakodi.jpg', 'White wine or mandu', 'Telangana', true),
('Pandla Platter', 'stuff', 'Appetizer', 'Assorted fruits (grapes, apples, pineapple) for wine pairing.', 'Mild', 80, '/images/pandla_platter.jpg', 'White or sparkling wine', 'Hyderabad', true),
('Garlic Bread', 'stuff', 'Appetizer', 'Toasted bread with garlic butter and herbs.', 'Mild', 60, '/images/garlic_bread.jpg', 'Red wine or soda', 'Hyderabad', true),
('Mixed Nuts', 'stuff', 'Snack', 'Assorted roasted nuts (almonds, walnuts, cashews).', 'Mild', 120, '/images/mixed_nuts.jpg', 'Red wine or mandu', 'Telangana', true),
('Kheera Perugu', 'stuff', 'Side', 'Cool yogurt with cucumber and mild spices.', 'Mild', 40, '/images/kheera_perugu.jpg', 'White wine or soda', 'Hyderabad', true),
('Ullipaya Pakodi', 'stuff', 'Snack', 'Crispy onion fritters with green chilies.', 'Spicy', 35, '/images/ullipaya_pakodi.jpg', 'Mandu or rosé wine', 'Telangana', true),
('Bruschetta', 'stuff', 'Appetizer', 'Toasted bread with tomato, basil, and olive oil.', 'Mild', 80, '/images/bruschetta.jpg', 'White wine or soda', 'Hyderabad', true),
('Veg Cutlet', 'stuff', 'Snack', 'Crispy vegetable patties with mashed potatoes and spices.', 'Medium', 50, '/images/veg_cutlet.jpg', 'White wine or mandu', 'Telangana', true),
('Senaga Pappu Vepudu', 'stuff', 'Snack', 'Spicy roasted chickpeas with Telangana masala.', 'Spicy', 30, '/images/senaga_pappu_vepudu.jpg', 'Mandu or beer', 'Telangana', true),
('Caprese Salad', 'stuff', 'Salad', 'Fresh tomatoes, mozzarella, basil, and olive oil.', 'Mild', 100, '/images/caprese_salad.jpg', 'White wine or soda', 'Hyderabad', true),
-- Non-Vegetarian Products (30)
('Hyderabadi Biryani', 'stuff', 'Rice Dish', 'Iconic basmati rice layered with spiced mutton, slow-cooked in dum style.', 'Spicy', 250, '/images/hyderabadi_biryani.jpg', 'Raita or mirchi ka salan, pairs with mandu', 'Hyderabad', false),
('Ankapur Kodi Kura', 'stuff', 'Curry', 'Fiery chicken curry from Ankapur, burnt over flame and spiced.', 'Very Spicy', 200, '/images/ankapur_kodi_kura.jpg', 'Rice or jonna roti, great with mandu', 'Telangana', false),
('Kodi Pulusu', 'stuff', 'Curry', 'Spicy chicken curry with tamarind and red chilies.', 'Very Spicy', 180, '/images/kodi_pulusu.jpg', 'Rice or roti', 'Telangana', false),
('Mamsam Pulusu', 'stuff', 'Curry', 'Succulent mutton in thick tamarind-based gravy, slow-cooked.', 'Spicy', 220, '/images/mamsam_pulusu.jpg', 'Rice or dosa', 'Telangana', false),
('Chinta Chiguru Mamsam', 'stuff', 'Curry', 'Mutton cooked with tender tamarind leaves, unique tangy flavor.', 'Spicy', 230, '/images/chinta_chiguru_mamsam.jpg', 'Rice or jonna roti', 'Telangana', false),
('Kodi Bhuna Masala', 'stuff', 'Curry', 'Chicken seared with roasted spices, cooked on low flame.', 'Spicy', 190, '/images/kodi_bhuna_masala.jpg', 'Naan or rice, pairs with mandu', 'Telangana', false),
('Boti Kebab', 'stuff', 'Snack', 'Spicy mutton cubes marinated and grilled, Nizam-style.', 'Very Spicy', 150, '/images/boti_kebab.jpg', 'Mint chutney or mandu', 'Hyderabad', false),
('Paya', 'stuff', 'Soup', 'Trotters stew with rich spices, slow-cooked for hours.', 'Spicy', 120, '/images/paya.jpg', 'Naan or rice', 'Hyderabad', false),
('Haleem', 'stuff', 'Stew', 'Slow-cooked stew of mutton, lentils, and wheat, Ramadan special.', 'Medium', 200, '/images/haleem.jpg', 'Naan or as is', 'Hyderabad', false),
('Murgh ka Korma', 'stuff', 'Curry', 'Creamy chicken curry with nuts and spices, Mughal-inspired.', 'Mild', 180, '/images/murgh_ka_korma.jpg', 'Naan or pulao', 'Hyderabad', false),
('Kaleja Vepudu', 'stuff', 'Fry', 'Spicy liver stir-fry with red chilies and curry leaves.', 'Very Spicy', 140, '/images/kaleja_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Ulavacharu', 'stuff', 'Soup', 'Horse gram-based soup with chicken or mutton, tangy and spicy.', 'Spicy', 100, '/images/ulavacharu.jpg', 'Rice or as a side with mandu', 'Telangana', false),
('Guddu Pulusu', 'stuff', 'Curry', 'Egg curry with tamarind and spices, rustic Telangana style.', 'Spicy', 80, '/images/guddu_pulusu.jpg', 'Rice or roti', 'Telangana', false),
('Kodi Vepudu', 'stuff', 'Fry', 'Deep-fried chicken with curry leaves and red chilies.', 'Very Spicy', 170, '/images/kodi_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Mamsam Vepudu', 'stuff', 'Fry', 'Spicy mutton stir-fry with local spices.', 'Very Spicy', 200, '/images/mamsam_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Chepala Pulusu', 'stuff', 'Curry', 'Fish cooked in tangy tamarind gravy with green chilies.', 'Spicy', 180, '/images/chepala_pulusu.jpg', 'Rice or jonna roti', 'Telangana', false),
('Chepala Vepudu', 'stuff', 'Fry', 'Deep-fried fish with spicy masala coating.', 'Very Spicy', 190, '/images/chepala_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Nalli Nihari', 'stuff', 'Stew', 'Slow-cooked mutton shank stew with rich spices.', 'Medium', 220, '/images/nalli_nihari.jpg', 'Naan or rice', 'Hyderabad', false),
('Dalcha', 'stuff', 'Curry', 'Mutton with lentils in a tangy, spicy gravy.', 'Spicy', 200, '/images/dalcha.jpg', 'Biryani or rice', 'Hyderabad', false),
('Pattar ka Gosht', 'stuff', 'Curry', 'Mutton cooked with stone-ground spices, Nizam specialty.', 'Spicy', 230, '/images/pattar_ka_gosht.jpg', 'Naan or rice', 'Hyderabad', false),
('Marag', 'stuff', 'Soup', 'Spicy mutton soup with herbs and spices.', 'Spicy', 120, '/images/marag.jpg', 'Naan or as a side with mandu', 'Hyderabad', false),
('Kodi 65', 'stuff', 'Snack', 'Spicy fried chicken bites, perfect bar snack.', 'Very Spicy', 150, '/images/kodi_65.jpg', 'Mint chutney or mandu', 'Hyderabad', false),
('Mamsam Keema', 'stuff', 'Curry', 'Minced mutton cooked with green chilies and spices.', 'Spicy', 190, '/images/mamsam_keema.jpg', 'Roti or rice', 'Telangana', false),
('Royyala Vepudu', 'stuff', 'Fry', 'Spicy prawn stir-fry with curry leaves and chilies.', 'Very Spicy', 200, '/images/royyala_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Chakna', 'stuff', 'Snack', 'Spicy mutton offal mix, popular with mandu.', 'Very Spicy', 100, '/images/chakna.jpg', 'Mandu or as a bar snack', 'Hyderabad', false),
('Kodi Mandi', 'stuff', 'Rice Dish', 'Yemeni-style chicken with spiced rice, slow-cooked.', 'Medium', 220, '/images/kodi_mandi.jpg', 'Spicy chutney', 'Hyderabad', false),
('Mamsam Mandi', 'stuff', 'Rice Dish', 'Yemeni-style mutton with aromatic rice.', 'Medium', 250, '/images/mamsam_mandi.jpg', 'Spicy chutney', 'Hyderabad', false),
('Bheja Vepudu', 'stuff', 'Fry', 'Spicy brain stir-fry with onions and chilies.', 'Very Spicy', 150, '/images/bheja_vepudu.jpg', 'Roti or mandu', 'Telangana', false),
('Gurda Vepudu', 'stuff', 'Fry', 'Spicy kidney stir-fry with red chilies.', 'Very Spicy', 140, '/images/gurda_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Kodi Kura', 'stuff', 'Curry', 'Traditional Telangana chicken curry with tamarind and spices.', 'Spicy', 180, '/images/kodi_kura.jpg', 'Rice or jonna roti', 'Telangana', false);`)

///inserting water and soda products!

await db.exec(`INSERT INTO products (
    name, category, description, price, originalPrice, image, region,
    volume_ml, is_carbonated, expiry_date
) VALUES
-- Water (15)
('Bisleri Mineral Water', 'water', 'Pure mineral water, Hyderabad’s trusted brand.', 20, 25, '/images/bisleri_water.jpg', 'India', 1000, false, '2026-07-01'),
('Kinley Water', 'water', 'Clean drinking water from Coca-Cola.', 18, 22, '/images/kinley_water.jpg', 'India', 1000, false, '2026-06-15'),
('Aquafina Purified Water', 'water', 'Purified water, crisp and refreshing.', 20, 25, '/images/aquafina_water.jpg', 'India', 1000, false, '2026-08-01'),
('Himalayan Natural Mineral Water', 'water', 'Premium mineral water from Himalayan springs.', 50, 60, '/images/himalayan_water.jpg', 'India', 750, false, '2026-09-01'),
('Evian Natural Spring Water', 'water', 'Imported French spring water, pairs with wine.', 150, 180, '/images/evian_water.jpg', 'France', 750, false, '2026-10-01'),
('Tata Water Plus', 'water', 'Nutrient-enriched water with copper and zinc.', 25, 30, '/images/tata_water_plus.jpg', 'India', 1000, false, '2026-07-15'),
('Bailley Packaged Water', 'water', 'Locally sourced, popular in Telangana.', 15, 20, '/images/bailley_water.jpg', 'Telangana', 1000, false, '2026-06-30'),
('San Pellegrino Still Water', 'water', 'Italian still water, ideal for fine dining.', 120, 140, '/images/san_pellegrino_water.jpg', 'Italy', 750, false, '2026-11-01'),
('Voss Still Water', 'water', 'Norwegian artesian water, sleek bottle.', 200, 250, '/images/voss_water.jpg', 'Norway', 800, false, '2026-12-01'),
('Patanjali Divya Jal', 'water', 'Pure drinking water from Patanjali.', 15, 20, '/images/patanjali_water.jpg', 'India', 1000, false, '2026-07-01'),
('Oxigen Water', 'water', 'Oxygen-enriched water, popular in Hyderabad.', 25, 30, '/images/oxigen_water.jpg', 'India', 1000, false, '2026-08-15'),
('Vedica Himalayan Water', 'water', 'Premium spring water, subtle mineral taste.', 60, 75, '/images/vedica_water.jpg', 'India', 750, false, '2026-09-15'),
('Perrier Still Water', 'water', 'French mineral water, elegant and crisp.', 130, 160, '/images/perrier_water.jpg', 'France', 750, false, '2026-10-15'),
('Fiji Artesian Water', 'water', 'Pure artesian water from Fiji, premium choice.', 180, 220, '/images/fiji_water.jpg', 'Fiji', 500, false, '2026-11-15'),
('B Natural Mineral Water', 'water', 'Pure water from Indian sources, affordable.', 15, 20, '/images/b_natural_water.jpg', 'India', 1000, false, '2026-07-30'),
-- Soda (15)
('Thums Up', 'soda', 'Bold cola, Telangana’s favorite fizz.', 40, 45, '/images/thums_up.jpg', 'India', 750, true, '2026-05-01'),
('Limca', 'soda', 'Lime-flavored sparkling soda, refreshing.', 35, 40, '/images/limca.jpg', 'India', 750, true, '2026-05-15'),
('Sprite', 'soda', 'Lemon-lime soda, crisp and bubbly.', 35, 40, '/images/sprite.jpg', 'India', 750, true, '2026-06-01'),
('Schweppes Tonic Water', 'soda', 'Classic tonic water, perfect for wine spritzers.', 80, 100, '/images/schweppes_tonic.jpg', 'Global', 300, true, '2026-08-01'),
('Coca-Cola', 'soda', 'Iconic cola, great with mandu or meals.', 40, 45, '/images/coca_cola.jpg', 'India', 750, true, '2026-05-30'),
('Fanta Orange', 'soda', 'Zesty orange-flavored soda, vibrant taste.', 35, 40, '/images/fanta_orange.jpg', 'India', 750, true, '2026-06-15'),
('Bovonto', 'soda', 'South Indian grape-flavored soda, unique taste.', 30, 35, '/images/bovonto.jpg', 'Tamil Nadu', 500, true, '2026-07-01'),
('San Pellegrino Sparkling', 'soda', 'Italian sparkling soda, pairs with wine.', 120, 150, '/images/san_pellegrino_sparkling.jpg', 'Italy', 500, true, '2026-09-01'),
('Mirinda', 'soda', 'Orange soda with a tangy kick, Hyderabad favorite.', 35, 40, '/images/mirinda.jpg', 'India', 750, true, '2026-06-30'),
('Ginger Ale', 'soda', 'Spicy ginger soda, great mixer for wine cocktails.', 70, 85, '/images/ginger_ale.jpg', 'Global', 300, true, '2026-08-15'),
('Maaza Mango', 'soda', 'Mango-flavored soda, non-carbonated, sweet.', 40, 45, '/images/maaza_mango.jpg', 'India', 600, false, '2026-07-15'),
('Appy Fizz', 'soda', 'Apple-flavored sparkling drink, youthful vibe.', 35, 40, '/images/appy_fizz.jpg', 'India', 500, true, '2026-06-15'),
('7Up', 'soda', 'Lemon-lime soda, refreshing and light.', 35, 40, '/images/7up.jpg', 'India', 750, true, '2026-06-01'),
('Pepsi', 'soda', 'Classic cola, bold and fizzy.', 40, 45, '/images/pepsi.jpg', 'India', 750, true, '2026-05-30'),
('Schweppes Ginger Beer', 'soda', 'Spicy ginger beer, perfect for cocktails.', 90, 110, '/images/schweppes_ginger_beer.jpg', 'Global', 300, true, '2026-08-30');`)


///inserting cigars products 

await db.exec(`INSERT INTO products (
    name, category, description, price, originalPrice, image, region,
    nicotine_strength, length_cm, flavor
) VALUES
-- Premium Cigars (10)
('Cohiba Siglo VI', 'cigar', 'Premium Cuban cigar with rich, creamy notes.', 2500, 3000, '/images/cohiba_siglo_vi.jpg', 'Cuba', 'Medium', 15.0, 'Woody, Creamy'),
('Montecristo No. 2', 'cigar', 'Classic Cuban cigar with spicy, earthy tones.', 2000, 2400, '/images/montecristo_no2.jpg', 'Cuba', 'Medium-Full', 15.6, 'Spicy, Earthy'),
('Romeo y Julieta Churchill', 'cigar', 'Smooth Cuban cigar with floral and nutty flavors.', 2200, 2600, '/images/romeo_julieta_churchill.jpg', 'Cuba', 'Medium', 17.8, 'Floral, Nutty'),
('Partagas Serie D No. 4', 'cigar', 'Bold Cuban cigar with peppery, woody notes.', 1800, 2100, '/images/partagas_serie_d.jpg', 'Cuba', 'Full', 12.4, 'Peppery, Woody'),
('Davidoff Winston Churchill', 'cigar', 'Premium cigar with leather and coffee notes.', 3000, 3500, '/images/davidoff_churchill.jpg', 'Dominican Republic', 'Medium', 17.0, 'Leather, Coffee'),
('Arturo Fuente Opus X', 'cigar', 'Rich Dominican cigar with sweet, spicy flavors.', 2800, 3200, '/images/arturo_fuente_opus_x.jpg', 'Dominican Republic', 'Full', 14.3, 'Sweet, Spicy'),
('Padron 1964 Anniversary', 'cigar', 'Nicaraguan cigar with cocoa and nutty profile.', 2500, 2900, '/images/padron_1964.jpg', 'Nicaragua', 'Medium-Full', 14.0, 'Cocoa, Nutty'),
('Ashton VSG Robusto', 'cigar', 'Dominican cigar with bold, earthy flavors.', 2000, 2300, '/images/ashton_vsg.jpg', 'Dominican Republic', 'Full', 13.3, 'Earthy, Peppery'),
('H. Upmann Magnum 50', 'cigar', 'Cuban cigar with smooth, creamy texture.', 2100, 2500, '/images/h_upmann_magnum.jpg', 'Cuba', 'Medium', 16.0, 'Creamy, Cedar'),
('Rocky Patel Decade', 'cigar', 'Honduran cigar with chocolate and spice notes.', 1800, 2100, '/images/rocky_patel_decade.jpg', 'Honduras', 'Medium-Full', 13.3, 'Chocolate, Spice'),
-- Local Cigarettes (15, Pan Dabba Vibe, Including Editions)
('Gold Flake Kings', 'cigar', 'Rich tobacco flavor, Telangana’s top cigarette.', 18, 22, '/images/gold_flake_kings.jpg', 'India', 'Medium', 8.4, 'Rich, Tobacco'),
('Classic Milds', 'cigar', 'Smooth cigarette, popular in Hyderabad pan shops.', 15, 18, '/images/classic_milds.jpg', 'India', 'Mild', 8.4, 'Smooth, Tobacco'),
('Wills Navy Cut', 'cigar', 'Classic Indian cigarette, bold and iconic.', 16, 20, '/images/wills_navy_cut.jpg', 'India', 'Medium', 8.4, 'Bold, Tobacco'),
('Charminar', 'cigar', 'Hyderabad’s iconic cigarette, strong flavor.', 15, 18, '/images/charminar.jpg', 'India', 'Medium-Full', 8.4, 'Bold, Tobacco'),
('Four Square', 'cigar', 'Affordable cigarette, common in Telangana pan dabbas.', 12, 15, '/images/four_square.jpg', 'India', 'Medium', 8.4, 'Mild, Tobacco'),
('Editions', 'cigar', 'VST’s smooth cigarette, popular in South India.', 14, 17, '/images/editions.jpg', 'India', 'Mild', 8.4, 'Smooth, Tobacco'),
('Marlboro Red', 'cigar', 'Global brand, robust flavor, available in Hyd.', 20, 25, '/images/marlboro_red.jpg', 'India', 'Full', 8.4, 'Strong, Tobacco'),
('Bristol', 'cigar', 'Budget cigarette, widely smoked in Telangana.', 10, 12, '/images/bristol.jpg', 'India', 'Mild', 8.4, 'Light, Tobacco'),
('Scissors', 'cigar', 'ITC’s classic cigarette, smooth taste.', 14, 17, '/images/scissors.jpg', 'India', 'Medium', 8.4, 'Smooth, Tobacco'),
('Cavanders Gold', 'cigar', 'Godfrey Phillips’ filter cigarette, coastal favorite.', 13, 16, '/images/cavanders_gold.jpg', 'India', 'Mild', 8.4, 'Light, Tobacco'),
('Panama', 'cigar', 'Golden Tobacco’s niche cigarette, bold taste.', 15, 18, '/images/panama.jpg', 'India', 'Medium', 8.4, 'Rich, Tobacco'),
('Capstan', 'cigar', 'ITC’s traditional cigarette, strong flavor.', 14, 17, '/images/capstan.jpg', 'India', 'Medium', 8.4, 'Bold, Tobacco'),
('Gold Flake Lights', 'cigar', 'Lighter version of Gold Flake, popular in Hyd.', 15, 18, '/images/gold_flake_lights.jpg', 'India', 'Mild', 8.4, 'Light, Tobacco'),
('Red & White', 'cigar', 'Godfrey Phillips’ budget cigarette, widely available.', 12, 15, '/images/red_white.jpg', 'India', 'Medium', 8.4, 'Mild, Tobacco'),
('Chancellor', 'cigar', 'Golden Tobacco’s classic cigarette, niche in Telangana.', 13, 16, '/images/chancellor.jpg', 'India', 'Medium', 8.4, 'Smooth, Tobacco');`)
    

}
     

        else{
            console.log("products already  vunnai ra ungamma!!")
        }

      

    }
    else{
                let  isExist= await db.all(`SELECT * FROM products`)

                if (isExist.length===0){
                //// inserting wine products

                await db.exec(`
                    INSERT INTO products (name, price, originalPrice, image, description, vintage, region, type, rating, category, inStock) VALUES
                    ('Budweiser Magnum', 180, 200, '/images/wine3.png', 'Smooth strong lager beer.', '2022', 'India', 'Beer', 4.2, 'beer', 1),
                    ('Tuborg Strong', 120, 140, '/images/wine3.png', 'Classic strong beer.', '2022', 'India', 'Beer', 4.0, 'beer', 1),
                    ('Royal Stag', 500, 550, '/images/wine3.png', 'Popular Indian whisky.', '2021', 'India', 'Whisky', 4.3, 'whisky', 1),
                    ('100 Pipers', 850, 900, '/images/wine3.png', 'Premium blended Scotch.', '2021', 'Scotland', 'Whisky', 4.6, 'whisky', 1),
                    ('McDowell\''s No.1', 400, 450, '/images/wine3.png', 'Smooth Indian whisky.', '2020', 'India', 'Whisky', 4.1, 'whisky', 1),
                    ('Sula Chenin Blanc', 750, 799, '/images/wine3.png', 'Fruity Indian white wine.', '2021', 'Nashik', 'Wine', 4.3, 'wine', 1),
                    ('Kingfisher Premium', 110, 130, '/images/wine3.png', 'Iconic Indian lager.', '2022', 'India', 'Beer', 4.0, 'beer', 1),
                    ('Bira 91 Blonde', 160, 180, '/images/wine3.png', 'Smooth craft beer.', '2022', 'India', 'Beer', 4.4, 'beer', 1),
                    ('Amrut Fusion', 3400, 3600, '/images/wine3.png', 'Indian single malt whisky.', '2019', 'India', 'Whisky', 4.7, 'whisky', 1),
                    ('Old Monk', 300, 350, '/images/wine3.png', 'Classic Indian dark rum.', '2020', 'India', 'Rum', 4.5, 'rum', 1),
                    ('Blenders Pride', 750, 800, '/images/wine3.png', 'Premium Indian whisky.', '2021', 'India', 'Whisky', 4.4, 'whisky', 1),
                    ('Magic Moments', 500, 530, '/images/wine3.png', 'Popular Indian vodka.', '2021', 'India', 'Vodka', 4.1, 'vodka', 1),
                    ('Smirnoff Red', 900, 950, '/images/wine3.png', 'Well-known vodka brand.', '2022', 'Russia', 'Vodka', 4.4, 'vodka', 1),
                    ('Hennessy VS', 4500, 5000, '/images/wine3.png', 'Premium Cognac.', '2020', 'France', 'Cognac', 4.8, 'brandy', 1),
                    ('Jacob\''s Creek Shiraz', 1100, 1300, '/images/wine3.png', 'Australian red wine.', '2019', 'Australia', 'Wine', 4.5, 'wine', 1),
                    ('KRSMA Cabernet', 2500, 2800, '/images/wine3.png', 'Indian red wine.', '2018', 'India', 'Wine', 4.6, 'wine', 1),
                    ('Carlsberg Elephant', 190, 210, '/images/wine3.png', 'Strong Danish beer.', '2022', 'Denmark', 'Beer', 4.1, 'beer', 1),
                    ('Beck\''s Ice', 150, 170, '/images/wine3.png', 'Light crisp beer.', '2022', 'Germany', 'Beer', 4.0, 'beer', 1),
                    ('Heineken', 180, 200, '/images/wine3.png', 'Popular international beer.', '2022', 'Netherlands', 'Beer', 4.3, 'beer', 1),
                    ('Paul John Brilliance', 3100, 3300, '/images/wine3.png', 'Indian single malt.', '2019', 'Goa', 'Whisky', 4.7, 'whisky', 1),
                    ('Black Dog', 1300, 1450, '/images/wine3.png', 'Premium Indian Scotch.', '2021', 'India', 'Whisky', 4.5, 'whisky', 1),
                    ('Imperial Blue', 380, 400, '/images/wine3.png', 'Popular affordable whisky.', '2021', 'India', 'Whisky', 4.0, 'whisky', 1),
                    ('Haywards 5000', 100, 120, '/images/wine3.png', 'Strong Indian beer.', '2022', 'India', 'Beer', 4.0, 'beer', 1),
                    ('Signature Premium', 950, 999, '/images/wine3.png', 'Premium Indian whisky.', '2021', 'India', 'Whisky', 4.4, 'whisky', 1),
                    ('Royal Challenge', 430, 460, '/images/wine3.png', 'Indian whisky.', '2021', 'India', 'Whisky', 4.2, 'whisky', 1),
                    ('Antiquity Blue', 850, 880, '/images/wine3.png', 'Indian grain whisky.', '2021', 'India', 'Whisky', 4.4, 'whisky', 1),
                    ('Morpheus Brandy', 600, 650, '/images/wine3.png', 'Smooth Indian brandy.', '2021', 'India', 'Brandy', 4.3, 'brandy', 1),
                    ('Johnnie Walker Red', 1800, 1900, '/images/wine3.png', 'Scotch whisky.', '2020', 'Scotland', 'Whisky', 4.6, 'whisky', 1),
                    ('Teacher\''s Highland Cream', 1300, 1350, '/images/wine3.png', 'Blended Scotch whisky.', '2020', 'Scotland', 'Whisky', 4.5, 'whisky', 1),
                    ('White Mischief', 250, 280, '/images/wine3.png', 'Indian vodka.', '2021', 'India', 'Vodka', 3.9, 'vodka', 1)
                  
                `);
                ////inserting st
     await db.exec(`INSERT INTO products (name, category, type, description, spice_level, price, image, best_with, region, isVeg)
VALUES
-- Vegetarian Products (30, Wine-Friendly)
('Gongura Pachadi', 'stuff', 'Pickle', 'Tangy sorrel leaves pickle with red chilies and garlic.', 'Very Spicy', 40, '/images/gongura_pachadi.jpg', 'Red wine or mandu, pairs with cheese board', 'Telangana', true),
('Mirchi Bajji', 'stuff', 'Snack', 'Banana peppers stuffed with potato, coated in flour, deep-fried.', 'Very Spicy', 30, '/images/mirchi_bajji.jpg', 'White wine or mandu', 'Hyderabad', true),
('Sakinalu', 'stuff', 'Snack', 'Crispy rice flour snack with sesame and carom seeds.', 'Mild', 60, '/images/sakinalu.jpg', 'Rosé wine or mandu', 'Northern Telangana', true),
('Chegodilu', 'stuff', 'Snack', 'Crunchy ring-shaped rice flour snack with chili powder.', 'Medium', 40, '/images/chegodilu.jpg', 'Sparkling wine or mandu', 'Telangana', true),
('Cheese Platter', 'stuff', 'Appetizer', 'Assorted cheeses (cheddar, brie, gouda) with nuts and grapes.', 'Mild', 250, '/images/cheese_platter.jpg', 'Red or white wine', 'Hyderabad', true),
('Pesarattu Chips', 'stuff', 'Snack', 'Crispy green gram pancakes broken into chips.', 'Medium', 50, '/images/pesarattu_chips.jpg', 'White wine or mandu', 'Telangana', true),
('Aloogadda Pakodi', 'stuff', 'Snack', 'Spicy potato fritters with green chilies and curry leaves.', 'Spicy', 35, '/images/aloogadda_pakodi.jpg', 'Rosé wine or mandu', 'Telangana', true),
('Stuffed Mushrooms', 'stuff', 'Appetizer', 'Mushrooms stuffed with paneer and spices, baked.', 'Mild', 120, '/images/stuffed_mushrooms.jpg', 'White wine or sparkling wine', 'Hyderabad', true),
('Guntur Chili Poppers', 'stuff', 'Snack', 'Spicy chili poppers with cream cheese filling.', 'Very Spicy', 80, '/images/guntur_poppers.jpg', 'White wine or mandu', 'Telangana', true),
('Jeedi Pappu Vepudu', 'stuff', 'Snack', 'Salted roasted cashews with chili powder dusting.', 'Mild', 100, '/images/jeedi_pappu_vepudu.jpg', 'Red wine or mandu', 'Telangana', true),
('Avocado Salad', 'stuff', 'Salad', 'Fresh avocado with onions, tomatoes, and lemon dressing.', 'Mild', 90, '/images/avocado_salad.jpg', 'White wine or soda', 'Hyderabad', true),
('Mokka Jonna Chaat', 'stuff', 'Snack', 'Roasted corn with butter, chili, and lemon.', 'Spicy', 40, '/images/mokka_jonna_chaat.jpg', 'Sparkling wine or mandu', 'Telangana', true),
('Paneer Tikka', 'stuff', 'Appetizer', 'Marinated paneer cubes grilled with spices.', 'Medium', 150, '/images/paneer_tikka.jpg', 'Red wine or soda', 'Hyderabad', true),
('Dosakaya Pachadi', 'stuff', 'Pickle', 'Cucumber chutney with tamarind and spices.', 'Spicy', 35, '/images/dosakaya_pachadi.jpg', 'White wine or mandu', 'Telangana', true),
('Pottu Pachadi', 'stuff', 'Pickle', 'Ridge and bottle gourd peel chutney, tangy and spicy.', 'Spicy', 40, '/images/pottu_pachadi.jpg', 'Rosé wine or mandu', 'Telangana', true),
('Bendakaya Vepudu', 'stuff', 'Snack', 'Deep-fried okra with Telangana spices.', 'Spicy', 60, '/images/bendakaya_vepudu.jpg', 'White wine or mandu', 'Telangana', true),
('Verusenaga Masala', 'stuff', 'Snack', 'Fried peanuts with chili powder and curry leaves.', 'Spicy', 30, '/images/verusenaga_masala.jpg', 'Mandu or beer', 'Telangana', true),
('Kura Vegetables Skewers', 'stuff', 'Appetizer', 'Grilled bell peppers, onions, and paneer skewers.', 'Medium', 100, '/images/kura_vegetables_skewers.jpg', 'Red wine or soda', 'Hyderabad', true),
('Pappadam', 'stuff', 'Snack', 'Crispy lentil wafers, lightly spiced.', 'Mild', 20, '/images/pappadam.jpg', 'White wine or mandu', 'Telangana', true),
('Tamata Pachadi', 'stuff', 'Pickle', 'Spicy tomato chutney with garlic and red chilies.', 'Spicy', 35, '/images/tamata_pachadi.jpg', 'Rosé wine or mandu', 'Telangana', true),
('Palakura Pakodi', 'stuff', 'Snack', 'Crispy spinach fritters with besan and spices.', 'Spicy', 40, '/images/palakura_pakodi.jpg', 'White wine or mandu', 'Telangana', true),
('Pandla Platter', 'stuff', 'Appetizer', 'Assorted fruits (grapes, apples, pineapple) for wine pairing.', 'Mild', 80, '/images/pandla_platter.jpg', 'White or sparkling wine', 'Hyderabad', true),
('Garlic Bread', 'stuff', 'Appetizer', 'Toasted bread with garlic butter and herbs.', 'Mild', 60, '/images/garlic_bread.jpg', 'Red wine or soda', 'Hyderabad', true),
('Mixed Nuts', 'stuff', 'Snack', 'Assorted roasted nuts (almonds, walnuts, cashews).', 'Mild', 120, '/images/mixed_nuts.jpg', 'Red wine or mandu', 'Telangana', true),
('Kheera Perugu', 'stuff', 'Side', 'Cool yogurt with cucumber and mild spices.', 'Mild', 40, '/images/kheera_perugu.jpg', 'White wine or soda', 'Hyderabad', true),
('Ullipaya Pakodi', 'stuff', 'Snack', 'Crispy onion fritters with green chilies.', 'Spicy', 35, '/images/ullipaya_pakodi.jpg', 'Mandu or rosé wine', 'Telangana', true),
('Bruschetta', 'stuff', 'Appetizer', 'Toasted bread with tomato, basil, and olive oil.', 'Mild', 80, '/images/bruschetta.jpg', 'White wine or soda', 'Hyderabad', true),
('Veg Cutlet', 'stuff', 'Snack', 'Crispy vegetable patties with mashed potatoes and spices.', 'Medium', 50, '/images/veg_cutlet.jpg', 'White wine or mandu', 'Telangana', true),
('Senaga Pappu Vepudu', 'stuff', 'Snack', 'Spicy roasted chickpeas with Telangana masala.', 'Spicy', 30, '/images/senaga_pappu_vepudu.jpg', 'Mandu or beer', 'Telangana', true),
('Caprese Salad', 'stuff', 'Salad', 'Fresh tomatoes, mozzarella, basil, and olive oil.', 'Mild', 100, '/images/caprese_salad.jpg', 'White wine or soda', 'Hyderabad', true),
-- Non-Vegetarian Products (30)
('Hyderabadi Biryani', 'stuff', 'Rice Dish', 'Iconic basmati rice layered with spiced mutton, slow-cooked in dum style.', 'Spicy', 250, '/images/hyderabadi_biryani.jpg', 'Raita or mirchi ka salan, pairs with mandu', 'Hyderabad', false),
('Ankapur Kodi Kura', 'stuff', 'Curry', 'Fiery chicken curry from Ankapur, burnt over flame and spiced.', 'Very Spicy', 200, '/images/ankapur_kodi_kura.jpg', 'Rice or jonna roti, great with mandu', 'Telangana', false),
('Kodi Pulusu', 'stuff', 'Curry', 'Spicy chicken curry with tamarind and red chilies.', 'Very Spicy', 180, '/images/kodi_pulusu.jpg', 'Rice or roti', 'Telangana', false),
('Mamsam Pulusu', 'stuff', 'Curry', 'Succulent mutton in thick tamarind-based gravy, slow-cooked.', 'Spicy', 220, '/images/mamsam_pulusu.jpg', 'Rice or dosa', 'Telangana', false),
('Chinta Chiguru Mamsam', 'stuff', 'Curry', 'Mutton cooked with tender tamarind leaves, unique tangy flavor.', 'Spicy', 230, '/images/chinta_chiguru_mamsam.jpg', 'Rice or jonna roti', 'Telangana', false),
('Kodi Bhuna Masala', 'stuff', 'Curry', 'Chicken seared with roasted spices, cooked on low flame.', 'Spicy', 190, '/images/kodi_bhuna_masala.jpg', 'Naan or rice, pairs with mandu', 'Telangana', false),
('Boti Kebab', 'stuff', 'Snack', 'Spicy mutton cubes marinated and grilled, Nizam-style.', 'Very Spicy', 150, '/images/boti_kebab.jpg', 'Mint chutney or mandu', 'Hyderabad', false),
('Paya', 'stuff', 'Soup', 'Trotters stew with rich spices, slow-cooked for hours.', 'Spicy', 120, '/images/paya.jpg', 'Naan or rice', 'Hyderabad', false),
('Haleem', 'stuff', 'Stew', 'Slow-cooked stew of mutton, lentils, and wheat, Ramadan special.', 'Medium', 200, '/images/haleem.jpg', 'Naan or as is', 'Hyderabad', false),
('Murgh ka Korma', 'stuff', 'Curry', 'Creamy chicken curry with nuts and spices, Mughal-inspired.', 'Mild', 180, '/images/murgh_ka_korma.jpg', 'Naan or pulao', 'Hyderabad', false),
('Kaleja Vepudu', 'stuff', 'Fry', 'Spicy liver stir-fry with red chilies and curry leaves.', 'Very Spicy', 140, '/images/kaleja_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Ulavacharu', 'stuff', 'Soup', 'Horse gram-based soup with chicken or mutton, tangy and spicy.', 'Spicy', 100, '/images/ulavacharu.jpg', 'Rice or as a side with mandu', 'Telangana', false),
('Guddu Pulusu', 'stuff', 'Curry', 'Egg curry with tamarind and spices, rustic Telangana style.', 'Spicy', 80, '/images/guddu_pulusu.jpg', 'Rice or roti', 'Telangana', false),
('Kodi Vepudu', 'stuff', 'Fry', 'Deep-fried chicken with curry leaves and red chilies.', 'Very Spicy', 170, '/images/kodi_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Mamsam Vepudu', 'stuff', 'Fry', 'Spicy mutton stir-fry with local spices.', 'Very Spicy', 200, '/images/mamsam_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Chepala Pulusu', 'stuff', 'Curry', 'Fish cooked in tangy tamarind gravy with green chilies.', 'Spicy', 180, '/images/chepala_pulusu.jpg', 'Rice or jonna roti', 'Telangana', false),
('Chepala Vepudu', 'stuff', 'Fry', 'Deep-fried fish with spicy masala coating.', 'Very Spicy', 190, '/images/chepala_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Nalli Nihari', 'stuff', 'Stew', 'Slow-cooked mutton shank stew with rich spices.', 'Medium', 220, '/images/nalli_nihari.jpg', 'Naan or rice', 'Hyderabad', false),
('Dalcha', 'stuff', 'Curry', 'Mutton with lentils in a tangy, spicy gravy.', 'Spicy', 200, '/images/dalcha.jpg', 'Biryani or rice', 'Hyderabad', false),
('Pattar ka Gosht', 'stuff', 'Curry', 'Mutton cooked with stone-ground spices, Nizam specialty.', 'Spicy', 230, '/images/pattar_ka_gosht.jpg', 'Naan or rice', 'Hyderabad', false),
('Marag', 'stuff', 'Soup', 'Spicy mutton soup with herbs and spices.', 'Spicy', 120, '/images/marag.jpg', 'Naan or as a side with mandu', 'Hyderabad', false),
('Kodi 65', 'stuff', 'Snack', 'Spicy fried chicken bites, perfect bar snack.', 'Very Spicy', 150, '/images/kodi_65.jpg', 'Mint chutney or mandu', 'Hyderabad', false),
('Mamsam Keema', 'stuff', 'Curry', 'Minced mutton cooked with green chilies and spices.', 'Spicy', 190, '/images/mamsam_keema.jpg', 'Roti or rice', 'Telangana', false),
('Royyala Vepudu', 'stuff', 'Fry', 'Spicy prawn stir-fry with curry leaves and chilies.', 'Very Spicy', 200, '/images/royyala_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Chakna', 'stuff', 'Snack', 'Spicy mutton offal mix, popular with mandu.', 'Very Spicy', 100, '/images/chakna.jpg', 'Mandu or as a bar snack', 'Hyderabad', false),
('Kodi Mandi', 'stuff', 'Rice Dish', 'Yemeni-style chicken with spiced rice, slow-cooked.', 'Medium', 220, '/images/kodi_mandi.jpg', 'Spicy chutney', 'Hyderabad', false),
('Mamsam Mandi', 'stuff', 'Rice Dish', 'Yemeni-style mutton with aromatic rice.', 'Medium', 250, '/images/mamsam_mandi.jpg', 'Spicy chutney', 'Hyderabad', false),
('Bheja Vepudu', 'stuff', 'Fry', 'Spicy brain stir-fry with onions and chilies.', 'Very Spicy', 150, '/images/bheja_vepudu.jpg', 'Roti or mandu', 'Telangana', false),
('Gurda Vepudu', 'stuff', 'Fry', 'Spicy kidney stir-fry with red chilies.', 'Very Spicy', 140, '/images/gurda_vepudu.jpg', 'Rice or mandu', 'Telangana', false),
('Kodi Kura', 'stuff', 'Curry', 'Traditional Telangana chicken curry with tamarind and spices.', 'Spicy', 180, '/images/kodi_kura.jpg', 'Rice or jonna roti', 'Telangana', false);`)
  
///inserting water and soda  products

await db.exec(`INSERT INTO products (
    name, category, description, price, originalPrice, image, region,
    volume_ml, is_carbonated, expiry_date
) VALUES
-- Water (15)
('Bisleri Mineral Water', 'water', 'Pure mineral water, Hyderabad’s trusted brand.', 20, 25, '/images/bisleri_water.jpg', 'India', 1000, false, '2026-07-01'),
('Kinley Water', 'water', 'Clean drinking water from Coca-Cola.', 18, 22, '/images/kinley_water.jpg', 'India', 1000, false, '2026-06-15'),
('Aquafina Purified Water', 'water', 'Purified water, crisp and refreshing.', 20, 25, '/images/aquafina_water.jpg', 'India', 1000, false, '2026-08-01'),
('Himalayan Natural Mineral Water', 'water', 'Premium mineral water from Himalayan springs.', 50, 60, '/images/himalayan_water.jpg', 'India', 750, false, '2026-09-01'),
('Evian Natural Spring Water', 'water', 'Imported French spring water, pairs with wine.', 150, 180, '/images/evian_water.jpg', 'France', 750, false, '2026-10-01'),
('Tata Water Plus', 'water', 'Nutrient-enriched water with copper and zinc.', 25, 30, '/images/tata_water_plus.jpg', 'India', 1000, false, '2026-07-15'),
('Bailley Packaged Water', 'water', 'Locally sourced, popular in Telangana.', 15, 20, '/images/bailley_water.jpg', 'Telangana', 1000, false, '2026-06-30'),
('San Pellegrino Still Water', 'water', 'Italian still water, ideal for fine dining.', 120, 140, '/images/san_pellegrino_water.jpg', 'Italy', 750, false, '2026-11-01'),
('Voss Still Water', 'water', 'Norwegian artesian water, sleek bottle.', 200, 250, '/images/voss_water.jpg', 'Norway', 800, false, '2026-12-01'),
('Patanjali Divya Jal', 'water', 'Pure drinking water from Patanjali.', 15, 20, '/images/patanjali_water.jpg', 'India', 1000, false, '2026-07-01'),
('Oxigen Water', 'water', 'Oxygen-enriched water, popular in Hyderabad.', 25, 30, '/images/oxigen_water.jpg', 'India', 1000, false, '2026-08-15'),
('Vedica Himalayan Water', 'water', 'Premium spring water, subtle mineral taste.', 60, 75, '/images/vedica_water.jpg', 'India', 750, false, '2026-09-15'),
('Perrier Still Water', 'water', 'French mineral water, elegant and crisp.', 130, 160, '/images/perrier_water.jpg', 'France', 750, false, '2026-10-15'),
('Fiji Artesian Water', 'water', 'Pure artesian water from Fiji, premium choice.', 180, 220, '/images/fiji_water.jpg', 'Fiji', 500, false, '2026-11-15'),
('B Natural Mineral Water', 'water', 'Pure water from Indian sources, affordable.', 15, 20, '/images/b_natural_water.jpg', 'India', 1000, false, '2026-07-30'),
-- Soda (15)
('Thums Up', 'soda', 'Bold cola, Telangana’s favorite fizz.', 40, 45, '/images/thums_up.jpg', 'India', 750, true, '2026-05-01'),
('Limca', 'soda', 'Lime-flavored sparkling soda, refreshing.', 35, 40, '/images/limca.jpg', 'India', 750, true, '2026-05-15'),
('Sprite', 'soda', 'Lemon-lime soda, crisp and bubbly.', 35, 40, '/images/sprite.jpg', 'India', 750, true, '2026-06-01'),
('Schweppes Tonic Water', 'soda', 'Classic tonic water, perfect for wine spritzers.', 80, 100, '/images/schweppes_tonic.jpg', 'Global', 300, true, '2026-08-01'),
('Coca-Cola', 'soda', 'Iconic cola, great with mandu or meals.', 40, 45, '/images/coca_cola.jpg', 'India', 750, true, '2026-05-30'),
('Fanta Orange', 'soda', 'Zesty orange-flavored soda, vibrant taste.', 35, 40, '/images/fanta_orange.jpg', 'India', 750, true, '2026-06-15'),
('Bovonto', 'soda', 'South Indian grape-flavored soda, unique taste.', 30, 35, '/images/bovonto.jpg', 'Tamil Nadu', 500, true, '2026-07-01'),
('San Pellegrino Sparkling', 'soda', 'Italian sparkling soda, pairs with wine.', 120, 150, '/images/san_pellegrino_sparkling.jpg', 'Italy', 500, true, '2026-09-01'),
('Mirinda', 'soda', 'Orange soda with a tangy kick, Hyderabad favorite.', 35, 40, '/images/mirinda.jpg', 'India', 750, true, '2026-06-30'),
('Ginger Ale', 'soda', 'Spicy ginger soda, great mixer for wine cocktails.', 70, 85, '/images/ginger_ale.jpg', 'Global', 300, true, '2026-08-15'),
('Maaza Mango', 'soda', 'Mango-flavored soda, non-carbonated, sweet.', 40, 45, '/images/maaza_mango.jpg', 'India', 600, false, '2026-07-15'),
('Appy Fizz', 'soda', 'Apple-flavored sparkling drink, youthful vibe.', 35, 40, '/images/appy_fizz.jpg', 'India', 500, true, '2026-06-15'),
('7Up', 'soda', 'Lemon-lime soda, refreshing and light.', 35, 40, '/images/7up.jpg', 'India', 750, true, '2026-06-01'),
('Pepsi', 'soda', 'Classic cola, bold and fizzy.', 40, 45, '/images/pepsi.jpg', 'India', 750, true, '2026-05-30'),
('Schweppes Ginger Beer', 'soda', 'Spicy ginger beer, perfect for cocktails.', 90, 110, '/images/schweppes_ginger_beer.jpg', 'Global', 300, true, '2026-08-30');`)


///inserting cigars products
await db.exec(`INSERT INTO products (
    name, category, description, price, originalPrice, image, region,
    nicotine_strength, length_cm, flavor
) VALUES
-- Premium Cigars (10)
('Cohiba Siglo VI', 'cigar', 'Premium Cuban cigar with rich, creamy notes.', 2500, 3000, '/images/cohiba_siglo_vi.jpg', 'Cuba', 'Medium', 15.0, 'Woody, Creamy'),
('Montecristo No. 2', 'cigar', 'Classic Cuban cigar with spicy, earthy tones.', 2000, 2400, '/images/montecristo_no2.jpg', 'Cuba', 'Medium-Full', 15.6, 'Spicy, Earthy'),
('Romeo y Julieta Churchill', 'cigar', 'Smooth Cuban cigar with floral and nutty flavors.', 2200, 2600, '/images/romeo_julieta_churchill.jpg', 'Cuba', 'Medium', 17.8, 'Floral, Nutty'),
('Partagas Serie D No. 4', 'cigar', 'Bold Cuban cigar with peppery, woody notes.', 1800, 2100, '/images/partagas_serie_d.jpg', 'Cuba', 'Full', 12.4, 'Peppery, Woody'),
('Davidoff Winston Churchill', 'cigar', 'Premium cigar with leather and coffee notes.', 3000, 3500, '/images/davidoff_churchill.jpg', 'Dominican Republic', 'Medium', 17.0, 'Leather, Coffee'),
('Arturo Fuente Opus X', 'cigar', 'Rich Dominican cigar with sweet, spicy flavors.', 2800, 3200, '/images/arturo_fuente_opus_x.jpg', 'Dominican Republic', 'Full', 14.3, 'Sweet, Spicy'),
('Padron 1964 Anniversary', 'cigar', 'Nicaraguan cigar with cocoa and nutty profile.', 2500, 2900, '/images/padron_1964.jpg', 'Nicaragua', 'Medium-Full', 14.0, 'Cocoa, Nutty'),
('Ashton VSG Robusto', 'cigar', 'Dominican cigar with bold, earthy flavors.', 2000, 2300, '/images/ashton_vsg.jpg', 'Dominican Republic', 'Full', 13.3, 'Earthy, Peppery'),
('H. Upmann Magnum 50', 'cigar', 'Cuban cigar with smooth, creamy texture.', 2100, 2500, '/images/h_upmann_magnum.jpg', 'Cuba', 'Medium', 16.0, 'Creamy, Cedar'),
('Rocky Patel Decade', 'cigar', 'Honduran cigar with chocolate and spice notes.', 1800, 2100, '/images/rocky_patel_decade.jpg', 'Honduras', 'Medium-Full', 13.3, 'Chocolate, Spice'),
-- Local Cigarettes (15, Pan Dabba Vibe, Including Editions)
('Gold Flake Kings', 'cigar', 'Rich tobacco flavor, Telangana’s top cigarette.', 18, 22, '/images/gold_flake_kings.jpg', 'India', 'Medium', 8.4, 'Rich, Tobacco'),
('Classic Milds', 'cigar', 'Smooth cigarette, popular in Hyderabad pan shops.', 15, 18, '/images/classic_milds.jpg', 'India', 'Mild', 8.4, 'Smooth, Tobacco'),
('Wills Navy Cut', 'cigar', 'Classic Indian cigarette, bold and iconic.', 16, 20, '/images/wills_navy_cut.jpg', 'India', 'Medium', 8.4, 'Bold, Tobacco'),
('Charminar', 'cigar', 'Hyderabad’s iconic cigarette, strong flavor.', 15, 18, '/images/charminar.jpg', 'India', 'Medium-Full', 8.4, 'Bold, Tobacco'),
('Four Square', 'cigar', 'Affordable cigarette, common in Telangana pan dabbas.', 12, 15, '/images/four_square.jpg', 'India', 'Medium', 8.4, 'Mild, Tobacco'),
('Editions', 'cigar', 'VST’s smooth cigarette, popular in South India.', 14, 17, '/images/editions.jpg', 'India', 'Mild', 8.4, 'Smooth, Tobacco'),
('Marlboro Red', 'cigar', 'Global brand, robust flavor, available in Hyd.', 20, 25, '/images/marlboro_red.jpg', 'India', 'Full', 8.4, 'Strong, Tobacco'),
('Bristol', 'cigar', 'Budget cigarette, widely smoked in Telangana.', 10, 12, '/images/bristol.jpg', 'India', 'Mild', 8.4, 'Light, Tobacco'),
('Scissors', 'cigar', 'ITC’s classic cigarette, smooth taste.', 14, 17, '/images/scissors.jpg', 'India', 'Medium', 8.4, 'Smooth, Tobacco'),
('Cavanders Gold', 'cigar', 'Godfrey Phillips’ filter cigarette, coastal favorite.', 13, 16, '/images/cavanders_gold.jpg', 'India', 'Mild', 8.4, 'Light, Tobacco'),
('Panama', 'cigar', 'Golden Tobacco’s niche cigarette, bold taste.', 15, 18, '/images/panama.jpg', 'India', 'Medium', 8.4, 'Rich, Tobacco'),
('Capstan', 'cigar', 'ITC’s traditional cigarette, strong flavor.', 14, 17, '/images/capstan.jpg', 'India', 'Medium', 8.4, 'Bold, Tobacco'),
('Gold Flake Lights', 'cigar', 'Lighter version of Gold Flake, popular in Hyd.', 15, 18, '/images/gold_flake_lights.jpg', 'India', 'Mild', 8.4, 'Light, Tobacco'),
('Red & White', 'cigar', 'Godfrey Phillips’ budget cigarette, widely available.', 12, 15, '/images/red_white.jpg', 'India', 'Medium', 8.4, 'Mild, Tobacco'),
('Chancellor', 'cigar', 'Golden Tobacco’s classic cigarette, niche in Telangana.', 13, 16, '/images/chancellor.jpg', 'India', 'Medium', 8.4, 'Smooth, Tobacco');`)
    

            }
            else{
                console.log("Table already have data")
                
            } 
            
    }


   
}
module.exports =insertData;
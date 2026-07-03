/*
 * Reference PLU (Price Look-Up) code data for fresh produce.
 *
 * PLU codes are the 4-digit stickers/labels used worldwide (including Canada)
 * to identify loose fruits & vegetables at checkout. They are coordinated by
 * the International Federation for Produce Standards (IFPS):
 *   - 4-digit code (e.g. 4131)        -> conventionally grown
 *   - 5-digit code starting with 9    (e.g. 94131) -> organically grown
 *   - 5-digit code starting with 8    (e.g. 84131) -> legacy "bioengineered"
 *     flag. This prefix was made optional industry-wide around 2015 and is
 *     rarely used today - its absence does NOT mean an item isn't GMO.
 *
 * IMPORTANT: This is a small, hand-checked SAMPLE of commonly published
 * codes (cross-referenced against multiple public produce-industry sources),
 * not the full official IFPS list, which has 1000+ entries, changes over
 * time, and can vary slightly by region, size grade, or grower. Treat a
 * match as a helpful reference, not a guarantee - always confirm anything
 * that matters (allergies, organic certification) against in-store signage.
 */
const PLU_DATABASE = {
  // Apples
  "4131": { name: "Fuji apple (large)", emoji: "\u{1F34E}", category: "Apple", tip: "Very sweet and crisp; keeps well refrigerated for weeks." },
  "4129": { name: "Fuji apple (small)", emoji: "\u{1F34E}", category: "Apple", tip: "Very sweet and crisp; keeps well refrigerated for weeks." },
  "4135": { name: "Gala apple (large)", emoji: "\u{1F34E}", category: "Apple", tip: "Mildly sweet and floral; store in the fridge crisper." },
  "4133": { name: "Gala apple (small)", emoji: "\u{1F34E}", category: "Apple", tip: "Mildly sweet and floral; store in the fridge crisper." },
  "4017": { name: "Granny Smith apple (large)", emoji: "\u{1F34F}", category: "Apple", tip: "Tart and firm; excellent for pies and baking." },
  "4139": { name: "Granny Smith apple (small)", emoji: "\u{1F34F}", category: "Apple", tip: "Tart and firm; excellent for pies and baking." },
  "4016": { name: "Red Delicious apple (large)", emoji: "\u{1F34E}", category: "Apple", tip: "Best eaten fresh; softens quickly when cooked." },
  "4015": { name: "Red Delicious apple (small)", emoji: "\u{1F34E}", category: "Apple", tip: "Best eaten fresh; softens quickly when cooked." },
  "4020": { name: "Golden Delicious apple", emoji: "\u{1F34F}", category: "Apple", tip: "Great for baking; flesh browns slowly once cut." },
  "4101": { name: "Braeburn apple", emoji: "\u{1F34E}", category: "Apple", tip: "Firm, sweet-tart; holds its shape well when baked." },
  "4124": { name: "Empire apple", emoji: "\u{1F34E}", category: "Apple", tip: "An Ontario-bred favourite - crisp and slightly tart." },
  "4128": { name: "Pink Lady / Cripps Pink apple (small)", emoji: "\u{1F34E}", category: "Apple", tip: "Sweet-tart and very firm; stores exceptionally well." },
  "4130": { name: "Pink Lady / Cripps Pink apple (large)", emoji: "\u{1F34E}", category: "Apple", tip: "Sweet-tart and very firm; stores exceptionally well." },
  "3283": { name: "Honeycrisp apple", emoji: "\u{1F34E}", category: "Apple", tip: "Extra crisp; a top Canadian variety, widely grown in Ontario & Quebec." },
  "3438": { name: "Ambrosia apple", emoji: "\u{1F34E}", category: "Apple", tip: "Bred in BC's Similkameen Valley - low-acid, honeyed sweetness, keeps very well." },
  "4019": { name: "McIntosh apple", emoji: "\u{1F34F}", category: "Apple", tip: "A Canadian classic that originated in Ontario in 1811. Softens fast when cooked - great for sauce." },

  // Other fruit
  "4011": { name: "Banana", emoji: "\u{1F34C}", category: "Fruit", tip: "Ripens faster next to other fruit; refrigerate once ripe to slow it further (peel darkens, flesh is fine)." },
  "4012": { name: "Navel orange", emoji: "\u{1F34A}", category: "Citrus", tip: "Store in the fridge for the longest freshness." },
  "4053": { name: "Lemon", emoji: "\u{1F34B}", category: "Citrus", tip: "Room temperature for about a week, or refrigerate for longer." },
  "4048": { name: "Lime", emoji: "\u{1F34B}", category: "Citrus", tip: "Keeps 1-2 weeks at room temperature, longer refrigerated." },
  "4046": { name: "Hass avocado (small/medium)", emoji: "\u{1F951}", category: "Fruit", tip: "Ripens at room temperature; refrigerate once ripe to buy a few extra days." },
  "4022": { name: "Green seedless grapes", emoji: "\u{1F347}", category: "Fruit", tip: "Store unwashed in the fridge; rinse just before eating." },
  "4023": { name: "Red seedless grapes", emoji: "\u{1F347}", category: "Fruit", tip: "Store unwashed in the fridge; rinse just before eating." },
  "4024": { name: "Bartlett pear (small)", emoji: "\u{1F350}", category: "Fruit", tip: "Ripens from the neck down - press gently near the stem to check." },
  "4409": { name: "Bartlett pear (large)", emoji: "\u{1F350}", category: "Fruit", tip: "Ripens from the neck down - press gently near the stem to check." },
  "4038": { name: "Peach (yellow flesh)", emoji: "\u{1F351}", category: "Fruit", tip: "Ripen at room temperature; refrigerate once ripe." },
  "4323": { name: "Strawberries", emoji: "\u{1F353}", category: "Berry", tip: "Don't wash until ready to eat; refrigerate right away." },
  "4028": { name: "Blueberries", emoji: "\u{1FAD0}", category: "Berry", tip: "Refrigerate unwashed; freezes very well." },

  // Vegetables
  "4087": { name: "Roma tomato", emoji: "\u{1F345}", category: "Vegetable", tip: "Store at room temperature, away from direct sun." },
  "4562": { name: "Carrot", emoji: "\u{1F955}", category: "Vegetable", tip: "Trim any leafy tops before storing to keep the roots from going limp." },
  "4079": { name: "Broccoli", emoji: "\u{1F966}", category: "Vegetable", tip: "Refrigerate unwashed in a loose/perforated bag." },
  "3083": { name: "Broccoli crowns", emoji: "\u{1F966}", category: "Vegetable", tip: "Refrigerate unwashed in a loose/perforated bag." },
  "4072": { name: "Russet / baking potato", emoji: "\u{1F954}", category: "Vegetable", tip: "Store in a cool, dark, dry place - not the fridge (it can turn starch to sugar and darken the potato)." },
  "4062": { name: "Cucumber", emoji: "\u{1F952}", category: "Vegetable", tip: "Refrigerate; best used within about a week." },
  "4065": { name: "Green bell pepper", emoji: "\u{1FAD1}", category: "Vegetable", tip: "Refrigerate in the crisper drawer." },
  "4688": { name: "Red bell pepper", emoji: "\u{1FAD1}", category: "Vegetable", tip: "Refrigerate in the crisper drawer." },
  "4093": { name: "Yellow onion", emoji: "\u{1F9C5}", category: "Vegetable", tip: "Store in a cool, dark, dry, well-ventilated spot - not the fridge." },
  "4709": { name: "Garlic", emoji: "\u{1F9C4}", category: "Vegetable", tip: "Store in a cool, dry, well-ventilated place." },
  "4640": { name: "Romaine lettuce", emoji: "\u{1F957}", category: "Vegetable", tip: "Refrigerate; wash just before use." },
  "4070": { name: "Celery", emoji: "\u{1FADA}", category: "Vegetable", tip: "Wrap in foil (not plastic) to keep it crisp longer." },
  "4818": { name: "White mushroom", emoji: "\u{1F344}", category: "Vegetable", tip: "Store in a paper bag in the fridge, not sealed plastic." },
};

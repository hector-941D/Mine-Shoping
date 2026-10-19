let products = [
  {
    id: 1,
    nombre: 'Espada de Diamante',
    categoria: 'Armas',
    descripcion: 'una espada poderosa hecha de diamante, ideal para combates cuerpo a cuerpo.',
    precio_esmeraldas: 15,
    stock: 5,
    imagen: 'https://www.pngarts.com/files/10/Diamond-Sword-Download-PNG-Image.png'
  },
  {
    id: 2,
    nombre: 'Manzana Dorada Encantada',
    categoria: 'Consumibles',
    descripcion: 'una manzana especial que otorga efectos de regeneración y resistencia al jugador que la consume.',
    precio_esmeraldas: 30,
    stock: 2,
    imagen: 'https://minecraft.wiki/images/Enchanted_Golden_Apple_JE2_BE2.gif?f4719'
  },
  {
    id: 3,
    nombre: 'Poción de Curación II',
    categoria: 'Pociones',
    descripcion: 'una poción que restaura instantáneamente la salud del jugador al beberla.',
    precio_esmeraldas: 8,
    stock: 12,
    imagen: 'https://minecraft.wiki/images/Potion_of_Healing_JE2.png?d579c'
  },
  {
    id: 4,
    nombre: 'Pico de Netherita',
    categoria: 'Herramientas',
    descripcion: 'un pico extremadamente duradero y eficiente, hecho de netherita, ideal para la minería de recursos valiosos.',
    precio_esmeraldas: 45,
    stock: 0,
    imagen: 'https://minecraft.wiki/images/Netherite_Pickaxe_JE1.png?c5f0a'
  },
  {
    id: 5,
    nombre: 'Perla de Ender',
    categoria: 'Utilidad',
    descripcion: 'una perla mágica que permite al jugador teletransportarse a la ubicación donde se lanza, útil para escapar de situaciones peligrosas o explorar áreas difíciles de alcanzar.',
    precio_esmeraldas: 5,
    stock: 16,
    imagen: 'https://es.minecraft.wiki/images/Ender_Pearl.png?94d20'
  },
  {
    id: 6,
    nombre: 'elytras',
    categoria: 'Armaduras',
    descripcion: 'un par de alas que permiten al jugador planear y volar por el mundo de Minecraft, proporcionando una forma única de explorar y desplazarse.',
    precio_esmeraldas: 64,
    stock: 1,
    imagen: 'https://minecraft.wiki/images/thumb/Elytra_JE2_BE2.png/320px-Elytra_JE2_BE2.png?3bccc'
  }
];

export const getItems = () => {
  return [...products];
};

export const getItemById = (id) => {
  const item = products.find((item) => item.id === Number(id));
  return item ? { ...item } : null;
};

export const addItem = (nuevoItem) => {
  const nextId = products.length > 0 ? Math.max(...products.map((i) => i.id)) + 1 : 1;
  const createdItem = {
    ...nuevoItem,
    id: nextId,
    precio_esmeraldas: Number(nuevoItem.precio_esmeraldas) || 0,
    stock: Number(nuevoItem.stock) || 0
  };
  products.push(createdItem);
  return { ...createdItem };
};

export const updateItem = (id, actualizar) => {
  const index = products.findIndex((item) => item.id === Number(id));
  if (index === -1) return null;

  products[index] = {...products[index],
    ...actualizar,
    id: Number(id),
    precio_esmeraldas: Number(actualizar.precio_esmeraldas ?? products[index].precio_esmeraldas),
    stock: Number(actualizar.stock ?? products[index].stock)
  };

  return { ...products[index] };
};

export const deleteItem = (id) => {
  const initialLength = products.length;
  products = products.filter((item) => item.id !== Number(id));
  return products.length < initialLength;
};
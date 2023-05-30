export default function solution(content) {
  // BEGIN
  //1.задание
  const rows = content.split('\n').slice(2);
  console.log(`Всего растений: ${rows.length}`);
  //Создаем массив
  const data = rows.map((row) => row.split('|').filter(row => row)).map(row => row.map(element => element.trim()));
  //2.задание
  const names = data.map((row) => row[0]);
  const sortedNames = names.map((name) => name[0].toUpperCase() + name.slice(1)).sort();
  console.log(`Список растений в алфавитном порядке: ${sortedNames.join()}`);
  //3.задание
  const danger = data.map((row) => row[4]);
  const toxicPlants = danger.filter((danger) => danger === 'Да').length;
  const nonToxicPlants = danger.filter((danger) => danger === 'Нет').length;
  console.log(`Всего опасных растений: ${100 / names.length * toxicPlants}%`);
  console.log(`Всего безопасных растений: ${100 / names.length * nonToxicPlants}%`);
  //4.задание - не доделано
  //const forestPlants = data.filter((row) => row[1].split(',')[0] === 'Леса');
  //console.log(forestPlants);
  //5.задание
  const habitat = data.map((row) => row[1]);
  const sortHabitatToxic = (danger, habitat) => {
    const arr = [];
    for (let i = 0; i < danger.length; i++) {
      if (danger[i] === 'Да') {
        const newHabitat = habitat[i];
        arr.push(newHabitat);
      }
    }
    return arr;
  }
  const habitatToxicPlants = sortHabitatToxic(danger, habitat);
  const count = {};
  for (const item of habitatToxicPlants) {
    count[item] = count[item] ? count[item] + 1 : 1;
  }
  const result = Object.keys(count).filter((item) => count[item] > 1);
  console.log(`Самое распространенное место обитания опасных растений: ${result[0]}`);
  // END
}
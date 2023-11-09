import sampleImage from '../../public/full-player-image.avif';

export const useListGeneraitor = () => {
  let list = [];
  for (let i = 0; i < 15000; i++) {
    list.push({
      title: 'item',
      image: "https://picsum.photos/id/1/200/300",
    });
  }

  return list;
};

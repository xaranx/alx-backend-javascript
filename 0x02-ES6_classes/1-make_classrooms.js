import Classroom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  return new Array(sizes.length).fill(0).map((_, i) => new Classroom(sizes[i]));
}

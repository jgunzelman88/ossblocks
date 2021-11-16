import { World } from '../src/model/world'
import { createChunk } from '../src/instance/chunk-creator'
import { CHUNK_SIZE } from '../src/model/chunk'
import { BLOCK_REGISTRY } from '../src/App';


test('create test world', () => {
  let world = new World()
  world.chunks.push(createChunk('', 0, 0, 0))
  console.log(JSON.stringify(world))
});


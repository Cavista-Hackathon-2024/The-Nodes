import tf from '@tensorflow/tfjs-node';

const model = await tf.loadLayersModel('file://./model/model.json');

const input = tf.tensor2d([1, 2, 3, 4], [1, 4]);

const output = model.predict(input);

output.print();




import * as tf from '@tensorflow/tfjs';
export async function saveGraphLocally(model:tf.GraphModel,key:string){await model.save(key)}
export async function loadLocalGraph(key:string){return tf.loadGraphModel(key)}

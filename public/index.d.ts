declare module '@imgly/background-removal/src/codecs' {
  export { imageEncode, imageDecode };
  import { NdArray } from 'ndarray';
  function imageDecode(blob: Blob): Promise<NdArray<Uint8Array>>;
  function imageEncode(imageTensor: NdArray<Uint8Array>, quality?: number, format?: string): Promise<Blob>;

}
declare module '@imgly/background-removal/src/index' {
  export default removeBackground;
  export type { ImageSource, Config };
  export { removeBackground, preload };
  import { Config } from '@imgly/background-removal/src/schema';
  type ImageSource = ImageData | ArrayBuffer | Uint8Array | Blob | URL | string;
  function preload(configuration?: Config): Promise<void>;
  function removeBackground(image: ImageSource, configuration?: Config): Promise<Blob>;

}
declare module '@imgly/background-removal/src/inference' {
  export { initInference, runInference };
  import { Config } from '@imgly/background-removal/src/schema';
  import { NdArray } from 'ndarray';
  function initInference(config?: Config): Promise<{
      config: {
          publicPath?: string;
          debug?: boolean;
          proxyToWorker?: boolean;
          fetchArgs?: any;
          progress?: (args_0: string, args_1: number, args_2: number, ...args_3: unknown[]) => undefined;
          model?: "small" | "medium";
          output?: {
              format?: "image/png" | "image/x-rgba8" | "image/jpeg" | "image/webp";
              quality?: number;
              type?: "background" | "mask" | "foreground";
          };
      };
      session: import("onnxruntime-common").InferenceSession;
  }>;
  function runInference(imageTensor: NdArray<Uint8Array>, config: Config, session: any): Promise<NdArray<Uint8Array>>;

}
declare module '@imgly/background-removal/src/onnx' {
  export { createOnnxSession, runOnnxSession };
  import { NdArray } from 'ndarray';
  import * as ort from 'onnxruntime-web';
  import { Config } from '@imgly/background-removal/src/schema';
  function createOnnxSession(model: any, config: Config): Promise<ort.InferenceSession>;
  function runOnnxSession(session: any, inputs: [string, NdArray<Float32Array>][], outputs: [string]): Promise<NdArray<Float32Array>[]>;

}
declare module '@imgly/background-removal/src/resource' {
  export { loadAsBlob, loadAsUrl, preload };
  import { Config } from '@imgly/background-removal/src/schema';
  function preload(config: Config): Promise<void>;
  function loadAsUrl(url: string, config: Config): Promise<string>;
  function loadAsBlob(key: string, config: Config): Promise<Blob>;

}
declare module '@imgly/background-removal/src/schema' {
  export { ConfigSchema, Config, validateConfig };
  import { z } from 'zod';
  const ConfigSchema: z.ZodDefault<z.ZodObject<{
      publicPath: z.ZodDefault<z.ZodOptional<z.ZodString>>;
      debug: z.ZodDefault<z.ZodBoolean>;
      proxyToWorker: z.ZodDefault<z.ZodBoolean>;
      fetchArgs: z.ZodDefault<z.ZodAny>;
      progress: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodNumber, z.ZodNumber], z.ZodUnknown>, z.ZodUndefined>>;
      model: z.ZodDefault<z.ZodEnum<["small", "medium"]>>;
      output: z.ZodDefault<z.ZodObject<{
          format: z.ZodDefault<z.ZodEnum<["image/png", "image/jpeg", "image/webp", "image/x-rgba8"]>>;
          quality: z.ZodDefault<z.ZodNumber>;
          type: z.ZodDefault<z.ZodEnum<["foreground", "background", "mask"]>>;
      }, "strip", z.ZodTypeAny, {
          format?: "image/png" | "image/x-rgba8" | "image/jpeg" | "image/webp";
          quality?: number;
          type?: "background" | "mask" | "foreground";
      }, {
          format?: "image/png" | "image/x-rgba8" | "image/jpeg" | "image/webp";
          quality?: number;
          type?: "background" | "mask" | "foreground";
      }>>;
  }, "strip", z.ZodTypeAny, {
      publicPath?: string;
      debug?: boolean;
      proxyToWorker?: boolean;
      fetchArgs?: any;
      progress?: (args_0: string, args_1: number, args_2: number, ...args_3: unknown[]) => undefined;
      model?: "small" | "medium";
      output?: {
          format?: "image/png" | "image/x-rgba8" | "image/jpeg" | "image/webp";
          quality?: number;
          type?: "background" | "mask" | "foreground";
      };
  }, {
      publicPath?: string;
      debug?: boolean;
      proxyToWorker?: boolean;
      fetchArgs?: any;
      progress?: (args_0: string, args_1: number, args_2: number, ...args_3: unknown[]) => undefined;
      model?: "small" | "medium";
      output?: {
          format?: "image/png" | "image/x-rgba8" | "image/jpeg" | "image/webp";
          quality?: number;
          type?: "background" | "mask" | "foreground";
      };
  }>>;
  type Config = z.infer<typeof ConfigSchema>;
  function validateConfig(configuration?: Config): Config;

}
declare module '@imgly/background-removal/src/url' {
  export { isAbsoluteURI, ensureAbsoluteURI };
  function isAbsoluteURI(url: string): boolean;
  function ensureAbsoluteURI(url: string, baseUrl: string): string;

}
declare module '@imgly/background-removal/src/utils' {
  export { imageDecode, imageEncode, tensorResize, tensorHWCtoBCHW, imageBitmapToImageData, calculateProportionalSize };
  import { NdArray } from 'ndarray';
  import { imageDecode, imageEncode } from '@imgly/background-removal/src/codecs';
  function imageBitmapToImageData(imageBitmap: ImageBitmap): ImageData;
  function tensorResize(imageTensor: NdArray<Uint8Array>, newWidth: number, newHeight: number): Promise<NdArray<Uint8Array>>;
  function tensorHWCtoBCHW(imageTensor: NdArray<Uint32Array>, mean?: number[], std?: number[]): NdArray<Float32Array>;
  function calculateProportionalSize(originalWidth: number, originalHeight: number, maxWidth: number, maxHeight: number): [number, number];

}
declare module '@imgly/background-removal' {
  import main = require('@imgly/background-removal/src/index');
  export = main;
}
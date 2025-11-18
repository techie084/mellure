// import { json } from '@sveltejs/kit';
// import { ZodError } from 'zod';

// export class AppError extends Error {
//   constructor(
//     public message: string,
//     public statusCode: number = 500,
//     public code?: string
//   ) {
//     super(message);
//     this.name = 'AppError';
//   }
// }

// export function handleError(error: unknown) {
//   console.error('Error occurred:', error);

//   // Zod validation errors
//   if (error instanceof ZodError) {
//     return json(
//       {
//         error: 'Validation failed',
//         details: error.issues.map(e => ({
//           field: e.path.join('.'),
//           message: e.message
//         }))
//       },
//       { status: 400 }
//     );
//   }

//   // Custom app errors
//   if (error instanceof AppError) {
//     return json(
//       {
//         error: error.message,
//         code: error.code
//       },
//       { status: error.statusCode }
//     );
//   }

//   // Database errors
//   if (error instanceof Error) {
//     if (error.message.includes('UNIQUE constraint failed')) {
//       return json(
//         { error: 'A record with this value already exists' },
//         { status: 409 }
//       );
//     }

//     if (error.message.includes('FOREIGN KEY constraint failed')) {
//       return json(
//         { error: 'Related record not found' },
//         { status: 400 }
//       );
//     }
//   }

//   // Generic errors
//   return json(
//     { error: 'An unexpected error occurred' },
//     { status: 500 }
//   );
// }

import { InvalidParamError, UnexpectedError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export interface IDeleteImageUseCase {
  perform: (data: IDeleteImageUseCase.Input) => IDeleteImageUseCase.Output;
}

export namespace IDeleteImageUseCase {
  export type Input = { id: string; password: string };
  export type Output = Promise<Either<UnexpectedError | InvalidParamError, void>>;
}

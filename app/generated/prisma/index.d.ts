
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model team
 * 
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>
/**
 * Model employee
 * 
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>
/**
 * Model task
 * 
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model market_employee
 * 
 */
export type market_employee = $Result.DefaultSelection<Prisma.$market_employeePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  TEAM_LEAD: 'TEAM_LEAD',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.teamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.employeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.market_employee`: Exposes CRUD operations for the **market_employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Market_employees
    * const market_employees = await prisma.market_employee.findMany()
    * ```
    */
  get market_employee(): Prisma.market_employeeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    company: 'company',
    team: 'team',
    employee: 'employee',
    task: 'task',
    market_employee: 'market_employee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "company" | "team" | "employee" | "task" | "market_employee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      team: {
        payload: Prisma.$teamPayload<ExtArgs>
        fields: Prisma.teamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>
        fields: Prisma.employeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      market_employee: {
        payload: Prisma.$market_employeePayload<ExtArgs>
        fields: Prisma.market_employeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.market_employeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.market_employeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>
          }
          findFirst: {
            args: Prisma.market_employeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.market_employeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>
          }
          findMany: {
            args: Prisma.market_employeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>[]
          }
          create: {
            args: Prisma.market_employeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>
          }
          createMany: {
            args: Prisma.market_employeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.market_employeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>[]
          }
          delete: {
            args: Prisma.market_employeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>
          }
          update: {
            args: Prisma.market_employeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>
          }
          deleteMany: {
            args: Prisma.market_employeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.market_employeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.market_employeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>[]
          }
          upsert: {
            args: Prisma.market_employeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$market_employeePayload>
          }
          aggregate: {
            args: Prisma.Market_employeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket_employee>
          }
          groupBy: {
            args: Prisma.market_employeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Market_employeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.market_employeeCountArgs<ExtArgs>
            result: $Utils.Optional<Market_employeeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    company?: companyOmit
    team?: teamOmit
    employee?: employeeOmit
    task?: taskOmit
    market_employee?: market_employeeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    company: number
    employees: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | AdminCountOutputTypeCountCompanyArgs
    employees?: boolean | AdminCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    team: number
    employee: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | CompanyCountOutputTypeCountTeamArgs
    employee?: boolean | CompanyCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    tasks: number
    members: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TeamCountOutputTypeCountTasksArgs
    members?: boolean | TeamCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    managedEmployees: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedEmployees?: boolean | EmployeeCountOutputTypeCountManagedEmployeesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountManagedEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    budget: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    budget: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    password: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    budget: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    password: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    budget: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    clerkId: number
    password: number
    email: number
    first_name: number
    last_name: number
    budget: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    budget?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    budget?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    clerkId?: true
    password?: true
    email?: true
    first_name?: true
    last_name?: true
    budget?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    clerkId?: true
    password?: true
    email?: true
    first_name?: true
    last_name?: true
    budget?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    clerkId?: true
    password?: true
    email?: true
    first_name?: true
    last_name?: true
    budget?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    clerkId: string
    password: string | null
    email: string
    first_name: string
    last_name: string
    budget: number
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    password?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    budget?: boolean
    company?: boolean | admin$companyArgs<ExtArgs>
    employees?: boolean | admin$employeesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    password?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    budget?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    password?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    budget?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    clerkId?: boolean
    password?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    budget?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "password" | "email" | "first_name" | "last_name" | "budget", ExtArgs["result"]["admin"]>
  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | admin$companyArgs<ExtArgs>
    employees?: boolean | admin$employeesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type adminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type adminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[]
      employees: Prisma.$employeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      password: string | null
      email: string
      first_name: string
      last_name: string
      budget: number
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends admin$companyArgs<ExtArgs> = {}>(args?: Subset<T, admin$companyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends admin$employeesArgs<ExtArgs> = {}>(args?: Subset<T, admin$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly clerkId: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly first_name: FieldRef<"admin", 'String'>
    readonly last_name: FieldRef<"admin", 'String'>
    readonly budget: FieldRef<"admin", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin.company
   */
  export type admin$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    cursor?: companyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * admin.employees
   */
  export type admin$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    cursor?: employeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    ownerID: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    ownerID: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    ownerID: number | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    ownerID: number | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    email: number
    ownerID: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    ownerID?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    ownerID?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    ownerID?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    ownerID?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    ownerID?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    email: string
    ownerID: number
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    ownerID?: boolean
    owner?: boolean | adminDefaultArgs<ExtArgs>
    team?: boolean | company$teamArgs<ExtArgs>
    employee?: boolean | company$employeeArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    ownerID?: boolean
    owner?: boolean | adminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    ownerID?: boolean
    owner?: boolean | adminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    ownerID?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "ownerID", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | adminDefaultArgs<ExtArgs>
    team?: boolean | company$teamArgs<ExtArgs>
    employee?: boolean | company$employeeArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | adminDefaultArgs<ExtArgs>
  }
  export type companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | adminDefaultArgs<ExtArgs>
  }

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      owner: Prisma.$adminPayload<ExtArgs>
      team: Prisma.$teamPayload<ExtArgs>[]
      employee: Prisma.$employeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      ownerID: number
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends company$teamArgs<ExtArgs> = {}>(args?: Subset<T, company$teamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee<T extends company$employeeArgs<ExtArgs> = {}>(args?: Subset<T, company$employeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'Int'>
    readonly name: FieldRef<"company", 'String'>
    readonly email: FieldRef<"company", 'String'>
    readonly ownerID: FieldRef<"company", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.team
   */
  export type company$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    where?: teamWhereInput
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    cursor?: teamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * company.employee
   */
  export type company$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    cursor?: employeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    lead_id: number | null
    companyID: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    lead_id: number | null
    companyID: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    department: string | null
    lead_id: number | null
    companyName: string | null
    companyID: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    department: string | null
    lead_id: number | null
    companyName: string | null
    companyID: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    department: number
    lead_id: number
    companyName: number
    companyID: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    lead_id?: true
    companyID?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    lead_id?: true
    companyID?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    department?: true
    lead_id?: true
    companyName?: true
    companyID?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    department?: true
    lead_id?: true
    companyName?: true
    companyID?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    department?: true
    lead_id?: true
    companyName?: true
    companyID?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: teamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    department: string
    lead_id: number
    companyName: string
    companyID: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    lead_id?: boolean
    companyName?: boolean
    companyID?: boolean
    tasks?: boolean | team$tasksArgs<ExtArgs>
    lead?: boolean | employeeDefaultArgs<ExtArgs>
    members?: boolean | team$membersArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type teamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    lead_id?: boolean
    companyName?: boolean
    companyID?: boolean
    lead?: boolean | employeeDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type teamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    lead_id?: boolean
    companyName?: boolean
    companyID?: boolean
    lead?: boolean | employeeDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type teamSelectScalar = {
    id?: boolean
    name?: boolean
    department?: boolean
    lead_id?: boolean
    companyName?: boolean
    companyID?: boolean
  }

  export type teamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "department" | "lead_id" | "companyName" | "companyID", ExtArgs["result"]["team"]>
  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | team$tasksArgs<ExtArgs>
    lead?: boolean | employeeDefaultArgs<ExtArgs>
    members?: boolean | team$membersArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type teamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | employeeDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }
  export type teamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | employeeDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team"
    objects: {
      tasks: Prisma.$taskPayload<ExtArgs>[]
      lead: Prisma.$employeePayload<ExtArgs>
      members: Prisma.$employeePayload<ExtArgs>[]
      company: Prisma.$companyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      department: string
      lead_id: number
      companyName: string
      companyID: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<Prisma.$teamPayload, S>

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team'], meta: { name: 'team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamFindUniqueArgs>(args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs>(args: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamFindFirstArgs>(args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs>(args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teamFindManyArgs>(args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends teamCreateArgs>(args: SelectSubset<T, teamCreateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamCreateManyArgs>(args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {teamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teamCreateManyAndReturnArgs>(args?: SelectSubset<T, teamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends teamDeleteArgs>(args: SelectSubset<T, teamDeleteArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamUpdateArgs>(args: SelectSubset<T, teamUpdateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamDeleteManyArgs>(args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamUpdateManyArgs>(args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {teamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teamUpdateManyAndReturnArgs>(args: SelectSubset<T, teamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends teamUpsertArgs>(args: SelectSubset<T, teamUpsertArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team model
   */
  readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends team$tasksArgs<ExtArgs> = {}>(args?: Subset<T, team$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lead<T extends employeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeeDefaultArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends team$membersArgs<ExtArgs> = {}>(args?: Subset<T, team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<"team", 'Int'>
    readonly name: FieldRef<"team", 'String'>
    readonly department: FieldRef<"team", 'String'>
    readonly lead_id: FieldRef<"team", 'Int'>
    readonly companyName: FieldRef<"team", 'String'>
    readonly companyID: FieldRef<"team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>
  }

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team createManyAndReturn
   */
  export type teamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * team updateManyAndReturn
   */
  export type teamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>
  }

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * team.tasks
   */
  export type team$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * team.members
   */
  export type team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    cursor?: employeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
  }


  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    salary: number | null
    managerId: number | null
    teamId: number | null
    adminID: number | null
    companyID: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    salary: number | null
    managerId: number | null
    teamId: number | null
    adminID: number | null
    companyID: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    role: $Enums.UserRole | null
    salary: number | null
    managerId: number | null
    teamId: number | null
    adminID: number | null
    companyName: string | null
    companyID: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    role: $Enums.UserRole | null
    salary: number | null
    managerId: number | null
    teamId: number | null
    adminID: number | null
    companyName: string | null
    companyID: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    role: number
    salary: number
    managerId: number
    teamId: number
    adminID: number
    companyName: number
    companyID: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    salary?: true
    managerId?: true
    teamId?: true
    adminID?: true
    companyID?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    salary?: true
    managerId?: true
    teamId?: true
    adminID?: true
    companyID?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    salary?: true
    managerId?: true
    teamId?: true
    adminID?: true
    companyName?: true
    companyID?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    salary?: true
    managerId?: true
    teamId?: true
    adminID?: true
    companyName?: true
    companyID?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    salary?: true
    managerId?: true
    teamId?: true
    adminID?: true
    companyName?: true
    companyID?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: employeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary: number | null
    managerId: number | null
    teamId: number
    adminID: number
    companyName: string
    companyID: number
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    salary?: boolean
    managerId?: boolean
    teamId?: boolean
    adminID?: boolean
    companyName?: boolean
    companyID?: boolean
    manager?: boolean | employee$managerArgs<ExtArgs>
    managedEmployees?: boolean | employee$managedEmployeesArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
    leadsTeam?: boolean | employee$leadsTeamArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    salary?: boolean
    managerId?: boolean
    teamId?: boolean
    adminID?: boolean
    companyName?: boolean
    companyID?: boolean
    manager?: boolean | employee$managerArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    salary?: boolean
    managerId?: boolean
    teamId?: boolean
    adminID?: boolean
    companyName?: boolean
    companyID?: boolean
    manager?: boolean | employee$managerArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type employeeSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    salary?: boolean
    managerId?: boolean
    teamId?: boolean
    adminID?: boolean
    companyName?: boolean
    companyID?: boolean
  }

  export type employeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "role" | "salary" | "managerId" | "teamId" | "adminID" | "companyName" | "companyID", ExtArgs["result"]["employee"]>
  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | employee$managerArgs<ExtArgs>
    managedEmployees?: boolean | employee$managedEmployeesArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
    leadsTeam?: boolean | employee$leadsTeamArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type employeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | employee$managerArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }
  export type employeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | employee$managerArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employee"
    objects: {
      manager: Prisma.$employeePayload<ExtArgs> | null
      managedEmployees: Prisma.$employeePayload<ExtArgs>[]
      team: Prisma.$teamPayload<ExtArgs>
      leadsTeam: Prisma.$teamPayload<ExtArgs> | null
      admin: Prisma.$adminPayload<ExtArgs>
      company: Prisma.$companyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      role: $Enums.UserRole
      salary: number | null
      managerId: number | null
      teamId: number
      adminID: number
      companyName: string
      companyID: number
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<Prisma.$employeePayload, S>

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee'], meta: { name: 'employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeeFindUniqueArgs>(args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs>(args: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeeFindFirstArgs>(args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs>(args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends employeeFindManyArgs>(args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends employeeCreateArgs>(args: SelectSubset<T, employeeCreateArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeeCreateManyArgs>(args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {employeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employeeCreateManyAndReturnArgs>(args?: SelectSubset<T, employeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends employeeDeleteArgs>(args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeeUpdateArgs>(args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeeDeleteManyArgs>(args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeeUpdateManyArgs>(args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {employeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends employeeUpdateManyAndReturnArgs>(args: SelectSubset<T, employeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends employeeUpsertArgs>(args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employee model
   */
  readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends employee$managerArgs<ExtArgs> = {}>(args?: Subset<T, employee$managerArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    managedEmployees<T extends employee$managedEmployeesArgs<ExtArgs> = {}>(args?: Subset<T, employee$managedEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leadsTeam<T extends employee$leadsTeamArgs<ExtArgs> = {}>(args?: Subset<T, employee$leadsTeamArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<"employee", 'Int'>
    readonly first_name: FieldRef<"employee", 'String'>
    readonly last_name: FieldRef<"employee", 'String'>
    readonly email: FieldRef<"employee", 'String'>
    readonly role: FieldRef<"employee", 'UserRole'>
    readonly salary: FieldRef<"employee", 'Int'>
    readonly managerId: FieldRef<"employee", 'Int'>
    readonly teamId: FieldRef<"employee", 'Int'>
    readonly adminID: FieldRef<"employee", 'Int'>
    readonly companyName: FieldRef<"employee", 'String'>
    readonly companyID: FieldRef<"employee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>
  }

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employee createManyAndReturn
   */
  export type employeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employee updateManyAndReturn
   */
  export type employeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
  }

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employee.manager
   */
  export type employee$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
  }

  /**
   * employee.managedEmployees
   */
  export type employee$managedEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    cursor?: employeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee.leadsTeam
   */
  export type employee$leadsTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    where?: teamWhereInput
  }

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    teamId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    descreption: string | null
    content: string | null
    attachement: string | null
    teamId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    descreption: string | null
    content: string | null
    attachement: string | null
    teamId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    descreption: number
    content: number
    attachement: number
    teamId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    teamId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    teamId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    descreption?: true
    content?: true
    attachement?: true
    teamId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    descreption?: true
    content?: true
    attachement?: true
    teamId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    descreption?: true
    content?: true
    attachement?: true
    teamId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    descreption: string | null
    content: string
    attachement: string | null
    teamId: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descreption?: boolean
    content?: boolean
    attachement?: boolean
    teamId?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descreption?: boolean
    content?: boolean
    attachement?: boolean
    teamId?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descreption?: boolean
    content?: boolean
    attachement?: boolean
    teamId?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectScalar = {
    id?: boolean
    title?: boolean
    descreption?: boolean
    content?: boolean
    attachement?: boolean
    teamId?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "descreption" | "content" | "attachement" | "teamId", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type taskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type taskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      descreption: string | null
      content: string
      attachement: string | null
      teamId: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {taskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends taskCreateManyAndReturnArgs>(args?: SelectSubset<T, taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {taskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends taskUpdateManyAndReturnArgs>(args: SelectSubset<T, taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'Int'>
    readonly title: FieldRef<"task", 'String'>
    readonly descreption: FieldRef<"task", 'String'>
    readonly content: FieldRef<"task", 'String'>
    readonly attachement: FieldRef<"task", 'String'>
    readonly teamId: FieldRef<"task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task createManyAndReturn
   */
  export type taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task updateManyAndReturn
   */
  export type taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model market_employee
   */

  export type AggregateMarket_employee = {
    _count: Market_employeeCountAggregateOutputType | null
    _avg: Market_employeeAvgAggregateOutputType | null
    _sum: Market_employeeSumAggregateOutputType | null
    _min: Market_employeeMinAggregateOutputType | null
    _max: Market_employeeMaxAggregateOutputType | null
  }

  export type Market_employeeAvgAggregateOutputType = {
    id: number | null
    salary: number | null
    experience: number | null
  }

  export type Market_employeeSumAggregateOutputType = {
    id: number | null
    salary: number | null
    experience: number | null
  }

  export type Market_employeeMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    role: $Enums.UserRole | null
    salary: number | null
    bio: string | null
    skills: string | null
    experience: number | null
    createdAt: Date | null
  }

  export type Market_employeeMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    role: $Enums.UserRole | null
    salary: number | null
    bio: string | null
    skills: string | null
    experience: number | null
    createdAt: Date | null
  }

  export type Market_employeeCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    role: number
    salary: number
    bio: number
    skills: number
    experience: number
    createdAt: number
    _all: number
  }


  export type Market_employeeAvgAggregateInputType = {
    id?: true
    salary?: true
    experience?: true
  }

  export type Market_employeeSumAggregateInputType = {
    id?: true
    salary?: true
    experience?: true
  }

  export type Market_employeeMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    salary?: true
    bio?: true
    skills?: true
    experience?: true
    createdAt?: true
  }

  export type Market_employeeMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    salary?: true
    bio?: true
    skills?: true
    experience?: true
    createdAt?: true
  }

  export type Market_employeeCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    role?: true
    salary?: true
    bio?: true
    skills?: true
    experience?: true
    createdAt?: true
    _all?: true
  }

  export type Market_employeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which market_employee to aggregate.
     */
    where?: market_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of market_employees to fetch.
     */
    orderBy?: market_employeeOrderByWithRelationInput | market_employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: market_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` market_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` market_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned market_employees
    **/
    _count?: true | Market_employeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Market_employeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Market_employeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Market_employeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Market_employeeMaxAggregateInputType
  }

  export type GetMarket_employeeAggregateType<T extends Market_employeeAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket_employee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket_employee[P]>
      : GetScalarType<T[P], AggregateMarket_employee[P]>
  }




  export type market_employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: market_employeeWhereInput
    orderBy?: market_employeeOrderByWithAggregationInput | market_employeeOrderByWithAggregationInput[]
    by: Market_employeeScalarFieldEnum[] | Market_employeeScalarFieldEnum
    having?: market_employeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Market_employeeCountAggregateInputType | true
    _avg?: Market_employeeAvgAggregateInputType
    _sum?: Market_employeeSumAggregateInputType
    _min?: Market_employeeMinAggregateInputType
    _max?: Market_employeeMaxAggregateInputType
  }

  export type Market_employeeGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary: number | null
    bio: string | null
    skills: string | null
    experience: number | null
    createdAt: Date
    _count: Market_employeeCountAggregateOutputType | null
    _avg: Market_employeeAvgAggregateOutputType | null
    _sum: Market_employeeSumAggregateOutputType | null
    _min: Market_employeeMinAggregateOutputType | null
    _max: Market_employeeMaxAggregateOutputType | null
  }

  type GetMarket_employeeGroupByPayload<T extends market_employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Market_employeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Market_employeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Market_employeeGroupByOutputType[P]>
            : GetScalarType<T[P], Market_employeeGroupByOutputType[P]>
        }
      >
    >


  export type market_employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    salary?: boolean
    bio?: boolean
    skills?: boolean
    experience?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["market_employee"]>

  export type market_employeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    salary?: boolean
    bio?: boolean
    skills?: boolean
    experience?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["market_employee"]>

  export type market_employeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    salary?: boolean
    bio?: boolean
    skills?: boolean
    experience?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["market_employee"]>

  export type market_employeeSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    role?: boolean
    salary?: boolean
    bio?: boolean
    skills?: boolean
    experience?: boolean
    createdAt?: boolean
  }

  export type market_employeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "role" | "salary" | "bio" | "skills" | "experience" | "createdAt", ExtArgs["result"]["market_employee"]>

  export type $market_employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "market_employee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      role: $Enums.UserRole
      salary: number | null
      bio: string | null
      skills: string | null
      experience: number | null
      createdAt: Date
    }, ExtArgs["result"]["market_employee"]>
    composites: {}
  }

  type market_employeeGetPayload<S extends boolean | null | undefined | market_employeeDefaultArgs> = $Result.GetResult<Prisma.$market_employeePayload, S>

  type market_employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<market_employeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Market_employeeCountAggregateInputType | true
    }

  export interface market_employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['market_employee'], meta: { name: 'market_employee' } }
    /**
     * Find zero or one Market_employee that matches the filter.
     * @param {market_employeeFindUniqueArgs} args - Arguments to find a Market_employee
     * @example
     * // Get one Market_employee
     * const market_employee = await prisma.market_employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends market_employeeFindUniqueArgs>(args: SelectSubset<T, market_employeeFindUniqueArgs<ExtArgs>>): Prisma__market_employeeClient<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market_employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {market_employeeFindUniqueOrThrowArgs} args - Arguments to find a Market_employee
     * @example
     * // Get one Market_employee
     * const market_employee = await prisma.market_employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends market_employeeFindUniqueOrThrowArgs>(args: SelectSubset<T, market_employeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__market_employeeClient<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market_employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_employeeFindFirstArgs} args - Arguments to find a Market_employee
     * @example
     * // Get one Market_employee
     * const market_employee = await prisma.market_employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends market_employeeFindFirstArgs>(args?: SelectSubset<T, market_employeeFindFirstArgs<ExtArgs>>): Prisma__market_employeeClient<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market_employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_employeeFindFirstOrThrowArgs} args - Arguments to find a Market_employee
     * @example
     * // Get one Market_employee
     * const market_employee = await prisma.market_employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends market_employeeFindFirstOrThrowArgs>(args?: SelectSubset<T, market_employeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__market_employeeClient<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Market_employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_employeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Market_employees
     * const market_employees = await prisma.market_employee.findMany()
     * 
     * // Get first 10 Market_employees
     * const market_employees = await prisma.market_employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const market_employeeWithIdOnly = await prisma.market_employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends market_employeeFindManyArgs>(args?: SelectSubset<T, market_employeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market_employee.
     * @param {market_employeeCreateArgs} args - Arguments to create a Market_employee.
     * @example
     * // Create one Market_employee
     * const Market_employee = await prisma.market_employee.create({
     *   data: {
     *     // ... data to create a Market_employee
     *   }
     * })
     * 
     */
    create<T extends market_employeeCreateArgs>(args: SelectSubset<T, market_employeeCreateArgs<ExtArgs>>): Prisma__market_employeeClient<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Market_employees.
     * @param {market_employeeCreateManyArgs} args - Arguments to create many Market_employees.
     * @example
     * // Create many Market_employees
     * const market_employee = await prisma.market_employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends market_employeeCreateManyArgs>(args?: SelectSubset<T, market_employeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Market_employees and returns the data saved in the database.
     * @param {market_employeeCreateManyAndReturnArgs} args - Arguments to create many Market_employees.
     * @example
     * // Create many Market_employees
     * const market_employee = await prisma.market_employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Market_employees and only return the `id`
     * const market_employeeWithIdOnly = await prisma.market_employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends market_employeeCreateManyAndReturnArgs>(args?: SelectSubset<T, market_employeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market_employee.
     * @param {market_employeeDeleteArgs} args - Arguments to delete one Market_employee.
     * @example
     * // Delete one Market_employee
     * const Market_employee = await prisma.market_employee.delete({
     *   where: {
     *     // ... filter to delete one Market_employee
     *   }
     * })
     * 
     */
    delete<T extends market_employeeDeleteArgs>(args: SelectSubset<T, market_employeeDeleteArgs<ExtArgs>>): Prisma__market_employeeClient<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market_employee.
     * @param {market_employeeUpdateArgs} args - Arguments to update one Market_employee.
     * @example
     * // Update one Market_employee
     * const market_employee = await prisma.market_employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends market_employeeUpdateArgs>(args: SelectSubset<T, market_employeeUpdateArgs<ExtArgs>>): Prisma__market_employeeClient<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Market_employees.
     * @param {market_employeeDeleteManyArgs} args - Arguments to filter Market_employees to delete.
     * @example
     * // Delete a few Market_employees
     * const { count } = await prisma.market_employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends market_employeeDeleteManyArgs>(args?: SelectSubset<T, market_employeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Market_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Market_employees
     * const market_employee = await prisma.market_employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends market_employeeUpdateManyArgs>(args: SelectSubset<T, market_employeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Market_employees and returns the data updated in the database.
     * @param {market_employeeUpdateManyAndReturnArgs} args - Arguments to update many Market_employees.
     * @example
     * // Update many Market_employees
     * const market_employee = await prisma.market_employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Market_employees and only return the `id`
     * const market_employeeWithIdOnly = await prisma.market_employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends market_employeeUpdateManyAndReturnArgs>(args: SelectSubset<T, market_employeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market_employee.
     * @param {market_employeeUpsertArgs} args - Arguments to update or create a Market_employee.
     * @example
     * // Update or create a Market_employee
     * const market_employee = await prisma.market_employee.upsert({
     *   create: {
     *     // ... data to create a Market_employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market_employee we want to update
     *   }
     * })
     */
    upsert<T extends market_employeeUpsertArgs>(args: SelectSubset<T, market_employeeUpsertArgs<ExtArgs>>): Prisma__market_employeeClient<$Result.GetResult<Prisma.$market_employeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Market_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_employeeCountArgs} args - Arguments to filter Market_employees to count.
     * @example
     * // Count the number of Market_employees
     * const count = await prisma.market_employee.count({
     *   where: {
     *     // ... the filter for the Market_employees we want to count
     *   }
     * })
    **/
    count<T extends market_employeeCountArgs>(
      args?: Subset<T, market_employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Market_employeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market_employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Market_employeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Market_employeeAggregateArgs>(args: Subset<T, Market_employeeAggregateArgs>): Prisma.PrismaPromise<GetMarket_employeeAggregateType<T>>

    /**
     * Group by Market_employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {market_employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends market_employeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: market_employeeGroupByArgs['orderBy'] }
        : { orderBy?: market_employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, market_employeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarket_employeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the market_employee model
   */
  readonly fields: market_employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for market_employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__market_employeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the market_employee model
   */
  interface market_employeeFieldRefs {
    readonly id: FieldRef<"market_employee", 'Int'>
    readonly first_name: FieldRef<"market_employee", 'String'>
    readonly last_name: FieldRef<"market_employee", 'String'>
    readonly email: FieldRef<"market_employee", 'String'>
    readonly role: FieldRef<"market_employee", 'UserRole'>
    readonly salary: FieldRef<"market_employee", 'Int'>
    readonly bio: FieldRef<"market_employee", 'String'>
    readonly skills: FieldRef<"market_employee", 'String'>
    readonly experience: FieldRef<"market_employee", 'Int'>
    readonly createdAt: FieldRef<"market_employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * market_employee findUnique
   */
  export type market_employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * Filter, which market_employee to fetch.
     */
    where: market_employeeWhereUniqueInput
  }

  /**
   * market_employee findUniqueOrThrow
   */
  export type market_employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * Filter, which market_employee to fetch.
     */
    where: market_employeeWhereUniqueInput
  }

  /**
   * market_employee findFirst
   */
  export type market_employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * Filter, which market_employee to fetch.
     */
    where?: market_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of market_employees to fetch.
     */
    orderBy?: market_employeeOrderByWithRelationInput | market_employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for market_employees.
     */
    cursor?: market_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` market_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` market_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of market_employees.
     */
    distinct?: Market_employeeScalarFieldEnum | Market_employeeScalarFieldEnum[]
  }

  /**
   * market_employee findFirstOrThrow
   */
  export type market_employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * Filter, which market_employee to fetch.
     */
    where?: market_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of market_employees to fetch.
     */
    orderBy?: market_employeeOrderByWithRelationInput | market_employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for market_employees.
     */
    cursor?: market_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` market_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` market_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of market_employees.
     */
    distinct?: Market_employeeScalarFieldEnum | Market_employeeScalarFieldEnum[]
  }

  /**
   * market_employee findMany
   */
  export type market_employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * Filter, which market_employees to fetch.
     */
    where?: market_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of market_employees to fetch.
     */
    orderBy?: market_employeeOrderByWithRelationInput | market_employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing market_employees.
     */
    cursor?: market_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` market_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` market_employees.
     */
    skip?: number
    distinct?: Market_employeeScalarFieldEnum | Market_employeeScalarFieldEnum[]
  }

  /**
   * market_employee create
   */
  export type market_employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * The data needed to create a market_employee.
     */
    data: XOR<market_employeeCreateInput, market_employeeUncheckedCreateInput>
  }

  /**
   * market_employee createMany
   */
  export type market_employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many market_employees.
     */
    data: market_employeeCreateManyInput | market_employeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * market_employee createManyAndReturn
   */
  export type market_employeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * The data used to create many market_employees.
     */
    data: market_employeeCreateManyInput | market_employeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * market_employee update
   */
  export type market_employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * The data needed to update a market_employee.
     */
    data: XOR<market_employeeUpdateInput, market_employeeUncheckedUpdateInput>
    /**
     * Choose, which market_employee to update.
     */
    where: market_employeeWhereUniqueInput
  }

  /**
   * market_employee updateMany
   */
  export type market_employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update market_employees.
     */
    data: XOR<market_employeeUpdateManyMutationInput, market_employeeUncheckedUpdateManyInput>
    /**
     * Filter which market_employees to update
     */
    where?: market_employeeWhereInput
    /**
     * Limit how many market_employees to update.
     */
    limit?: number
  }

  /**
   * market_employee updateManyAndReturn
   */
  export type market_employeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * The data used to update market_employees.
     */
    data: XOR<market_employeeUpdateManyMutationInput, market_employeeUncheckedUpdateManyInput>
    /**
     * Filter which market_employees to update
     */
    where?: market_employeeWhereInput
    /**
     * Limit how many market_employees to update.
     */
    limit?: number
  }

  /**
   * market_employee upsert
   */
  export type market_employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * The filter to search for the market_employee to update in case it exists.
     */
    where: market_employeeWhereUniqueInput
    /**
     * In case the market_employee found by the `where` argument doesn't exist, create a new market_employee with this data.
     */
    create: XOR<market_employeeCreateInput, market_employeeUncheckedCreateInput>
    /**
     * In case the market_employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<market_employeeUpdateInput, market_employeeUncheckedUpdateInput>
  }

  /**
   * market_employee delete
   */
  export type market_employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
    /**
     * Filter which market_employee to delete.
     */
    where: market_employeeWhereUniqueInput
  }

  /**
   * market_employee deleteMany
   */
  export type market_employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which market_employees to delete
     */
    where?: market_employeeWhereInput
    /**
     * Limit how many market_employees to delete.
     */
    limit?: number
  }

  /**
   * market_employee without action
   */
  export type market_employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the market_employee
     */
    select?: market_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the market_employee
     */
    omit?: market_employeeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    password: 'password',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    budget: 'budget'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    ownerID: 'ownerID'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    department: 'department',
    lead_id: 'lead_id',
    companyName: 'companyName',
    companyID: 'companyID'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    role: 'role',
    salary: 'salary',
    managerId: 'managerId',
    teamId: 'teamId',
    adminID: 'adminID',
    companyName: 'companyName',
    companyID: 'companyID'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descreption: 'descreption',
    content: 'content',
    attachement: 'attachement',
    teamId: 'teamId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const Market_employeeScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    role: 'role',
    salary: 'salary',
    bio: 'bio',
    skills: 'skills',
    experience: 'experience',
    createdAt: 'createdAt'
  };

  export type Market_employeeScalarFieldEnum = (typeof Market_employeeScalarFieldEnum)[keyof typeof Market_employeeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    clerkId?: StringFilter<"admin"> | string
    password?: StringNullableFilter<"admin"> | string | null
    email?: StringFilter<"admin"> | string
    first_name?: StringFilter<"admin"> | string
    last_name?: StringFilter<"admin"> | string
    budget?: FloatFilter<"admin"> | number
    company?: CompanyListRelationFilter
    employees?: EmployeeListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    budget?: SortOrder
    company?: companyOrderByRelationAggregateInput
    employees?: employeeOrderByRelationAggregateInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clerkId?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    password?: StringNullableFilter<"admin"> | string | null
    email?: StringFilter<"admin"> | string
    first_name?: StringFilter<"admin"> | string
    last_name?: StringFilter<"admin"> | string
    budget?: FloatFilter<"admin"> | number
    company?: CompanyListRelationFilter
    employees?: EmployeeListRelationFilter
  }, "id" | "clerkId">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    budget?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    clerkId?: StringWithAggregatesFilter<"admin"> | string
    password?: StringNullableWithAggregatesFilter<"admin"> | string | null
    email?: StringWithAggregatesFilter<"admin"> | string
    first_name?: StringWithAggregatesFilter<"admin"> | string
    last_name?: StringWithAggregatesFilter<"admin"> | string
    budget?: FloatWithAggregatesFilter<"admin"> | number
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: IntFilter<"company"> | number
    name?: StringFilter<"company"> | string
    email?: StringFilter<"company"> | string
    ownerID?: IntFilter<"company"> | number
    owner?: XOR<AdminScalarRelationFilter, adminWhereInput>
    team?: TeamListRelationFilter
    employee?: EmployeeListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    ownerID?: SortOrder
    owner?: adminOrderByWithRelationInput
    team?: teamOrderByRelationAggregateInput
    employee?: employeeOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ownerID?: number
    id_name?: companyIdNameCompoundUniqueInput
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    name?: StringFilter<"company"> | string
    email?: StringFilter<"company"> | string
    owner?: XOR<AdminScalarRelationFilter, adminWhereInput>
    team?: TeamListRelationFilter
    employee?: EmployeeListRelationFilter
  }, "id" | "ownerID" | "id_name">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    ownerID?: SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"company"> | number
    name?: StringWithAggregatesFilter<"company"> | string
    email?: StringWithAggregatesFilter<"company"> | string
    ownerID?: IntWithAggregatesFilter<"company"> | number
  }

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    id?: IntFilter<"team"> | number
    name?: StringFilter<"team"> | string
    department?: StringFilter<"team"> | string
    lead_id?: IntFilter<"team"> | number
    companyName?: StringFilter<"team"> | string
    companyID?: IntFilter<"team"> | number
    tasks?: TaskListRelationFilter
    lead?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
    members?: EmployeeListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }

  export type teamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    lead_id?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
    tasks?: taskOrderByRelationAggregateInput
    lead?: employeeOrderByWithRelationInput
    members?: employeeOrderByRelationAggregateInput
    company?: companyOrderByWithRelationInput
  }

  export type teamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    lead_id?: number
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    department?: StringFilter<"team"> | string
    companyName?: StringFilter<"team"> | string
    companyID?: IntFilter<"team"> | number
    tasks?: TaskListRelationFilter
    lead?: XOR<EmployeeScalarRelationFilter, employeeWhereInput>
    members?: EmployeeListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }, "id" | "name" | "lead_id">

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    lead_id?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
    _count?: teamCountOrderByAggregateInput
    _avg?: teamAvgOrderByAggregateInput
    _max?: teamMaxOrderByAggregateInput
    _min?: teamMinOrderByAggregateInput
    _sum?: teamSumOrderByAggregateInput
  }

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    OR?: teamScalarWhereWithAggregatesInput[]
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"team"> | number
    name?: StringWithAggregatesFilter<"team"> | string
    department?: StringWithAggregatesFilter<"team"> | string
    lead_id?: IntWithAggregatesFilter<"team"> | number
    companyName?: StringWithAggregatesFilter<"team"> | string
    companyID?: IntWithAggregatesFilter<"team"> | number
  }

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[]
    OR?: employeeWhereInput[]
    NOT?: employeeWhereInput | employeeWhereInput[]
    id?: IntFilter<"employee"> | number
    first_name?: StringFilter<"employee"> | string
    last_name?: StringFilter<"employee"> | string
    email?: StringFilter<"employee"> | string
    role?: EnumUserRoleFilter<"employee"> | $Enums.UserRole
    salary?: IntNullableFilter<"employee"> | number | null
    managerId?: IntNullableFilter<"employee"> | number | null
    teamId?: IntFilter<"employee"> | number
    adminID?: IntFilter<"employee"> | number
    companyName?: StringFilter<"employee"> | string
    companyID?: IntFilter<"employee"> | number
    manager?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    managedEmployees?: EmployeeListRelationFilter
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
    leadsTeam?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    teamId?: SortOrder
    adminID?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
    manager?: employeeOrderByWithRelationInput
    managedEmployees?: employeeOrderByRelationAggregateInput
    team?: teamOrderByWithRelationInput
    leadsTeam?: teamOrderByWithRelationInput
    admin?: adminOrderByWithRelationInput
    company?: companyOrderByWithRelationInput
  }

  export type employeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: employeeWhereInput | employeeWhereInput[]
    OR?: employeeWhereInput[]
    NOT?: employeeWhereInput | employeeWhereInput[]
    first_name?: StringFilter<"employee"> | string
    last_name?: StringFilter<"employee"> | string
    email?: StringFilter<"employee"> | string
    role?: EnumUserRoleFilter<"employee"> | $Enums.UserRole
    salary?: IntNullableFilter<"employee"> | number | null
    managerId?: IntNullableFilter<"employee"> | number | null
    teamId?: IntFilter<"employee"> | number
    adminID?: IntFilter<"employee"> | number
    companyName?: StringFilter<"employee"> | string
    companyID?: IntFilter<"employee"> | number
    manager?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    managedEmployees?: EmployeeListRelationFilter
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
    leadsTeam?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }, "id">

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    teamId?: SortOrder
    adminID?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
    _count?: employeeCountOrderByAggregateInput
    _avg?: employeeAvgOrderByAggregateInput
    _max?: employeeMaxOrderByAggregateInput
    _min?: employeeMinOrderByAggregateInput
    _sum?: employeeSumOrderByAggregateInput
  }

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[]
    OR?: employeeScalarWhereWithAggregatesInput[]
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"employee"> | number
    first_name?: StringWithAggregatesFilter<"employee"> | string
    last_name?: StringWithAggregatesFilter<"employee"> | string
    email?: StringWithAggregatesFilter<"employee"> | string
    role?: EnumUserRoleWithAggregatesFilter<"employee"> | $Enums.UserRole
    salary?: IntNullableWithAggregatesFilter<"employee"> | number | null
    managerId?: IntNullableWithAggregatesFilter<"employee"> | number | null
    teamId?: IntWithAggregatesFilter<"employee"> | number
    adminID?: IntWithAggregatesFilter<"employee"> | number
    companyName?: StringWithAggregatesFilter<"employee"> | string
    companyID?: IntWithAggregatesFilter<"employee"> | number
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: IntFilter<"task"> | number
    title?: StringFilter<"task"> | string
    descreption?: StringNullableFilter<"task"> | string | null
    content?: StringFilter<"task"> | string
    attachement?: StringNullableFilter<"task"> | string | null
    teamId?: IntFilter<"task"> | number
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descreption?: SortOrderInput | SortOrder
    content?: SortOrder
    attachement?: SortOrderInput | SortOrder
    teamId?: SortOrder
    team?: teamOrderByWithRelationInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    title?: StringFilter<"task"> | string
    descreption?: StringNullableFilter<"task"> | string | null
    content?: StringFilter<"task"> | string
    attachement?: StringNullableFilter<"task"> | string | null
    teamId?: IntFilter<"task"> | number
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }, "id">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descreption?: SortOrderInput | SortOrder
    content?: SortOrder
    attachement?: SortOrderInput | SortOrder
    teamId?: SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"task"> | number
    title?: StringWithAggregatesFilter<"task"> | string
    descreption?: StringNullableWithAggregatesFilter<"task"> | string | null
    content?: StringWithAggregatesFilter<"task"> | string
    attachement?: StringNullableWithAggregatesFilter<"task"> | string | null
    teamId?: IntWithAggregatesFilter<"task"> | number
  }

  export type market_employeeWhereInput = {
    AND?: market_employeeWhereInput | market_employeeWhereInput[]
    OR?: market_employeeWhereInput[]
    NOT?: market_employeeWhereInput | market_employeeWhereInput[]
    id?: IntFilter<"market_employee"> | number
    first_name?: StringFilter<"market_employee"> | string
    last_name?: StringFilter<"market_employee"> | string
    email?: StringFilter<"market_employee"> | string
    role?: EnumUserRoleFilter<"market_employee"> | $Enums.UserRole
    salary?: IntNullableFilter<"market_employee"> | number | null
    bio?: StringNullableFilter<"market_employee"> | string | null
    skills?: StringNullableFilter<"market_employee"> | string | null
    experience?: IntNullableFilter<"market_employee"> | number | null
    createdAt?: DateTimeFilter<"market_employee"> | Date | string
  }

  export type market_employeeOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type market_employeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: market_employeeWhereInput | market_employeeWhereInput[]
    OR?: market_employeeWhereInput[]
    NOT?: market_employeeWhereInput | market_employeeWhereInput[]
    first_name?: StringFilter<"market_employee"> | string
    last_name?: StringFilter<"market_employee"> | string
    role?: EnumUserRoleFilter<"market_employee"> | $Enums.UserRole
    salary?: IntNullableFilter<"market_employee"> | number | null
    bio?: StringNullableFilter<"market_employee"> | string | null
    skills?: StringNullableFilter<"market_employee"> | string | null
    experience?: IntNullableFilter<"market_employee"> | number | null
    createdAt?: DateTimeFilter<"market_employee"> | Date | string
  }, "id" | "email">

  export type market_employeeOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: market_employeeCountOrderByAggregateInput
    _avg?: market_employeeAvgOrderByAggregateInput
    _max?: market_employeeMaxOrderByAggregateInput
    _min?: market_employeeMinOrderByAggregateInput
    _sum?: market_employeeSumOrderByAggregateInput
  }

  export type market_employeeScalarWhereWithAggregatesInput = {
    AND?: market_employeeScalarWhereWithAggregatesInput | market_employeeScalarWhereWithAggregatesInput[]
    OR?: market_employeeScalarWhereWithAggregatesInput[]
    NOT?: market_employeeScalarWhereWithAggregatesInput | market_employeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"market_employee"> | number
    first_name?: StringWithAggregatesFilter<"market_employee"> | string
    last_name?: StringWithAggregatesFilter<"market_employee"> | string
    email?: StringWithAggregatesFilter<"market_employee"> | string
    role?: EnumUserRoleWithAggregatesFilter<"market_employee"> | $Enums.UserRole
    salary?: IntNullableWithAggregatesFilter<"market_employee"> | number | null
    bio?: StringNullableWithAggregatesFilter<"market_employee"> | string | null
    skills?: StringNullableWithAggregatesFilter<"market_employee"> | string | null
    experience?: IntNullableWithAggregatesFilter<"market_employee"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"market_employee"> | Date | string
  }

  export type adminCreateInput = {
    clerkId: string
    password?: string | null
    email: string
    first_name: string
    last_name: string
    budget: number
    company?: companyCreateNestedManyWithoutOwnerInput
    employees?: employeeCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    id?: number
    clerkId: string
    password?: string | null
    email: string
    first_name: string
    last_name: string
    budget: number
    company?: companyUncheckedCreateNestedManyWithoutOwnerInput
    employees?: employeeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    company?: companyUpdateManyWithoutOwnerNestedInput
    employees?: employeeUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    company?: companyUncheckedUpdateManyWithoutOwnerNestedInput
    employees?: employeeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    id?: number
    clerkId: string
    password?: string | null
    email: string
    first_name: string
    last_name: string
    budget: number
  }

  export type adminUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
  }

  export type companyCreateInput = {
    name: string
    email: string
    owner: adminCreateNestedOneWithoutCompanyInput
    team?: teamCreateNestedManyWithoutCompanyInput
    employee?: employeeCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    ownerID: number
    team?: teamUncheckedCreateNestedManyWithoutCompanyInput
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    owner?: adminUpdateOneRequiredWithoutCompanyNestedInput
    team?: teamUpdateManyWithoutCompanyNestedInput
    employee?: employeeUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ownerID?: IntFieldUpdateOperationsInput | number
    team?: teamUncheckedUpdateManyWithoutCompanyNestedInput
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id?: number
    name: string
    email: string
    ownerID: number
  }

  export type companyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type companyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ownerID?: IntFieldUpdateOperationsInput | number
  }

  export type teamCreateInput = {
    name: string
    department: string
    tasks?: taskCreateNestedManyWithoutTeamInput
    lead: employeeCreateNestedOneWithoutLeadsTeamInput
    members?: employeeCreateNestedManyWithoutTeamInput
    company: companyCreateNestedOneWithoutTeamInput
  }

  export type teamUncheckedCreateInput = {
    id?: number
    name: string
    department: string
    lead_id: number
    companyName: string
    companyID: number
    tasks?: taskUncheckedCreateNestedManyWithoutTeamInput
    members?: employeeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    tasks?: taskUpdateManyWithoutTeamNestedInput
    lead?: employeeUpdateOneRequiredWithoutLeadsTeamNestedInput
    members?: employeeUpdateManyWithoutTeamNestedInput
    company?: companyUpdateOneRequiredWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    lead_id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    tasks?: taskUncheckedUpdateManyWithoutTeamNestedInput
    members?: employeeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamCreateManyInput = {
    id?: number
    name: string
    department: string
    lead_id: number
    companyName: string
    companyID: number
  }

  export type teamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type teamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    lead_id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
  }

  export type employeeCreateInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    manager?: employeeCreateNestedOneWithoutManagedEmployeesInput
    managedEmployees?: employeeCreateNestedManyWithoutManagerInput
    team: teamCreateNestedOneWithoutMembersInput
    leadsTeam?: teamCreateNestedOneWithoutLeadInput
    admin: adminCreateNestedOneWithoutEmployeesInput
    company: companyCreateNestedOneWithoutEmployeeInput
  }

  export type employeeUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    teamId: number
    adminID: number
    companyName: string
    companyID: number
    managedEmployees?: employeeUncheckedCreateNestedManyWithoutManagerInput
    leadsTeam?: teamUncheckedCreateNestedOneWithoutLeadInput
  }

  export type employeeUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: employeeUpdateOneWithoutManagedEmployeesNestedInput
    managedEmployees?: employeeUpdateManyWithoutManagerNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    leadsTeam?: teamUpdateOneWithoutLeadNestedInput
    admin?: adminUpdateOneRequiredWithoutEmployeesNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    adminID?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    managedEmployees?: employeeUncheckedUpdateManyWithoutManagerNestedInput
    leadsTeam?: teamUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type employeeCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    teamId: number
    adminID: number
    companyName: string
    companyID: number
  }

  export type employeeUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type employeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    adminID?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
  }

  export type taskCreateInput = {
    title: string
    descreption?: string | null
    content: string
    attachement?: string | null
    team: teamCreateNestedOneWithoutTasksInput
  }

  export type taskUncheckedCreateInput = {
    id?: number
    title: string
    descreption?: string | null
    content: string
    attachement?: string | null
    teamId: number
  }

  export type taskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    descreption?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachement?: NullableStringFieldUpdateOperationsInput | string | null
    team?: teamUpdateOneRequiredWithoutTasksNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descreption?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachement?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type taskCreateManyInput = {
    id?: number
    title: string
    descreption?: string | null
    content: string
    attachement?: string | null
    teamId: number
  }

  export type taskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    descreption?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type taskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descreption?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachement?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type market_employeeCreateInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    bio?: string | null
    skills?: string | null
    experience?: number | null
    createdAt?: Date | string
  }

  export type market_employeeUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    bio?: string | null
    skills?: string | null
    experience?: number | null
    createdAt?: Date | string
  }

  export type market_employeeUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type market_employeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type market_employeeCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    bio?: string | null
    skills?: string | null
    experience?: number | null
    createdAt?: Date | string
  }

  export type market_employeeUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type market_employeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CompanyListRelationFilter = {
    every?: companyWhereInput
    some?: companyWhereInput
    none?: companyWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput
    some?: employeeWhereInput
    none?: employeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    budget?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    budget?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    budget?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: adminWhereInput
    isNot?: adminWhereInput
  }

  export type TeamListRelationFilter = {
    every?: teamWhereInput
    some?: teamWhereInput
    none?: teamWhereInput
  }

  export type teamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyIdNameCompoundUniqueInput = {
    id: number
    name: string
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    ownerID?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerID?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    ownerID?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    ownerID?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    id?: SortOrder
    ownerID?: SortOrder
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type EmployeeScalarRelationFilter = {
    is?: employeeWhereInput
    isNot?: employeeWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: companyWhereInput
    isNot?: companyWhereInput
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    lead_id?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
  }

  export type teamAvgOrderByAggregateInput = {
    id?: SortOrder
    lead_id?: SortOrder
    companyID?: SortOrder
  }

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    lead_id?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
  }

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    lead_id?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
  }

  export type teamSumOrderByAggregateInput = {
    id?: SortOrder
    lead_id?: SortOrder
    companyID?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: employeeWhereInput | null
    isNot?: employeeWhereInput | null
  }

  export type TeamScalarRelationFilter = {
    is?: teamWhereInput
    isNot?: teamWhereInput
  }

  export type TeamNullableScalarRelationFilter = {
    is?: teamWhereInput | null
    isNot?: teamWhereInput | null
  }

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrder
    managerId?: SortOrder
    teamId?: SortOrder
    adminID?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
  }

  export type employeeAvgOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
    managerId?: SortOrder
    teamId?: SortOrder
    adminID?: SortOrder
    companyID?: SortOrder
  }

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrder
    managerId?: SortOrder
    teamId?: SortOrder
    adminID?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
  }

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrder
    managerId?: SortOrder
    teamId?: SortOrder
    adminID?: SortOrder
    companyName?: SortOrder
    companyID?: SortOrder
  }

  export type employeeSumOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
    managerId?: SortOrder
    teamId?: SortOrder
    adminID?: SortOrder
    companyID?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descreption?: SortOrder
    content?: SortOrder
    attachement?: SortOrder
    teamId?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descreption?: SortOrder
    content?: SortOrder
    attachement?: SortOrder
    teamId?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descreption?: SortOrder
    content?: SortOrder
    attachement?: SortOrder
    teamId?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type market_employeeCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    createdAt?: SortOrder
  }

  export type market_employeeAvgOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
    experience?: SortOrder
  }

  export type market_employeeMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    createdAt?: SortOrder
  }

  export type market_employeeMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    salary?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    createdAt?: SortOrder
  }

  export type market_employeeSumOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
    experience?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type companyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput> | companyCreateWithoutOwnerInput[] | companyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: companyCreateOrConnectWithoutOwnerInput | companyCreateOrConnectWithoutOwnerInput[]
    createMany?: companyCreateManyOwnerInputEnvelope
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
  }

  export type employeeCreateNestedManyWithoutAdminInput = {
    create?: XOR<employeeCreateWithoutAdminInput, employeeUncheckedCreateWithoutAdminInput> | employeeCreateWithoutAdminInput[] | employeeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutAdminInput | employeeCreateOrConnectWithoutAdminInput[]
    createMany?: employeeCreateManyAdminInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type companyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput> | companyCreateWithoutOwnerInput[] | companyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: companyCreateOrConnectWithoutOwnerInput | companyCreateOrConnectWithoutOwnerInput[]
    createMany?: companyCreateManyOwnerInputEnvelope
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
  }

  export type employeeUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<employeeCreateWithoutAdminInput, employeeUncheckedCreateWithoutAdminInput> | employeeCreateWithoutAdminInput[] | employeeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutAdminInput | employeeCreateOrConnectWithoutAdminInput[]
    createMany?: employeeCreateManyAdminInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type companyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput> | companyCreateWithoutOwnerInput[] | companyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: companyCreateOrConnectWithoutOwnerInput | companyCreateOrConnectWithoutOwnerInput[]
    upsert?: companyUpsertWithWhereUniqueWithoutOwnerInput | companyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: companyCreateManyOwnerInputEnvelope
    set?: companyWhereUniqueInput | companyWhereUniqueInput[]
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[]
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    update?: companyUpdateWithWhereUniqueWithoutOwnerInput | companyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: companyUpdateManyWithWhereWithoutOwnerInput | companyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[]
  }

  export type employeeUpdateManyWithoutAdminNestedInput = {
    create?: XOR<employeeCreateWithoutAdminInput, employeeUncheckedCreateWithoutAdminInput> | employeeCreateWithoutAdminInput[] | employeeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutAdminInput | employeeCreateOrConnectWithoutAdminInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutAdminInput | employeeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: employeeCreateManyAdminInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutAdminInput | employeeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutAdminInput | employeeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type companyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput> | companyCreateWithoutOwnerInput[] | companyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: companyCreateOrConnectWithoutOwnerInput | companyCreateOrConnectWithoutOwnerInput[]
    upsert?: companyUpsertWithWhereUniqueWithoutOwnerInput | companyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: companyCreateManyOwnerInputEnvelope
    set?: companyWhereUniqueInput | companyWhereUniqueInput[]
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[]
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[]
    update?: companyUpdateWithWhereUniqueWithoutOwnerInput | companyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: companyUpdateManyWithWhereWithoutOwnerInput | companyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[]
  }

  export type employeeUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<employeeCreateWithoutAdminInput, employeeUncheckedCreateWithoutAdminInput> | employeeCreateWithoutAdminInput[] | employeeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutAdminInput | employeeCreateOrConnectWithoutAdminInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutAdminInput | employeeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: employeeCreateManyAdminInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutAdminInput | employeeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutAdminInput | employeeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type adminCreateNestedOneWithoutCompanyInput = {
    create?: XOR<adminCreateWithoutCompanyInput, adminUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: adminCreateOrConnectWithoutCompanyInput
    connect?: adminWhereUniqueInput
  }

  export type teamCreateNestedManyWithoutCompanyInput = {
    create?: XOR<teamCreateWithoutCompanyInput, teamUncheckedCreateWithoutCompanyInput> | teamCreateWithoutCompanyInput[] | teamUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: teamCreateOrConnectWithoutCompanyInput | teamCreateOrConnectWithoutCompanyInput[]
    createMany?: teamCreateManyCompanyInputEnvelope
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
  }

  export type employeeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput> | employeeCreateWithoutCompanyInput[] | employeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[]
    createMany?: employeeCreateManyCompanyInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type teamUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<teamCreateWithoutCompanyInput, teamUncheckedCreateWithoutCompanyInput> | teamCreateWithoutCompanyInput[] | teamUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: teamCreateOrConnectWithoutCompanyInput | teamCreateOrConnectWithoutCompanyInput[]
    createMany?: teamCreateManyCompanyInputEnvelope
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
  }

  export type employeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput> | employeeCreateWithoutCompanyInput[] | employeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[]
    createMany?: employeeCreateManyCompanyInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type adminUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<adminCreateWithoutCompanyInput, adminUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: adminCreateOrConnectWithoutCompanyInput
    upsert?: adminUpsertWithoutCompanyInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutCompanyInput, adminUpdateWithoutCompanyInput>, adminUncheckedUpdateWithoutCompanyInput>
  }

  export type teamUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<teamCreateWithoutCompanyInput, teamUncheckedCreateWithoutCompanyInput> | teamCreateWithoutCompanyInput[] | teamUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: teamCreateOrConnectWithoutCompanyInput | teamCreateOrConnectWithoutCompanyInput[]
    upsert?: teamUpsertWithWhereUniqueWithoutCompanyInput | teamUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: teamCreateManyCompanyInputEnvelope
    set?: teamWhereUniqueInput | teamWhereUniqueInput[]
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[]
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    update?: teamUpdateWithWhereUniqueWithoutCompanyInput | teamUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: teamUpdateManyWithWhereWithoutCompanyInput | teamUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[]
  }

  export type employeeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput> | employeeCreateWithoutCompanyInput[] | employeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutCompanyInput | employeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: employeeCreateManyCompanyInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutCompanyInput | employeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutCompanyInput | employeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type teamUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<teamCreateWithoutCompanyInput, teamUncheckedCreateWithoutCompanyInput> | teamCreateWithoutCompanyInput[] | teamUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: teamCreateOrConnectWithoutCompanyInput | teamCreateOrConnectWithoutCompanyInput[]
    upsert?: teamUpsertWithWhereUniqueWithoutCompanyInput | teamUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: teamCreateManyCompanyInputEnvelope
    set?: teamWhereUniqueInput | teamWhereUniqueInput[]
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[]
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    update?: teamUpdateWithWhereUniqueWithoutCompanyInput | teamUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: teamUpdateManyWithWhereWithoutCompanyInput | teamUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[]
  }

  export type employeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput> | employeeCreateWithoutCompanyInput[] | employeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutCompanyInput | employeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: employeeCreateManyCompanyInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutCompanyInput | employeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutCompanyInput | employeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type taskCreateNestedManyWithoutTeamInput = {
    create?: XOR<taskCreateWithoutTeamInput, taskUncheckedCreateWithoutTeamInput> | taskCreateWithoutTeamInput[] | taskUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTeamInput | taskCreateOrConnectWithoutTeamInput[]
    createMany?: taskCreateManyTeamInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type employeeCreateNestedOneWithoutLeadsTeamInput = {
    create?: XOR<employeeCreateWithoutLeadsTeamInput, employeeUncheckedCreateWithoutLeadsTeamInput>
    connectOrCreate?: employeeCreateOrConnectWithoutLeadsTeamInput
    connect?: employeeWhereUniqueInput
  }

  export type employeeCreateNestedManyWithoutTeamInput = {
    create?: XOR<employeeCreateWithoutTeamInput, employeeUncheckedCreateWithoutTeamInput> | employeeCreateWithoutTeamInput[] | employeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutTeamInput | employeeCreateOrConnectWithoutTeamInput[]
    createMany?: employeeCreateManyTeamInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type companyCreateNestedOneWithoutTeamInput = {
    create?: XOR<companyCreateWithoutTeamInput, companyUncheckedCreateWithoutTeamInput>
    connectOrCreate?: companyCreateOrConnectWithoutTeamInput
    connect?: companyWhereUniqueInput
  }

  export type taskUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<taskCreateWithoutTeamInput, taskUncheckedCreateWithoutTeamInput> | taskCreateWithoutTeamInput[] | taskUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTeamInput | taskCreateOrConnectWithoutTeamInput[]
    createMany?: taskCreateManyTeamInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type employeeUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<employeeCreateWithoutTeamInput, employeeUncheckedCreateWithoutTeamInput> | employeeCreateWithoutTeamInput[] | employeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutTeamInput | employeeCreateOrConnectWithoutTeamInput[]
    createMany?: employeeCreateManyTeamInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type taskUpdateManyWithoutTeamNestedInput = {
    create?: XOR<taskCreateWithoutTeamInput, taskUncheckedCreateWithoutTeamInput> | taskCreateWithoutTeamInput[] | taskUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTeamInput | taskCreateOrConnectWithoutTeamInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutTeamInput | taskUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: taskCreateManyTeamInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutTeamInput | taskUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: taskUpdateManyWithWhereWithoutTeamInput | taskUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type employeeUpdateOneRequiredWithoutLeadsTeamNestedInput = {
    create?: XOR<employeeCreateWithoutLeadsTeamInput, employeeUncheckedCreateWithoutLeadsTeamInput>
    connectOrCreate?: employeeCreateOrConnectWithoutLeadsTeamInput
    upsert?: employeeUpsertWithoutLeadsTeamInput
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutLeadsTeamInput, employeeUpdateWithoutLeadsTeamInput>, employeeUncheckedUpdateWithoutLeadsTeamInput>
  }

  export type employeeUpdateManyWithoutTeamNestedInput = {
    create?: XOR<employeeCreateWithoutTeamInput, employeeUncheckedCreateWithoutTeamInput> | employeeCreateWithoutTeamInput[] | employeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutTeamInput | employeeCreateOrConnectWithoutTeamInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutTeamInput | employeeUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: employeeCreateManyTeamInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutTeamInput | employeeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutTeamInput | employeeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type companyUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<companyCreateWithoutTeamInput, companyUncheckedCreateWithoutTeamInput>
    connectOrCreate?: companyCreateOrConnectWithoutTeamInput
    upsert?: companyUpsertWithoutTeamInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutTeamInput, companyUpdateWithoutTeamInput>, companyUncheckedUpdateWithoutTeamInput>
  }

  export type taskUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<taskCreateWithoutTeamInput, taskUncheckedCreateWithoutTeamInput> | taskCreateWithoutTeamInput[] | taskUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTeamInput | taskCreateOrConnectWithoutTeamInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutTeamInput | taskUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: taskCreateManyTeamInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutTeamInput | taskUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: taskUpdateManyWithWhereWithoutTeamInput | taskUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type employeeUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<employeeCreateWithoutTeamInput, employeeUncheckedCreateWithoutTeamInput> | employeeCreateWithoutTeamInput[] | employeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutTeamInput | employeeCreateOrConnectWithoutTeamInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutTeamInput | employeeUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: employeeCreateManyTeamInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutTeamInput | employeeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutTeamInput | employeeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type employeeCreateNestedOneWithoutManagedEmployeesInput = {
    create?: XOR<employeeCreateWithoutManagedEmployeesInput, employeeUncheckedCreateWithoutManagedEmployeesInput>
    connectOrCreate?: employeeCreateOrConnectWithoutManagedEmployeesInput
    connect?: employeeWhereUniqueInput
  }

  export type employeeCreateNestedManyWithoutManagerInput = {
    create?: XOR<employeeCreateWithoutManagerInput, employeeUncheckedCreateWithoutManagerInput> | employeeCreateWithoutManagerInput[] | employeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutManagerInput | employeeCreateOrConnectWithoutManagerInput[]
    createMany?: employeeCreateManyManagerInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type teamCreateNestedOneWithoutMembersInput = {
    create?: XOR<teamCreateWithoutMembersInput, teamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: teamCreateOrConnectWithoutMembersInput
    connect?: teamWhereUniqueInput
  }

  export type teamCreateNestedOneWithoutLeadInput = {
    create?: XOR<teamCreateWithoutLeadInput, teamUncheckedCreateWithoutLeadInput>
    connectOrCreate?: teamCreateOrConnectWithoutLeadInput
    connect?: teamWhereUniqueInput
  }

  export type adminCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<adminCreateWithoutEmployeesInput, adminUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: adminCreateOrConnectWithoutEmployeesInput
    connect?: adminWhereUniqueInput
  }

  export type companyCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: companyCreateOrConnectWithoutEmployeeInput
    connect?: companyWhereUniqueInput
  }

  export type employeeUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<employeeCreateWithoutManagerInput, employeeUncheckedCreateWithoutManagerInput> | employeeCreateWithoutManagerInput[] | employeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutManagerInput | employeeCreateOrConnectWithoutManagerInput[]
    createMany?: employeeCreateManyManagerInputEnvelope
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
  }

  export type teamUncheckedCreateNestedOneWithoutLeadInput = {
    create?: XOR<teamCreateWithoutLeadInput, teamUncheckedCreateWithoutLeadInput>
    connectOrCreate?: teamCreateOrConnectWithoutLeadInput
    connect?: teamWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type employeeUpdateOneWithoutManagedEmployeesNestedInput = {
    create?: XOR<employeeCreateWithoutManagedEmployeesInput, employeeUncheckedCreateWithoutManagedEmployeesInput>
    connectOrCreate?: employeeCreateOrConnectWithoutManagedEmployeesInput
    upsert?: employeeUpsertWithoutManagedEmployeesInput
    disconnect?: employeeWhereInput | boolean
    delete?: employeeWhereInput | boolean
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutManagedEmployeesInput, employeeUpdateWithoutManagedEmployeesInput>, employeeUncheckedUpdateWithoutManagedEmployeesInput>
  }

  export type employeeUpdateManyWithoutManagerNestedInput = {
    create?: XOR<employeeCreateWithoutManagerInput, employeeUncheckedCreateWithoutManagerInput> | employeeCreateWithoutManagerInput[] | employeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutManagerInput | employeeCreateOrConnectWithoutManagerInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutManagerInput | employeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: employeeCreateManyManagerInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutManagerInput | employeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutManagerInput | employeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type teamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<teamCreateWithoutMembersInput, teamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: teamCreateOrConnectWithoutMembersInput
    upsert?: teamUpsertWithoutMembersInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutMembersInput, teamUpdateWithoutMembersInput>, teamUncheckedUpdateWithoutMembersInput>
  }

  export type teamUpdateOneWithoutLeadNestedInput = {
    create?: XOR<teamCreateWithoutLeadInput, teamUncheckedCreateWithoutLeadInput>
    connectOrCreate?: teamCreateOrConnectWithoutLeadInput
    upsert?: teamUpsertWithoutLeadInput
    disconnect?: teamWhereInput | boolean
    delete?: teamWhereInput | boolean
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutLeadInput, teamUpdateWithoutLeadInput>, teamUncheckedUpdateWithoutLeadInput>
  }

  export type adminUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<adminCreateWithoutEmployeesInput, adminUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: adminCreateOrConnectWithoutEmployeesInput
    upsert?: adminUpsertWithoutEmployeesInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutEmployeesInput, adminUpdateWithoutEmployeesInput>, adminUncheckedUpdateWithoutEmployeesInput>
  }

  export type companyUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: companyCreateOrConnectWithoutEmployeeInput
    upsert?: companyUpsertWithoutEmployeeInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutEmployeeInput, companyUpdateWithoutEmployeeInput>, companyUncheckedUpdateWithoutEmployeeInput>
  }

  export type employeeUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<employeeCreateWithoutManagerInput, employeeUncheckedCreateWithoutManagerInput> | employeeCreateWithoutManagerInput[] | employeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: employeeCreateOrConnectWithoutManagerInput | employeeCreateOrConnectWithoutManagerInput[]
    upsert?: employeeUpsertWithWhereUniqueWithoutManagerInput | employeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: employeeCreateManyManagerInputEnvelope
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[]
    update?: employeeUpdateWithWhereUniqueWithoutManagerInput | employeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: employeeUpdateManyWithWhereWithoutManagerInput | employeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[]
  }

  export type teamUncheckedUpdateOneWithoutLeadNestedInput = {
    create?: XOR<teamCreateWithoutLeadInput, teamUncheckedCreateWithoutLeadInput>
    connectOrCreate?: teamCreateOrConnectWithoutLeadInput
    upsert?: teamUpsertWithoutLeadInput
    disconnect?: teamWhereInput | boolean
    delete?: teamWhereInput | boolean
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutLeadInput, teamUpdateWithoutLeadInput>, teamUncheckedUpdateWithoutLeadInput>
  }

  export type teamCreateNestedOneWithoutTasksInput = {
    create?: XOR<teamCreateWithoutTasksInput, teamUncheckedCreateWithoutTasksInput>
    connectOrCreate?: teamCreateOrConnectWithoutTasksInput
    connect?: teamWhereUniqueInput
  }

  export type teamUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<teamCreateWithoutTasksInput, teamUncheckedCreateWithoutTasksInput>
    connectOrCreate?: teamCreateOrConnectWithoutTasksInput
    upsert?: teamUpsertWithoutTasksInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutTasksInput, teamUpdateWithoutTasksInput>, teamUncheckedUpdateWithoutTasksInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type companyCreateWithoutOwnerInput = {
    name: string
    email: string
    team?: teamCreateNestedManyWithoutCompanyInput
    employee?: employeeCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    email: string
    team?: teamUncheckedCreateNestedManyWithoutCompanyInput
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutOwnerInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>
  }

  export type companyCreateManyOwnerInputEnvelope = {
    data: companyCreateManyOwnerInput | companyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type employeeCreateWithoutAdminInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    manager?: employeeCreateNestedOneWithoutManagedEmployeesInput
    managedEmployees?: employeeCreateNestedManyWithoutManagerInput
    team: teamCreateNestedOneWithoutMembersInput
    leadsTeam?: teamCreateNestedOneWithoutLeadInput
    company: companyCreateNestedOneWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutAdminInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    teamId: number
    companyName: string
    companyID: number
    managedEmployees?: employeeUncheckedCreateNestedManyWithoutManagerInput
    leadsTeam?: teamUncheckedCreateNestedOneWithoutLeadInput
  }

  export type employeeCreateOrConnectWithoutAdminInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutAdminInput, employeeUncheckedCreateWithoutAdminInput>
  }

  export type employeeCreateManyAdminInputEnvelope = {
    data: employeeCreateManyAdminInput | employeeCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type companyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: companyWhereUniqueInput
    update: XOR<companyUpdateWithoutOwnerInput, companyUncheckedUpdateWithoutOwnerInput>
    create: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>
  }

  export type companyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: companyWhereUniqueInput
    data: XOR<companyUpdateWithoutOwnerInput, companyUncheckedUpdateWithoutOwnerInput>
  }

  export type companyUpdateManyWithWhereWithoutOwnerInput = {
    where: companyScalarWhereInput
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[]
    OR?: companyScalarWhereInput[]
    NOT?: companyScalarWhereInput | companyScalarWhereInput[]
    id?: IntFilter<"company"> | number
    name?: StringFilter<"company"> | string
    email?: StringFilter<"company"> | string
    ownerID?: IntFilter<"company"> | number
  }

  export type employeeUpsertWithWhereUniqueWithoutAdminInput = {
    where: employeeWhereUniqueInput
    update: XOR<employeeUpdateWithoutAdminInput, employeeUncheckedUpdateWithoutAdminInput>
    create: XOR<employeeCreateWithoutAdminInput, employeeUncheckedCreateWithoutAdminInput>
  }

  export type employeeUpdateWithWhereUniqueWithoutAdminInput = {
    where: employeeWhereUniqueInput
    data: XOR<employeeUpdateWithoutAdminInput, employeeUncheckedUpdateWithoutAdminInput>
  }

  export type employeeUpdateManyWithWhereWithoutAdminInput = {
    where: employeeScalarWhereInput
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutAdminInput>
  }

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[]
    OR?: employeeScalarWhereInput[]
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[]
    id?: IntFilter<"employee"> | number
    first_name?: StringFilter<"employee"> | string
    last_name?: StringFilter<"employee"> | string
    email?: StringFilter<"employee"> | string
    role?: EnumUserRoleFilter<"employee"> | $Enums.UserRole
    salary?: IntNullableFilter<"employee"> | number | null
    managerId?: IntNullableFilter<"employee"> | number | null
    teamId?: IntFilter<"employee"> | number
    adminID?: IntFilter<"employee"> | number
    companyName?: StringFilter<"employee"> | string
    companyID?: IntFilter<"employee"> | number
  }

  export type adminCreateWithoutCompanyInput = {
    clerkId: string
    password?: string | null
    email: string
    first_name: string
    last_name: string
    budget: number
    employees?: employeeCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutCompanyInput = {
    id?: number
    clerkId: string
    password?: string | null
    email: string
    first_name: string
    last_name: string
    budget: number
    employees?: employeeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutCompanyInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutCompanyInput, adminUncheckedCreateWithoutCompanyInput>
  }

  export type teamCreateWithoutCompanyInput = {
    name: string
    department: string
    tasks?: taskCreateNestedManyWithoutTeamInput
    lead: employeeCreateNestedOneWithoutLeadsTeamInput
    members?: employeeCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    department: string
    lead_id: number
    tasks?: taskUncheckedCreateNestedManyWithoutTeamInput
    members?: employeeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutCompanyInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutCompanyInput, teamUncheckedCreateWithoutCompanyInput>
  }

  export type teamCreateManyCompanyInputEnvelope = {
    data: teamCreateManyCompanyInput | teamCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type employeeCreateWithoutCompanyInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    manager?: employeeCreateNestedOneWithoutManagedEmployeesInput
    managedEmployees?: employeeCreateNestedManyWithoutManagerInput
    team: teamCreateNestedOneWithoutMembersInput
    leadsTeam?: teamCreateNestedOneWithoutLeadInput
    admin: adminCreateNestedOneWithoutEmployeesInput
  }

  export type employeeUncheckedCreateWithoutCompanyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    teamId: number
    adminID: number
    managedEmployees?: employeeUncheckedCreateNestedManyWithoutManagerInput
    leadsTeam?: teamUncheckedCreateNestedOneWithoutLeadInput
  }

  export type employeeCreateOrConnectWithoutCompanyInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
  }

  export type employeeCreateManyCompanyInputEnvelope = {
    data: employeeCreateManyCompanyInput | employeeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type adminUpsertWithoutCompanyInput = {
    update: XOR<adminUpdateWithoutCompanyInput, adminUncheckedUpdateWithoutCompanyInput>
    create: XOR<adminCreateWithoutCompanyInput, adminUncheckedCreateWithoutCompanyInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutCompanyInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutCompanyInput, adminUncheckedUpdateWithoutCompanyInput>
  }

  export type adminUpdateWithoutCompanyInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    employees?: employeeUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    employees?: employeeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type teamUpsertWithWhereUniqueWithoutCompanyInput = {
    where: teamWhereUniqueInput
    update: XOR<teamUpdateWithoutCompanyInput, teamUncheckedUpdateWithoutCompanyInput>
    create: XOR<teamCreateWithoutCompanyInput, teamUncheckedCreateWithoutCompanyInput>
  }

  export type teamUpdateWithWhereUniqueWithoutCompanyInput = {
    where: teamWhereUniqueInput
    data: XOR<teamUpdateWithoutCompanyInput, teamUncheckedUpdateWithoutCompanyInput>
  }

  export type teamUpdateManyWithWhereWithoutCompanyInput = {
    where: teamScalarWhereInput
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyWithoutCompanyInput>
  }

  export type teamScalarWhereInput = {
    AND?: teamScalarWhereInput | teamScalarWhereInput[]
    OR?: teamScalarWhereInput[]
    NOT?: teamScalarWhereInput | teamScalarWhereInput[]
    id?: IntFilter<"team"> | number
    name?: StringFilter<"team"> | string
    department?: StringFilter<"team"> | string
    lead_id?: IntFilter<"team"> | number
    companyName?: StringFilter<"team"> | string
    companyID?: IntFilter<"team"> | number
  }

  export type employeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: employeeWhereUniqueInput
    update: XOR<employeeUpdateWithoutCompanyInput, employeeUncheckedUpdateWithoutCompanyInput>
    create: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
  }

  export type employeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: employeeWhereUniqueInput
    data: XOR<employeeUpdateWithoutCompanyInput, employeeUncheckedUpdateWithoutCompanyInput>
  }

  export type employeeUpdateManyWithWhereWithoutCompanyInput = {
    where: employeeScalarWhereInput
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type taskCreateWithoutTeamInput = {
    title: string
    descreption?: string | null
    content: string
    attachement?: string | null
  }

  export type taskUncheckedCreateWithoutTeamInput = {
    id?: number
    title: string
    descreption?: string | null
    content: string
    attachement?: string | null
  }

  export type taskCreateOrConnectWithoutTeamInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutTeamInput, taskUncheckedCreateWithoutTeamInput>
  }

  export type taskCreateManyTeamInputEnvelope = {
    data: taskCreateManyTeamInput | taskCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type employeeCreateWithoutLeadsTeamInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    manager?: employeeCreateNestedOneWithoutManagedEmployeesInput
    managedEmployees?: employeeCreateNestedManyWithoutManagerInput
    team: teamCreateNestedOneWithoutMembersInput
    admin: adminCreateNestedOneWithoutEmployeesInput
    company: companyCreateNestedOneWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutLeadsTeamInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    teamId: number
    adminID: number
    companyName: string
    companyID: number
    managedEmployees?: employeeUncheckedCreateNestedManyWithoutManagerInput
  }

  export type employeeCreateOrConnectWithoutLeadsTeamInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutLeadsTeamInput, employeeUncheckedCreateWithoutLeadsTeamInput>
  }

  export type employeeCreateWithoutTeamInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    manager?: employeeCreateNestedOneWithoutManagedEmployeesInput
    managedEmployees?: employeeCreateNestedManyWithoutManagerInput
    leadsTeam?: teamCreateNestedOneWithoutLeadInput
    admin: adminCreateNestedOneWithoutEmployeesInput
    company: companyCreateNestedOneWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutTeamInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    adminID: number
    companyName: string
    companyID: number
    managedEmployees?: employeeUncheckedCreateNestedManyWithoutManagerInput
    leadsTeam?: teamUncheckedCreateNestedOneWithoutLeadInput
  }

  export type employeeCreateOrConnectWithoutTeamInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutTeamInput, employeeUncheckedCreateWithoutTeamInput>
  }

  export type employeeCreateManyTeamInputEnvelope = {
    data: employeeCreateManyTeamInput | employeeCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type companyCreateWithoutTeamInput = {
    name: string
    email: string
    owner: adminCreateNestedOneWithoutCompanyInput
    employee?: employeeCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    email: string
    ownerID: number
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutTeamInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutTeamInput, companyUncheckedCreateWithoutTeamInput>
  }

  export type taskUpsertWithWhereUniqueWithoutTeamInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutTeamInput, taskUncheckedUpdateWithoutTeamInput>
    create: XOR<taskCreateWithoutTeamInput, taskUncheckedCreateWithoutTeamInput>
  }

  export type taskUpdateWithWhereUniqueWithoutTeamInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutTeamInput, taskUncheckedUpdateWithoutTeamInput>
  }

  export type taskUpdateManyWithWhereWithoutTeamInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutTeamInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    id?: IntFilter<"task"> | number
    title?: StringFilter<"task"> | string
    descreption?: StringNullableFilter<"task"> | string | null
    content?: StringFilter<"task"> | string
    attachement?: StringNullableFilter<"task"> | string | null
    teamId?: IntFilter<"task"> | number
  }

  export type employeeUpsertWithoutLeadsTeamInput = {
    update: XOR<employeeUpdateWithoutLeadsTeamInput, employeeUncheckedUpdateWithoutLeadsTeamInput>
    create: XOR<employeeCreateWithoutLeadsTeamInput, employeeUncheckedCreateWithoutLeadsTeamInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutLeadsTeamInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutLeadsTeamInput, employeeUncheckedUpdateWithoutLeadsTeamInput>
  }

  export type employeeUpdateWithoutLeadsTeamInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: employeeUpdateOneWithoutManagedEmployeesNestedInput
    managedEmployees?: employeeUpdateManyWithoutManagerNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    admin?: adminUpdateOneRequiredWithoutEmployeesNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutLeadsTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    adminID?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    managedEmployees?: employeeUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type employeeUpsertWithWhereUniqueWithoutTeamInput = {
    where: employeeWhereUniqueInput
    update: XOR<employeeUpdateWithoutTeamInput, employeeUncheckedUpdateWithoutTeamInput>
    create: XOR<employeeCreateWithoutTeamInput, employeeUncheckedCreateWithoutTeamInput>
  }

  export type employeeUpdateWithWhereUniqueWithoutTeamInput = {
    where: employeeWhereUniqueInput
    data: XOR<employeeUpdateWithoutTeamInput, employeeUncheckedUpdateWithoutTeamInput>
  }

  export type employeeUpdateManyWithWhereWithoutTeamInput = {
    where: employeeScalarWhereInput
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutTeamInput>
  }

  export type companyUpsertWithoutTeamInput = {
    update: XOR<companyUpdateWithoutTeamInput, companyUncheckedUpdateWithoutTeamInput>
    create: XOR<companyCreateWithoutTeamInput, companyUncheckedCreateWithoutTeamInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutTeamInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutTeamInput, companyUncheckedUpdateWithoutTeamInput>
  }

  export type companyUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    owner?: adminUpdateOneRequiredWithoutCompanyNestedInput
    employee?: employeeUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ownerID?: IntFieldUpdateOperationsInput | number
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type employeeCreateWithoutManagedEmployeesInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    manager?: employeeCreateNestedOneWithoutManagedEmployeesInput
    team: teamCreateNestedOneWithoutMembersInput
    leadsTeam?: teamCreateNestedOneWithoutLeadInput
    admin: adminCreateNestedOneWithoutEmployeesInput
    company: companyCreateNestedOneWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutManagedEmployeesInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    teamId: number
    adminID: number
    companyName: string
    companyID: number
    leadsTeam?: teamUncheckedCreateNestedOneWithoutLeadInput
  }

  export type employeeCreateOrConnectWithoutManagedEmployeesInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutManagedEmployeesInput, employeeUncheckedCreateWithoutManagedEmployeesInput>
  }

  export type employeeCreateWithoutManagerInput = {
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managedEmployees?: employeeCreateNestedManyWithoutManagerInput
    team: teamCreateNestedOneWithoutMembersInput
    leadsTeam?: teamCreateNestedOneWithoutLeadInput
    admin: adminCreateNestedOneWithoutEmployeesInput
    company: companyCreateNestedOneWithoutEmployeeInput
  }

  export type employeeUncheckedCreateWithoutManagerInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    teamId: number
    adminID: number
    companyName: string
    companyID: number
    managedEmployees?: employeeUncheckedCreateNestedManyWithoutManagerInput
    leadsTeam?: teamUncheckedCreateNestedOneWithoutLeadInput
  }

  export type employeeCreateOrConnectWithoutManagerInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutManagerInput, employeeUncheckedCreateWithoutManagerInput>
  }

  export type employeeCreateManyManagerInputEnvelope = {
    data: employeeCreateManyManagerInput | employeeCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type teamCreateWithoutMembersInput = {
    name: string
    department: string
    tasks?: taskCreateNestedManyWithoutTeamInput
    lead: employeeCreateNestedOneWithoutLeadsTeamInput
    company: companyCreateNestedOneWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    department: string
    lead_id: number
    companyName: string
    companyID: number
    tasks?: taskUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutMembersInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutMembersInput, teamUncheckedCreateWithoutMembersInput>
  }

  export type teamCreateWithoutLeadInput = {
    name: string
    department: string
    tasks?: taskCreateNestedManyWithoutTeamInput
    members?: employeeCreateNestedManyWithoutTeamInput
    company: companyCreateNestedOneWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutLeadInput = {
    id?: number
    name: string
    department: string
    companyName: string
    companyID: number
    tasks?: taskUncheckedCreateNestedManyWithoutTeamInput
    members?: employeeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutLeadInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutLeadInput, teamUncheckedCreateWithoutLeadInput>
  }

  export type adminCreateWithoutEmployeesInput = {
    clerkId: string
    password?: string | null
    email: string
    first_name: string
    last_name: string
    budget: number
    company?: companyCreateNestedManyWithoutOwnerInput
  }

  export type adminUncheckedCreateWithoutEmployeesInput = {
    id?: number
    clerkId: string
    password?: string | null
    email: string
    first_name: string
    last_name: string
    budget: number
    company?: companyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type adminCreateOrConnectWithoutEmployeesInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutEmployeesInput, adminUncheckedCreateWithoutEmployeesInput>
  }

  export type companyCreateWithoutEmployeeInput = {
    name: string
    email: string
    owner: adminCreateNestedOneWithoutCompanyInput
    team?: teamCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutEmployeeInput = {
    id?: number
    name: string
    email: string
    ownerID: number
    team?: teamUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutEmployeeInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>
  }

  export type employeeUpsertWithoutManagedEmployeesInput = {
    update: XOR<employeeUpdateWithoutManagedEmployeesInput, employeeUncheckedUpdateWithoutManagedEmployeesInput>
    create: XOR<employeeCreateWithoutManagedEmployeesInput, employeeUncheckedCreateWithoutManagedEmployeesInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutManagedEmployeesInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutManagedEmployeesInput, employeeUncheckedUpdateWithoutManagedEmployeesInput>
  }

  export type employeeUpdateWithoutManagedEmployeesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: employeeUpdateOneWithoutManagedEmployeesNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    leadsTeam?: teamUpdateOneWithoutLeadNestedInput
    admin?: adminUpdateOneRequiredWithoutEmployeesNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutManagedEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    adminID?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    leadsTeam?: teamUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type employeeUpsertWithWhereUniqueWithoutManagerInput = {
    where: employeeWhereUniqueInput
    update: XOR<employeeUpdateWithoutManagerInput, employeeUncheckedUpdateWithoutManagerInput>
    create: XOR<employeeCreateWithoutManagerInput, employeeUncheckedCreateWithoutManagerInput>
  }

  export type employeeUpdateWithWhereUniqueWithoutManagerInput = {
    where: employeeWhereUniqueInput
    data: XOR<employeeUpdateWithoutManagerInput, employeeUncheckedUpdateWithoutManagerInput>
  }

  export type employeeUpdateManyWithWhereWithoutManagerInput = {
    where: employeeScalarWhereInput
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutManagerInput>
  }

  export type teamUpsertWithoutMembersInput = {
    update: XOR<teamUpdateWithoutMembersInput, teamUncheckedUpdateWithoutMembersInput>
    create: XOR<teamCreateWithoutMembersInput, teamUncheckedCreateWithoutMembersInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutMembersInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutMembersInput, teamUncheckedUpdateWithoutMembersInput>
  }

  export type teamUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    tasks?: taskUpdateManyWithoutTeamNestedInput
    lead?: employeeUpdateOneRequiredWithoutLeadsTeamNestedInput
    company?: companyUpdateOneRequiredWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    lead_id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    tasks?: taskUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamUpsertWithoutLeadInput = {
    update: XOR<teamUpdateWithoutLeadInput, teamUncheckedUpdateWithoutLeadInput>
    create: XOR<teamCreateWithoutLeadInput, teamUncheckedCreateWithoutLeadInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutLeadInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutLeadInput, teamUncheckedUpdateWithoutLeadInput>
  }

  export type teamUpdateWithoutLeadInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    tasks?: taskUpdateManyWithoutTeamNestedInput
    members?: employeeUpdateManyWithoutTeamNestedInput
    company?: companyUpdateOneRequiredWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    tasks?: taskUncheckedUpdateManyWithoutTeamNestedInput
    members?: employeeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type adminUpsertWithoutEmployeesInput = {
    update: XOR<adminUpdateWithoutEmployeesInput, adminUncheckedUpdateWithoutEmployeesInput>
    create: XOR<adminCreateWithoutEmployeesInput, adminUncheckedCreateWithoutEmployeesInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutEmployeesInput, adminUncheckedUpdateWithoutEmployeesInput>
  }

  export type adminUpdateWithoutEmployeesInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    company?: companyUpdateManyWithoutOwnerNestedInput
  }

  export type adminUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    company?: companyUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type companyUpsertWithoutEmployeeInput = {
    update: XOR<companyUpdateWithoutEmployeeInput, companyUncheckedUpdateWithoutEmployeeInput>
    create: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutEmployeeInput, companyUncheckedUpdateWithoutEmployeeInput>
  }

  export type companyUpdateWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    owner?: adminUpdateOneRequiredWithoutCompanyNestedInput
    team?: teamUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ownerID?: IntFieldUpdateOperationsInput | number
    team?: teamUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type teamCreateWithoutTasksInput = {
    name: string
    department: string
    lead: employeeCreateNestedOneWithoutLeadsTeamInput
    members?: employeeCreateNestedManyWithoutTeamInput
    company: companyCreateNestedOneWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    department: string
    lead_id: number
    companyName: string
    companyID: number
    members?: employeeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutTasksInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutTasksInput, teamUncheckedCreateWithoutTasksInput>
  }

  export type teamUpsertWithoutTasksInput = {
    update: XOR<teamUpdateWithoutTasksInput, teamUncheckedUpdateWithoutTasksInput>
    create: XOR<teamCreateWithoutTasksInput, teamUncheckedCreateWithoutTasksInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutTasksInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutTasksInput, teamUncheckedUpdateWithoutTasksInput>
  }

  export type teamUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    lead?: employeeUpdateOneRequiredWithoutLeadsTeamNestedInput
    members?: employeeUpdateManyWithoutTeamNestedInput
    company?: companyUpdateOneRequiredWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    lead_id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    members?: employeeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type companyCreateManyOwnerInput = {
    id?: number
    name: string
    email: string
  }

  export type employeeCreateManyAdminInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    teamId: number
    companyName: string
    companyID: number
  }

  export type companyUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    team?: teamUpdateManyWithoutCompanyNestedInput
    employee?: employeeUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    team?: teamUncheckedUpdateManyWithoutCompanyNestedInput
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type employeeUpdateWithoutAdminInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: employeeUpdateOneWithoutManagedEmployeesNestedInput
    managedEmployees?: employeeUpdateManyWithoutManagerNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    leadsTeam?: teamUpdateOneWithoutLeadNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    managedEmployees?: employeeUncheckedUpdateManyWithoutManagerNestedInput
    leadsTeam?: teamUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type employeeUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
  }

  export type teamCreateManyCompanyInput = {
    id?: number
    name: string
    department: string
    lead_id: number
  }

  export type employeeCreateManyCompanyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    teamId: number
    adminID: number
  }

  export type teamUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    tasks?: taskUpdateManyWithoutTeamNestedInput
    lead?: employeeUpdateOneRequiredWithoutLeadsTeamNestedInput
    members?: employeeUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    lead_id?: IntFieldUpdateOperationsInput | number
    tasks?: taskUncheckedUpdateManyWithoutTeamNestedInput
    members?: employeeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    lead_id?: IntFieldUpdateOperationsInput | number
  }

  export type employeeUpdateWithoutCompanyInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: employeeUpdateOneWithoutManagedEmployeesNestedInput
    managedEmployees?: employeeUpdateManyWithoutManagerNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    leadsTeam?: teamUpdateOneWithoutLeadNestedInput
    admin?: adminUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type employeeUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    adminID?: IntFieldUpdateOperationsInput | number
    managedEmployees?: employeeUncheckedUpdateManyWithoutManagerNestedInput
    leadsTeam?: teamUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type employeeUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    adminID?: IntFieldUpdateOperationsInput | number
  }

  export type taskCreateManyTeamInput = {
    id?: number
    title: string
    descreption?: string | null
    content: string
    attachement?: string | null
  }

  export type employeeCreateManyTeamInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    managerId?: number | null
    adminID: number
    companyName: string
    companyID: number
  }

  export type taskUpdateWithoutTeamInput = {
    title?: StringFieldUpdateOperationsInput | string
    descreption?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type taskUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descreption?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type taskUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descreption?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type employeeUpdateWithoutTeamInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    manager?: employeeUpdateOneWithoutManagedEmployeesNestedInput
    managedEmployees?: employeeUpdateManyWithoutManagerNestedInput
    leadsTeam?: teamUpdateOneWithoutLeadNestedInput
    admin?: adminUpdateOneRequiredWithoutEmployeesNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    adminID?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    managedEmployees?: employeeUncheckedUpdateManyWithoutManagerNestedInput
    leadsTeam?: teamUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type employeeUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    adminID?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
  }

  export type employeeCreateManyManagerInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    role: $Enums.UserRole
    salary?: number | null
    teamId: number
    adminID: number
    companyName: string
    companyID: number
  }

  export type employeeUpdateWithoutManagerInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    managedEmployees?: employeeUpdateManyWithoutManagerNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    leadsTeam?: teamUpdateOneWithoutLeadNestedInput
    admin?: adminUpdateOneRequiredWithoutEmployeesNestedInput
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    adminID?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
    managedEmployees?: employeeUncheckedUpdateManyWithoutManagerNestedInput
    leadsTeam?: teamUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type employeeUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    teamId?: IntFieldUpdateOperationsInput | number
    adminID?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyID?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
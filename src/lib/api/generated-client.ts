import client from "./apollo-client";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, MutationOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  Bytes: any;
  Date: any;
  File: any;
  Object: any;
  Upload: any;
};

export type Acl = {
  __typename?: 'ACL';
  public?: Maybe<PublicAcl>;
  roles?: Maybe<Array<RoleAcl>>;
  users?: Maybe<Array<UserAcl>>;
};

export type AclInput = {
  public?: InputMaybe<PublicAclInput>;
  roles?: InputMaybe<Array<RoleAclInput>>;
  users?: InputMaybe<Array<UserAclInput>>;
};

export type ArrayResult = Element | Role | Session | Task | User;

export type ArrayWhereInput = {
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  contains?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  equalTo?: InputMaybe<Scalars['Any']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['Any']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Any']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Any']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Any']>;
  notEqualTo?: InputMaybe<Scalars['Any']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type BooleanWhereInput = {
  equalTo?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  inQueryKey?: InputMaybe<SelectInput>;
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type BoxInput = {
  bottomLeft: GeoPointInput;
  upperRight: GeoPointInput;
};

export type BytesWhereInput = {
  equalTo?: InputMaybe<Scalars['Bytes']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['Bytes']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Bytes']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Bytes']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Bytes']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Bytes']>;
  notEqualTo?: InputMaybe<Scalars['Bytes']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Bytes']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type CenterSphereInput = {
  center: GeoPointInput;
  distance: Scalars['Float'];
};

export type Class = {
  __typename?: 'Class';
  name: Scalars['String'];
  schemaFields: Array<SchemaField>;
};

export type CreateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type CreateClassPayload = {
  __typename?: 'CreateClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateFileInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  upload: Scalars['Upload'];
};

export type CreateFilePayload = {
  __typename?: 'CreateFilePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  fileInfo: FileInfo;
};

export type CreateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelationInput>;
  users?: InputMaybe<UserRelationInput>;
};

export type CreateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateRoleFieldsInput>;
};

export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  role: Role;
};

export type CreateSessionFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  createdWith?: InputMaybe<Scalars['Object']>;
  expiresAt?: InputMaybe<Scalars['Date']>;
  installationId?: InputMaybe<Scalars['String']>;
  restricted?: InputMaybe<Scalars['Boolean']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserPointerInput>;
};

export type CreateSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateSessionFieldsInput>;
};

export type CreateSessionPayload = {
  __typename?: 'CreateSessionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  session: Session;
};

export type CreateTaskFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  text: Scalars['String'];
};

export type CreateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateTaskFieldsInput>;
};

export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  task: Task;
};

export type CreateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  authData?: InputMaybe<Scalars['Object']>;
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  tasks?: InputMaybe<TaskRelationInput>;
  username: Scalars['String'];
};

export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type DateWhereInput = {
  equalTo?: InputMaybe<Scalars['Date']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['Date']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Date']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  notEqualTo?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type DeleteClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DeleteClassPayload = {
  __typename?: 'DeleteClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  role: Role;
};

export type DeleteSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteSessionPayload = {
  __typename?: 'DeleteSessionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  session: Session;
};

export type DeleteTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteTaskPayload = {
  __typename?: 'DeleteTaskPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  task: Task;
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type Element = {
  __typename?: 'Element';
  value: Scalars['Any'];
};

export type FileInfo = {
  __typename?: 'FileInfo';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type FileInput = {
  file?: InputMaybe<Scalars['File']>;
  unlink?: InputMaybe<Scalars['Boolean']>;
  upload?: InputMaybe<Scalars['Upload']>;
};

export type FileWhereInput = {
  equalTo?: InputMaybe<Scalars['File']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['File']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['File']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['File']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['File']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['File']>;
  matchesRegex?: InputMaybe<Scalars['String']>;
  notEqualTo?: InputMaybe<Scalars['File']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['File']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
  options?: InputMaybe<Scalars['String']>;
};

export type GeoIntersectsInput = {
  point?: InputMaybe<GeoPointInput>;
};

export type GeoPoint = {
  __typename?: 'GeoPoint';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GeoPointInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GeoPointWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  geoWithin?: InputMaybe<GeoWithinInput>;
  maxDistance?: InputMaybe<Scalars['Float']>;
  maxDistanceInKilometers?: InputMaybe<Scalars['Float']>;
  maxDistanceInMiles?: InputMaybe<Scalars['Float']>;
  maxDistanceInRadians?: InputMaybe<Scalars['Float']>;
  nearSphere?: InputMaybe<GeoPointInput>;
  within?: InputMaybe<WithinInput>;
};

export type GeoWithinInput = {
  centerSphere?: InputMaybe<CenterSphereInput>;
  polygon?: InputMaybe<Array<GeoPointInput>>;
};

export type IdWhereInput = {
  equalTo?: InputMaybe<Scalars['ID']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['ID']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['ID']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['ID']>;
  notEqualTo?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type KeyValueInput = {
  key: Scalars['String'];
  value: Scalars['Any'];
};

export type LogInInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LogInPayload = {
  __typename?: 'LogInPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  viewer: Viewer;
};

export type LogInWithInput = {
  authData: Scalars['Object'];
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UserLoginWithInput>;
};

export type LogInWithPayload = {
  __typename?: 'LogInWithPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  viewer: Viewer;
};

export type LogOutInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type LogOutPayload = {
  __typename?: 'LogOutPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClass?: Maybe<CreateClassPayload>;
  createFile?: Maybe<CreateFilePayload>;
  createRole?: Maybe<CreateRolePayload>;
  createSession?: Maybe<CreateSessionPayload>;
  createTask?: Maybe<CreateTaskPayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteClass?: Maybe<DeleteClassPayload>;
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteSession?: Maybe<DeleteSessionPayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  logIn?: Maybe<LogInPayload>;
  logInWith?: Maybe<LogInWithPayload>;
  logOut?: Maybe<LogOutPayload>;
  resetPassword?: Maybe<ResetPasswordPayload>;
  sendVerificationEmail?: Maybe<SendVerificationEmailPayload>;
  signUp?: Maybe<SignUpPayload>;
  updateClass?: Maybe<UpdateClassPayload>;
  updateRole?: Maybe<UpdateRolePayload>;
  updateSession?: Maybe<UpdateSessionPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationCreateClassArgs = {
  input: CreateClassInput;
};


export type MutationCreateFileArgs = {
  input: CreateFileInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteClassArgs = {
  input: DeleteClassInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationDeleteSessionArgs = {
  input: DeleteSessionInput;
};


export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationLogInArgs = {
  input: LogInInput;
};


export type MutationLogInWithArgs = {
  input: LogInWithInput;
};


export type MutationLogOutArgs = {
  input: LogOutInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendVerificationEmailArgs = {
  input: SendVerificationEmailInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateClassArgs = {
  input: UpdateClassInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateSessionArgs = {
  input: UpdateSessionInput;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type NumberWhereInput = {
  equalTo?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['Float']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Float']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']>;
  notEqualTo?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type ObjectWhereInput = {
  equalTo?: InputMaybe<KeyValueInput>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<KeyValueInput>;
  greaterThanOrEqualTo?: InputMaybe<KeyValueInput>;
  in?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<KeyValueInput>;
  lessThanOrEqualTo?: InputMaybe<KeyValueInput>;
  notEqualTo?: InputMaybe<KeyValueInput>;
  notIn?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ParseObject = {
  ACL: Acl;
  createdAt: Scalars['Date'];
  objectId: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type PointerFieldInput = {
  name: Scalars['String'];
  targetClassName: Scalars['String'];
};

export type PolygonWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  geoIntersects?: InputMaybe<GeoIntersectsInput>;
};

export type PublicAcl = {
  __typename?: 'PublicACL';
  read?: Maybe<Scalars['Boolean']>;
  write?: Maybe<Scalars['Boolean']>;
};

export type PublicAclInput = {
  read: Scalars['Boolean'];
  write: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  class: Class;
  classes: Array<Class>;
  health: Scalars['Boolean'];
  node?: Maybe<Node>;
  role: Role;
  roles: RoleConnection;
  session: Session;
  sessions: SessionConnection;
  task: Task;
  tasks: TaskConnection;
  user: User;
  users: UserConnection;
  viewer: Viewer;
};


export type QueryClassArgs = {
  name: Scalars['String'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QuerySessionArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QuerySessionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<SessionOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<TaskOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ReadOptionsInput = {
  includeReadPreference?: InputMaybe<ReadPreference>;
  readPreference?: InputMaybe<ReadPreference>;
  subqueryReadPreference?: InputMaybe<ReadPreference>;
};

export enum ReadPreference {
  Nearest = 'NEAREST',
  Primary = 'PRIMARY',
  PrimaryPreferred = 'PRIMARY_PREFERRED',
  Secondary = 'SECONDARY',
  SecondaryPreferred = 'SECONDARY_PREFERRED'
}

export type RelationFieldInput = {
  name: Scalars['String'];
  targetClassName: Scalars['String'];
};

export type ResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Role = Node & ParseObject & {
  __typename?: 'Role';
  ACL: Acl;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  objectId: Scalars['ID'];
  roles: RoleConnection;
  updatedAt: Scalars['Date'];
  users: UserConnection;
};


export type RoleRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RoleAcl = {
  __typename?: 'RoleACL';
  read: Scalars['Boolean'];
  roleName: Scalars['ID'];
  write: Scalars['Boolean'];
};

export type RoleAclInput = {
  read: Scalars['Boolean'];
  roleName: Scalars['String'];
  write: Scalars['Boolean'];
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  count: Scalars['Int'];
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  pageInfo: PageInfo;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String'];
  node?: Maybe<Role>;
};

export enum RoleOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsersAsc = 'users_ASC',
  UsersDesc = 'users_DESC'
}

export type RolePointerInput = {
  createAndLink?: InputMaybe<CreateRoleFieldsInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type RoleRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']>>;
  createAndAdd?: InputMaybe<Array<CreateRoleFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

export type RoleRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  have?: InputMaybe<RoleWhereInput>;
  haveNot?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOR?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  createdAt?: InputMaybe<DateWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  name?: InputMaybe<StringWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  roles?: InputMaybe<RoleRelationWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  users?: InputMaybe<UserRelationWhereInput>;
};

export type SchemaAclField = SchemaField & {
  __typename?: 'SchemaACLField';
  name: Scalars['String'];
};

export type SchemaArrayField = SchemaField & {
  __typename?: 'SchemaArrayField';
  name: Scalars['String'];
};

export type SchemaArrayFieldInput = {
  name: Scalars['String'];
};

export type SchemaBooleanField = SchemaField & {
  __typename?: 'SchemaBooleanField';
  name: Scalars['String'];
};

export type SchemaBooleanFieldInput = {
  name: Scalars['String'];
};

export type SchemaBytesField = SchemaField & {
  __typename?: 'SchemaBytesField';
  name: Scalars['String'];
};

export type SchemaBytesFieldInput = {
  name: Scalars['String'];
};

export type SchemaDateField = SchemaField & {
  __typename?: 'SchemaDateField';
  name: Scalars['String'];
};

export type SchemaDateFieldInput = {
  name: Scalars['String'];
};

export type SchemaField = {
  name: Scalars['String'];
};

export type SchemaFieldInput = {
  name: Scalars['String'];
};

export type SchemaFieldsInput = {
  addArrays?: InputMaybe<Array<SchemaArrayFieldInput>>;
  addBooleans?: InputMaybe<Array<SchemaBooleanFieldInput>>;
  addBytes?: InputMaybe<Array<SchemaBytesFieldInput>>;
  addDates?: InputMaybe<Array<SchemaDateFieldInput>>;
  addFiles?: InputMaybe<Array<SchemaFileFieldInput>>;
  addGeoPoint?: InputMaybe<SchemaGeoPointFieldInput>;
  addNumbers?: InputMaybe<Array<SchemaNumberFieldInput>>;
  addObjects?: InputMaybe<Array<SchemaObjectFieldInput>>;
  addPointers?: InputMaybe<Array<PointerFieldInput>>;
  addPolygons?: InputMaybe<Array<SchemaPolygonFieldInput>>;
  addRelations?: InputMaybe<Array<RelationFieldInput>>;
  addStrings?: InputMaybe<Array<SchemaStringFieldInput>>;
  remove?: InputMaybe<Array<SchemaFieldInput>>;
};

export type SchemaFileField = SchemaField & {
  __typename?: 'SchemaFileField';
  name: Scalars['String'];
};

export type SchemaFileFieldInput = {
  name: Scalars['String'];
};

export type SchemaGeoPointField = SchemaField & {
  __typename?: 'SchemaGeoPointField';
  name: Scalars['String'];
};

export type SchemaGeoPointFieldInput = {
  name: Scalars['String'];
};

export type SchemaNumberField = SchemaField & {
  __typename?: 'SchemaNumberField';
  name: Scalars['String'];
};

export type SchemaNumberFieldInput = {
  name: Scalars['String'];
};

export type SchemaObjectField = SchemaField & {
  __typename?: 'SchemaObjectField';
  name: Scalars['String'];
};

export type SchemaObjectFieldInput = {
  name: Scalars['String'];
};

export type SchemaPointerField = SchemaField & {
  __typename?: 'SchemaPointerField';
  name: Scalars['String'];
  targetClassName: Scalars['String'];
};

export type SchemaPolygonField = SchemaField & {
  __typename?: 'SchemaPolygonField';
  name: Scalars['String'];
};

export type SchemaPolygonFieldInput = {
  name: Scalars['String'];
};

export type SchemaRelationField = SchemaField & {
  __typename?: 'SchemaRelationField';
  name: Scalars['String'];
  targetClassName: Scalars['String'];
};

export type SchemaStringField = SchemaField & {
  __typename?: 'SchemaStringField';
  name: Scalars['String'];
};

export type SchemaStringFieldInput = {
  name: Scalars['String'];
};

export type SearchInput = {
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
  diacriticSensitive?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  term: Scalars['String'];
};

export type SelectInput = {
  key: Scalars['String'];
  query: SubqueryInput;
};

export type SendVerificationEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

export type SendVerificationEmailPayload = {
  __typename?: 'SendVerificationEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Session = Node & ParseObject & {
  __typename?: 'Session';
  ACL: Acl;
  createdAt: Scalars['Date'];
  createdWith?: Maybe<Scalars['Object']>;
  expiresAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  installationId?: Maybe<Scalars['String']>;
  objectId: Scalars['ID'];
  restricted?: Maybe<Scalars['Boolean']>;
  sessionToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
};

export type SessionConnection = {
  __typename?: 'SessionConnection';
  count: Scalars['Int'];
  edges?: Maybe<Array<Maybe<SessionEdge>>>;
  pageInfo: PageInfo;
};

export type SessionEdge = {
  __typename?: 'SessionEdge';
  cursor: Scalars['String'];
  node?: Maybe<Session>;
};

export enum SessionOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedWithAsc = 'createdWith_ASC',
  CreatedWithDesc = 'createdWith_DESC',
  ExpiresAtAsc = 'expiresAt_ASC',
  ExpiresAtDesc = 'expiresAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstallationIdAsc = 'installationId_ASC',
  InstallationIdDesc = 'installationId_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RestrictedAsc = 'restricted_ASC',
  RestrictedDesc = 'restricted_DESC',
  SessionTokenAsc = 'sessionToken_ASC',
  SessionTokenDesc = 'sessionToken_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type SessionPointerInput = {
  createAndLink?: InputMaybe<CreateSessionFieldsInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type SessionRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']>>;
  createAndAdd?: InputMaybe<Array<CreateSessionFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

export type SessionRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  have?: InputMaybe<SessionWhereInput>;
  haveNot?: InputMaybe<SessionWhereInput>;
};

export type SessionWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOR?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateWhereInput>;
  createdWith?: InputMaybe<ObjectWhereInput>;
  expiresAt?: InputMaybe<DateWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  installationId?: InputMaybe<StringWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  restricted?: InputMaybe<BooleanWhereInput>;
  sessionToken?: InputMaybe<StringWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  user?: InputMaybe<UserRelationWhereInput>;
};

export type SignUpInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  viewer: Viewer;
};

export type StringWhereInput = {
  equalTo?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['String']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['String']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  matchesRegex?: InputMaybe<Scalars['String']>;
  notEqualTo?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
  options?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<TextInput>;
};

export type SubqueryInput = {
  className: Scalars['String'];
  where: Scalars['Object'];
};

export type Task = Node & ParseObject & {
  __typename?: 'Task';
  ACL: Acl;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  objectId: Scalars['ID'];
  text: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  count: Scalars['Int'];
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
  pageInfo: PageInfo;
};

export type TaskEdge = {
  __typename?: 'TaskEdge';
  cursor: Scalars['String'];
  node?: Maybe<Task>;
};

export enum TaskOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TaskPointerInput = {
  createAndLink?: InputMaybe<CreateTaskFieldsInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type TaskRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']>>;
  createAndAdd?: InputMaybe<Array<CreateTaskFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

export type TaskRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  have?: InputMaybe<TaskWhereInput>;
  haveNot?: InputMaybe<TaskWhereInput>;
};

export type TaskWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOR?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  createdAt?: InputMaybe<DateWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  text?: InputMaybe<StringWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
};

export type TextInput = {
  search: SearchInput;
};

export type UpdateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type UpdateClassPayload = {
  __typename?: 'UpdateClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelationInput>;
  users?: InputMaybe<UserRelationInput>;
};

export type UpdateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UpdateRoleFieldsInput>;
  id: Scalars['ID'];
};

export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  role: Role;
};

export type UpdateSessionFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  createdWith?: InputMaybe<Scalars['Object']>;
  expiresAt?: InputMaybe<Scalars['Date']>;
  installationId?: InputMaybe<Scalars['String']>;
  restricted?: InputMaybe<Scalars['Boolean']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserPointerInput>;
};

export type UpdateSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UpdateSessionFieldsInput>;
  id: Scalars['ID'];
};

export type UpdateSessionPayload = {
  __typename?: 'UpdateSessionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  session: Session;
};

export type UpdateTaskFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  text?: InputMaybe<Scalars['String']>;
};

export type UpdateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UpdateTaskFieldsInput>;
  id: Scalars['ID'];
};

export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  task: Task;
};

export type UpdateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  authData?: InputMaybe<Scalars['Object']>;
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<TaskRelationInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UpdateUserFieldsInput>;
  id: Scalars['ID'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type User = Node & ParseObject & {
  __typename?: 'User';
  ACL: Acl;
  authData?: Maybe<Scalars['Object']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  objectId: Scalars['ID'];
  tasks: TaskConnection;
  updatedAt: Scalars['Date'];
  username?: Maybe<Scalars['String']>;
};


export type UserTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<TaskOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskWhereInput>;
};

export type UserAcl = {
  __typename?: 'UserACL';
  read: Scalars['Boolean'];
  userId: Scalars['ID'];
  write: Scalars['Boolean'];
};

export type UserAclInput = {
  read: Scalars['Boolean'];
  userId: Scalars['ID'];
  write: Scalars['Boolean'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  count: Scalars['Int'];
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node?: Maybe<User>;
};

export type UserLoginWithInput = {
  ACL?: InputMaybe<AclInput>;
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  tasks?: InputMaybe<TaskRelationInput>;
};

export enum UserOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AuthDataAsc = 'authData_ASC',
  AuthDataDesc = 'authData_DESC',
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailVerifiedAsc = 'emailVerified_ASC',
  EmailVerifiedDesc = 'emailVerified_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  TasksAsc = 'tasks_ASC',
  TasksDesc = 'tasks_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

export type UserPointerInput = {
  createAndLink?: InputMaybe<CreateUserFieldsInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type UserRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']>>;
  createAndAdd?: InputMaybe<Array<CreateUserFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

export type UserRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  have?: InputMaybe<UserWhereInput>;
  haveNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOR?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  authData?: InputMaybe<ObjectWhereInput>;
  avatar?: InputMaybe<StringWhereInput>;
  createdAt?: InputMaybe<DateWhereInput>;
  email?: InputMaybe<StringWhereInput>;
  emailVerified?: InputMaybe<BooleanWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  password?: InputMaybe<StringWhereInput>;
  tasks?: InputMaybe<TaskRelationWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  username?: InputMaybe<StringWhereInput>;
};

export type Viewer = {
  __typename?: 'Viewer';
  sessionToken: Scalars['String'];
  user: User;
};

export type WithinInput = {
  box: BoxInput;
};

export type TaskFragmentFragment = { __typename?: 'Task', id: string, text: string };

export type UserFragmentFragment = { __typename?: 'User', id: string, username?: string | null, avatar?: string | null };

export type SignInMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', logIn?: { __typename?: 'LogInPayload', viewer: { __typename?: 'Viewer', sessionToken: string, user: { __typename?: 'User', id: string, username?: string | null, avatar?: string | null } } } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', logOut?: { __typename?: 'LogOutPayload', ok: boolean } | null };

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  avatar?: InputMaybe<Scalars['String']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'SignUpPayload', viewer: { __typename?: 'Viewer', sessionToken: string, user: { __typename?: 'User', id: string, username?: string | null, avatar?: string | null } } } | null };

export type TaskCreateMutationVariables = Exact<{
  userId: Scalars['ID'];
  text: Scalars['String'];
}>;


export type TaskCreateMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUserPayload', user: { __typename?: 'User', tasks: { __typename?: 'TaskConnection', edges?: Array<{ __typename?: 'TaskEdge', node?: { __typename?: 'Task', id: string, text: string } | null } | null> | null } } } | null };

export type TaskDeleteMutationVariables = Exact<{
  taskId: Scalars['ID'];
}>;


export type TaskDeleteMutation = { __typename?: 'Mutation', deleteTask?: { __typename?: 'DeleteTaskPayload', task: { __typename?: 'Task', id: string, text: string } } | null };

export type TaskListQueryVariables = Exact<{ [key: string]: never; }>;


export type TaskListQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', user: { __typename?: 'User', tasks: { __typename?: 'TaskConnection', edges?: Array<{ __typename?: 'TaskEdge', node?: { __typename?: 'Task', id: string, text: string } | null } | null> | null } } } };

export type TaskUpdateMutationVariables = Exact<{
  taskId: Scalars['ID'];
  text: Scalars['String'];
}>;


export type TaskUpdateMutation = { __typename?: 'Mutation', updateTask?: { __typename?: 'UpdateTaskPayload', task: { __typename?: 'Task', id: string, text: string } } | null };

export const TaskFragmentFragmentDoc = gql`
    fragment TaskFragment on Task {
  id
  text
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
  avatar
}
    `;
export const SignInDoc = gql`
    mutation signIn($username: String!, $password: String!) {
  logIn(input: {username: $username, password: $password}) {
    viewer {
      user {
        ...UserFragment
      }
      sessionToken
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export const SignOutDoc = gql`
    mutation signOut {
  logOut(input: {}) {
    ok
  }
}
    `;
export const SignUpDoc = gql`
    mutation signUp($username: String!, $password: String!, $avatar: String) {
  signUp(
    input: {fields: {username: $username, password: $password, avatar: $avatar}}
  ) {
    viewer {
      sessionToken
      user {
        ...UserFragment
      }
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export const TaskCreateDoc = gql`
    mutation taskCreate($userId: ID!, $text: String!) {
  updateUser(
    input: {id: $userId, fields: {tasks: {createAndAdd: [{text: $text}]}}}
  ) {
    user {
      tasks {
        edges {
          node {
            ...TaskFragment
          }
        }
      }
    }
  }
}
    ${TaskFragmentFragmentDoc}`;
export const TaskDeleteDoc = gql`
    mutation taskDelete($taskId: ID!) {
  deleteTask(input: {id: $taskId}) {
    task {
      ...TaskFragment
    }
  }
}
    ${TaskFragmentFragmentDoc}`;
export const TaskListDoc = gql`
    query taskList {
  viewer {
    user {
      tasks {
        edges {
          node {
            ...TaskFragment
          }
        }
      }
    }
  }
}
    ${TaskFragmentFragmentDoc}`;
export const TaskUpdateDoc = gql`
    mutation taskUpdate($taskId: ID!, $text: String!) {
  updateTask(input: {id: $taskId, fields: {text: $text}}) {
    task {
      ...TaskFragment
    }
  }
}
    ${TaskFragmentFragmentDoc}`;
export const signIn = (
            options: Omit<
              MutationOptions<any, SignInMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<SignInMutation, SignInMutationVariables>({
              mutation: SignInDoc,
              ...options,
            });
            return m;
          }
export const signOut = (
            options: Omit<
              MutationOptions<any, SignOutMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<SignOutMutation, SignOutMutationVariables>({
              mutation: SignOutDoc,
              ...options,
            });
            return m;
          }
export const signUp = (
            options: Omit<
              MutationOptions<any, SignUpMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<SignUpMutation, SignUpMutationVariables>({
              mutation: SignUpDoc,
              ...options,
            });
            return m;
          }
export const taskCreate = (
            options: Omit<
              MutationOptions<any, TaskCreateMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<TaskCreateMutation, TaskCreateMutationVariables>({
              mutation: TaskCreateDoc,
              ...options,
            });
            return m;
          }
export const taskDelete = (
            options: Omit<
              MutationOptions<any, TaskDeleteMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<TaskDeleteMutation, TaskDeleteMutationVariables>({
              mutation: TaskDeleteDoc,
              ...options,
            });
            return m;
          }
export const taskList = (
            options: Omit<
              WatchQueryOptions<TaskListQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<TaskListQuery> & {
              query: ObservableQuery<
                TaskListQuery,
                TaskListQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: TaskListDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<TaskListQuery> & {
                query: ObservableQuery<
                  TaskListQuery,
                  TaskListQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const taskUpdate = (
            options: Omit<
              MutationOptions<any, TaskUpdateMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<TaskUpdateMutation, TaskUpdateMutationVariables>({
              mutation: TaskUpdateDoc,
              ...options,
            });
            return m;
          }
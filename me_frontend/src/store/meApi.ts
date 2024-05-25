import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    profileList: build.query<ProfileListApiResponse, ProfileListApiArg>({
      query: () => ({ url: `/profile/` }),
    }),
    profileCreate: build.mutation<
      ProfileCreateApiResponse,
      ProfileCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/`,
        method: "POST",
        body: queryArg.profile,
      }),
    }),
    profileRead: build.query<ProfileReadApiResponse, ProfileReadApiArg>({
      query: (queryArg) => ({ url: `/profile/${queryArg.id}/` }),
    }),
    profileUpdate: build.mutation<
      ProfileUpdateApiResponse,
      ProfileUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.profile,
      }),
    }),
    profilePartialUpdate: build.mutation<
      ProfilePartialUpdateApiResponse,
      ProfilePartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.profile,
      }),
    }),
    profileDelete: build.mutation<
      ProfileDeleteApiResponse,
      ProfileDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/profile/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as meApi };
export type ProfileListApiResponse = /** status 200  */ ProfileRead[];
export type ProfileListApiArg = void;
export type ProfileCreateApiResponse = /** status 201  */ ProfileRead;
export type ProfileCreateApiArg = {
  profile: Profile;
};
export type ProfileReadApiResponse = /** status 200  */ ProfileRead;
export type ProfileReadApiArg = {
  /** A unique integer value identifying this profile. */
  id: number;
};
export type ProfileUpdateApiResponse = /** status 200  */ ProfileRead;
export type ProfileUpdateApiArg = {
  /** A unique integer value identifying this profile. */
  id: number;
  profile: Profile;
};
export type ProfilePartialUpdateApiResponse = /** status 200  */ ProfileRead;
export type ProfilePartialUpdateApiArg = {
  /** A unique integer value identifying this profile. */
  id: number;
  profile: Profile;
};
export type ProfileDeleteApiResponse = unknown;
export type ProfileDeleteApiArg = {
  /** A unique integer value identifying this profile. */
  id: number;
};
export type Profile = {
  name?: string | null;
  age?: number | null;
};
export type ProfileRead = {
  id?: number;
  name?: string | null;
  age?: number | null;
};
export const {
  useProfileListQuery,
  useProfileCreateMutation,
  useProfileReadQuery,
  useProfileUpdateMutation,
  useProfilePartialUpdateMutation,
  useProfileDeleteMutation,
} = injectedRtkApi;

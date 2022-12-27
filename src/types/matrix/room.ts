export enum Membership {
  Invite = 'invite',
  Knock = 'knock',
  Join = 'join',
  Leave = 'leave',
  Ban = 'ban',
}

export enum StateEvent {
  RoomCanonicalAlias = 'm.room.canonical_alias',
  RoomCreate = 'm.room.create',
  RoomJoinRules = 'm.room.join_rules',
  RoomMember = 'm.room.member',
  RoomThirdPartyInvite = 'm.room.third_party_invite',
  RoomPowerLevels = 'm.room.power_levels',
  RoomName = 'm.room.name',
  RoomTopic = 'm.room.topic',
  RoomAvatar = 'm.room.avatar',
  RoomPinnedEvents = 'm.room.pinned_events',
  RoomEncryption = 'm.room.encryption',
  RoomHistoryVisibility = 'm.room.history_visibility',
  RoomGuestAccess = 'm.room.guest_access',
  RoomServerAcl = 'm.room.server_acl',
  RoomTombstone = 'm.room.tombstone',

  SpaceChild = 'm.space.child',
  SpaceParent = 'm.space.parent',
}

export enum RoomType {
  Space = 'm.space',
}

export type RoomToParents = Map<string, Set<string>>;

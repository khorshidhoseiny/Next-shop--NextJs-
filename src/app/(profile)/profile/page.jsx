"use client";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString } from "@/utils/toLocalDate";
import React from "react";

function Profile() {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      <h1>{user.name} خوش اومدی 🦋</h1>
      <div>
        تاریخ پیوستن : <span>{toLocalDateString(user.createdAt)}</span>
      </div>
    </div>
  );
}

export default Profile;

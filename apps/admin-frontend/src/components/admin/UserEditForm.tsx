"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import { updateUserProfile, updateUserRole } from "../../lib/api/users";
import { roles } from "../../lib/constants/roles";
import type {
  User,
  UpdateUserProfileRequest,
  UpdateUserRoleRequest,
} from "../../types/user";

interface UserEditFormProps {
  user: User;
  token?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export function UserEditForm({ user, token, isModal = false, onSuccess }: UserEditFormProps) {
  const router = useRouter();
  const [formState, setFormState] = useState<UpdateUserProfileRequest>({
    employeeId: user.employeeId,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber ?? "",
    department: user.department ?? "",
    position: user.position ?? "",
    preferredLocale: user.preferredLocale ?? "EN",
  });
  const [selectedRole, setSelectedRole] = useState(user.roleName);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof UpdateUserProfileRequest, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setIsSaving(true);

    if (!token) {
      setError("Authentication token is missing.");
      setIsSaving(false);
      return;
    }

    try {
      await updateUserProfile(user.id, formState, token);

      if (selectedRole !== user.roleName) {
        const roleUpdate: UpdateUserRoleRequest = {
          roleName: selectedRole,
        };
        await updateUserRole(user.id, roleUpdate, token);
      }

      setMessage("User updated successfully.");
      if (isModal && onSuccess) {
        onSuccess();
      } else {
        router.push("/users");
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Failed to update user.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="user-edit-page">
      <form className="invite-user-form edit-user-form" onSubmit={handleSubmit}>
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Edit user</h2>
            <p className="panel-subtitle">Update profile details, role assignment, and account settings.</p>
          </div>
        </div>

        <div className="edit-user-grid">
          <section className="edit-user-section">
            <div className="section-heading">Profile details</div>

            <div className="form-group">
              <label htmlFor="employeeId">Employee ID</label>
              <input
                id="employeeId"
                value={formState.employeeId}
                onChange={(event) => handleChange("employeeId", event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                value={formState.firstName}
                onChange={(event) => handleChange("firstName", event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                value={formState.lastName}
                onChange={(event) => handleChange("lastName", event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(event) => handleChange("email", event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredLocale">Language</label>
              <select
                id="preferredLocale"
                value={formState.preferredLocale ?? "EN"}
                onChange={(event) => handleChange("preferredLocale", event.target.value)}
              >
                <option value="EN">English</option>
                <option value="FR">Français</option>
                <option value="RW">Kinyarwanda</option>
              </select>
            </div>
          </section>

          <section className="edit-user-section">
            <div className="section-heading">Contact & organization</div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                id="phoneNumber"
                value={formState.phoneNumber ?? ""}
                onChange={(event) => handleChange("phoneNumber", event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                id="department"
                value={formState.department ?? ""}
                onChange={(event) => handleChange("department", event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                value={formState.position ?? ""}
                onChange={(event) => handleChange("position", event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="roleName">Role</label>
              <select
                id="roleName"
                value={selectedRole}
                onChange={(event) => setSelectedRole(event.target.value)}
              >
                {roles.map((roleOption) => (
                  <option key={roleOption} value={roleOption}>
                    {roleOption}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <span className="status-pill">{user.status}</span>
            </div>

            <div className="form-group">
              <label>Created</label>
              <span className="field-muted">{user.createdAt ?? "Unknown"}</span>
            </div>
          </section>
        </div>

        <div className="invite-user-modal-actions edit-user-actions">
          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save changes"}
          </Button>
          <Button type="button" variant="ghost" onClick={() => router.push("/users") }>
            Cancel
          </Button>
        </div>

        {message && <p className="form-success">{message}</p>}
        {error && <p className="form-error">{error}</p>}
      </form>
    </div>
  );
}

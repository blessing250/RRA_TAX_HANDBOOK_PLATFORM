'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { UserEditForm } from './UserEditForm';
import type { User } from '../../types/user';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  user: User | null;
  token?: string;
}

export function EditUserModal({ isOpen, onClose, onSuccess, user, token }: EditUserModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccess = () => {
    setTimeout(() => {
      onClose();
      onSuccess();
    }, 800);
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen || !user) {
    return null;
  }

  return (
    <div className="invite-user-modal-overlay">
      <div className="invite-user-modal">
        <div className="invite-user-modal-header">
          <h2>Edit User</h2>
          <button
            type="button"
            onClick={handleClose}
            className="invite-user-modal-close"
            aria-label="Close edit user modal"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        <UserEditForm
          user={user}
          token={token}
          onSuccess={handleSuccess}
          isModal={true}
        />
      </div>
    </div>
  );
}
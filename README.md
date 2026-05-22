<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CapacityHub — Admin Dashboard</title>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics-compat.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
:root {
  --orange: #f97316;
  --orange-dark: #ea580c;
  --orange-light: #fff7ed;
  --orange-muted: rgba(249,115,22,0.12);
  --black: #0a0a0a;
  --dark: #111827;
  --dark2: #1f2937;
  --slate: #374151;
  --muted: #6b7280;
  --border: #e5e7eb;
  --bg: #f9fafb;
  --white: #ffffff;
  --green: #10b981;
  --red: #ef4444;
  --blue: #3b82f6;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--dark);
  min-height: 100vh;
  display: flex;
}

/* ─── SIDEBAR ─── */
.sidebar {
  width: 260px;
  min-height: 100vh;
  background: var(--black);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0; top: 0; bottom: 0;
  z-index: 100;
  overflow-y: auto;
}

.sidebar-logo {
  padding: 28px 24px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.sidebar-logo h1 {
  font-family: 'Syne', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--white);
}
.sidebar-logo h1 span { color: var(--orange); }
.sidebar-logo p {
  font-size: 10px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 3px;
}

.sidebar-nav { padding: 16px 12px; flex: 1; }

.nav-section-label {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  padding: 12px 12px 6px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  color: rgba(255,255,255,0.5);
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
}
.nav-item:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.85); }
.nav-item.active { background: var(--orange); color: var(--white); }
.nav-item.active .nav-icon { color: var(--white); }
.nav-icon { font-size: 14px; width: 18px; text-align: center; }

.sidebar-footer {
  padding: 16px 12px;
  border-top: 1px solid rgba(255,255,255,0.07);
}
.admin-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
}
.admin-avatar {
  width: 34px; height: 34px;
  background: var(--orange);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; color: var(--white); font-weight: 700;
}
.admin-info p { font-size: 12px; font-weight: 600; color: var(--white); }
.admin-info span { font-size: 10px; color: rgba(255,255,255,0.35); }

/* ─── MAIN ─── */
.main {
  margin-left: 260px;
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
}
.topbar-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--dark); }
.topbar-title span { color: var(--orange); }
.topbar-right { display: flex; align-items: center; gap: 12px; }
.topbar-badge {
  background: var(--orange-muted);
  color: var(--orange);
  font-size: 11px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid rgba(249,115,22,0.2);
}

.content { padding: 32px; flex: 1; }

/* ─── VIEWS ─── */
.view { display: none; }
.view.active { display: block; }

/* ─── STAT CARDS ─── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
.stat-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 22px;
  transition: box-shadow 0.2s;
}
.stat-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.stat-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
.stat-icon {
  width: 42px; height: 42px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px;
}
.stat-icon.orange { background: var(--orange-muted); color: var(--orange); }
.stat-icon.green { background: rgba(16,185,129,0.1); color: var(--green); }
.stat-icon.blue { background: rgba(59,130,246,0.1); color: var(--blue); }
.stat-icon.red { background: rgba(239,68,68,0.1); color: var(--red); }
.stat-badge { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 6px; }
.stat-badge.up { background: rgba(16,185,129,0.1); color: var(--green); }
.stat-badge.down { background: rgba(239,68,68,0.1); color: var(--red); }
.stat-value { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--dark); }
.stat-label { font-size: 12px; color: var(--muted); font-weight: 500; margin-top: 2px; }

/* ─── SECTION HEADER ─── */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.section-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 800; color: var(--dark); }
.section-sub { font-size: 12px; color: var(--muted); margin-top: 2px; }

/* ─── BUTTONS ─── */
.btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px;
  border-radius: 10px;
  font-size: 12px; font-weight: 700;
  cursor: pointer; border: none; transition: all 0.2s;
  font-family: 'DM Sans', sans-serif;
}
.btn-orange { background: var(--orange); color: var(--white); }
.btn-orange:hover { background: var(--orange-dark); }
.btn-dark { background: var(--dark); color: var(--white); }
.btn-dark:hover { background: var(--black); }
.btn-outline { background: transparent; color: var(--dark); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--orange); color: var(--orange); }
.btn-green { background: rgba(16,185,129,0.1); color: var(--green); border: 1px solid rgba(16,185,129,0.2); }
.btn-green:hover { background: var(--green); color: var(--white); }
.btn-red { background: rgba(239,68,68,0.1); color: var(--red); border: 1px solid rgba(239,68,68,0.2); }
.btn-red:hover { background: var(--red); color: var(--white); }
.btn-sm { padding: 6px 12px; font-size: 11px; }

/* ─── TABLE ─── */
.table-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}
.table-toolbar {
  padding: 18px 22px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.search-box {
  display: flex; align-items: center; gap: 8px;
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: 9px;
  padding: 8px 14px;
  flex: 1; max-width: 300px;
}
.search-box input {
  border: none; background: none; outline: none;
  font-size: 12px; font-family: 'DM Sans', sans-serif;
  color: var(--dark); width: 100%;
}
.search-box i { color: var(--muted); font-size: 12px; }
table { width: 100%; border-collapse: collapse; }
thead tr { background: var(--bg); }
th {
  padding: 11px 18px;
  text-align: left;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
}
td {
  padding: 14px 18px;
  font-size: 12px;
  color: var(--dark);
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}
tr:last-child td { border-bottom: none; }
tbody tr:hover { background: var(--bg); }

.user-cell { display: flex; align-items: center; gap: 10px; }
.user-avatar {
  width: 34px; height: 34px;
  border-radius: 9px;
  background: var(--orange-muted);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; color: var(--orange);
  flex-shrink: 0;
}
.user-name { font-weight: 600; font-size: 13px; }
.user-meta { font-size: 10px; color: var(--muted); }

.status-badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 3px 10px; border-radius: 20px;
  font-size: 10px; font-weight: 700;
}
.status-badge.active { background: rgba(16,185,129,0.1); color: var(--green); }
.status-badge.inactive { background: rgba(107,114,128,0.1); color: var(--muted); }
.status-badge.pending { background: rgba(249,115,22,0.1); color: var(--orange); }
.status-badge.approved { background: rgba(16,185,129,0.1); color: var(--green); }
.status-badge.declined { background: rgba(239,68,68,0.1); color: var(--red); }
.status-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }

.action-btns { display: flex; gap: 6px; }

/* ─── TASK CREATE FORM ─── */
.form-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 24px;
}
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 7px; }
.form-group.full { grid-column: 1 / -1; }
.form-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--slate); }
.form-input, .form-select, .form-textarea {
  padding: 11px 14px;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  color: var(--dark);
  outline: none;
  transition: border-color 0.2s;
  background: var(--white);
}
.form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--orange); }
.form-textarea { resize: vertical; min-height: 140px; line-height: 1.6; }
.form-hint { font-size: 10px; color: var(--muted); }

/* ─── TASK CARDS ─── */
.tasks-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.task-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  transition: box-shadow 0.2s;
}
.task-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
.task-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
.task-category {
  font-size: 9px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--orange); background: var(--orange-muted);
  padding: 3px 9px; border-radius: 6px;
}
.task-reward {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem; font-weight: 800;
  color: var(--dark);
}
.task-reward span { font-size: 12px; color: var(--muted); font-family: 'DM Sans', sans-serif; font-weight: 400; }
.task-title { font-weight: 700; font-size: 14px; margin-bottom: 6px; color: var(--dark); }
.task-desc { font-size: 11px; color: var(--muted); line-height: 1.6; margin-bottom: 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.task-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 14px; }
.task-meta { font-size: 10px; color: var(--muted); }

/* ─── SUBMISSION CARDS ─── */
.submission-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 22px;
  margin-bottom: 16px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
.submission-screenshot {
  width: 100px; height: 80px;
  background: var(--bg);
  border: 1px dashed var(--border);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; cursor: pointer;
  transition: all 0.2s; overflow: hidden;
}
.submission-screenshot:hover { border-color: var(--orange); }
.submission-screenshot img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; }
.submission-screenshot .placeholder { font-size: 10px; color: var(--muted); text-align: center; padding: 8px; }
.submission-body { flex: 1; }
.submission-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
.submission-user { font-weight: 700; font-size: 14px; }
.submission-task { font-size: 11px; color: var(--muted); margin-top: 2px; }
.submission-detail { font-size: 12px; color: var(--slate); line-height: 1.6; margin-bottom: 14px; }
.submission-actions { display: flex; gap: 8px; }
.submission-reward { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 800; color: var(--orange); }

/* ─── MODAL ─── */
.modal-overlay {
  display: none;
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 1000;
  align-items: center; justify-content: center;
  padding: 20px;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--white);
  border-radius: 20px;
  width: 100%; max-width: 500px;
  max-height: 90vh; overflow-y: auto;
  padding: 32px;
  animation: modalIn 0.25s ease;
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.modal-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem; font-weight: 800;
  margin-bottom: 6px;
}
.modal-sub { font-size: 12px; color: var(--muted); margin-bottom: 24px; }
.modal-footer { display: flex; gap: 10px; justify-content: flex-end; margin-top: 24px; }

/* ─── TOAST ─── */
.toast-container { position: fixed; bottom: 28px; right: 28px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; }
.toast {
  background: var(--dark);
  color: var(--white);
  padding: 14px 18px;
  border-radius: 12px;
  font-size: 12px; font-weight: 600;
  display: flex; align-items: center; gap: 10px;
  min-width: 260px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  animation: toastIn 0.3s ease;
  border-left: 3px solid var(--orange);
}
.toast.success { border-left-color: var(--green); }
.toast.error { border-left-color: var(--red); }
@keyframes toastIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

/* ─── EMPTY STATE ─── */
.empty-state {
  text-align: center; padding: 60px 20px;
  color: var(--muted);
}
.empty-state i { font-size: 2.5rem; margin-bottom: 16px; opacity: 0.3; }
.empty-state p { font-size: 13px; }

/* ─── DETAIL ROW ─── */
.detail-row { display: flex; gap: 8px; margin-bottom: 10px; font-size: 13px; }
.detail-label { font-weight: 700; min-width: 110px; color: var(--slate); }
.detail-value { color: var(--dark); }

/* ─── DIVIDER ─── */
.divider { height: 1px; background: var(--border); margin: 24px 0; }

/* scrollbar */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

/* password mask toggle */
.pw-field { position: relative; }
.pw-toggle { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--muted); font-size: 13px; background: none; border: none; }
</style>
</head>
<body>

<!-- SIDEBAR -->
<aside class="sidebar">
  <div class="sidebar-logo">
    <h1>CAPACITY<span>HUB</span></h1>
    <p>Admin Dashboard</p>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-section-label">Overview</div>
    <div class="nav-item active" onclick="switchView('overview', this)">
      <i class="fas fa-chart-pie nav-icon"></i> Overview
    </div>

    <div class="nav-section-label" style="margin-top:8px;">Users</div>
    <div class="nav-item" onclick="switchView('users', this)">
      <i class="fas fa-users nav-icon"></i> All Users
    </div>

    <div class="nav-section-label" style="margin-top:8px;">Tasks</div>
    <div class="nav-item" onclick="switchView('create-task', this)">
      <i class="fas fa-plus-circle nav-icon"></i> Create Task
    </div>
    <div class="nav-item" onclick="switchView('manage-tasks', this)">
      <i class="fas fa-list-check nav-icon"></i> Manage Tasks
    </div>
    <div class="nav-item" onclick="switchView('submissions', this)">
      <i class="fas fa-inbox nav-icon"></i> Submissions
      <span id="pending-count-badge" style="margin-left:auto;background:var(--orange);color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;">0</span>
    </div>
    <div class="nav-item" onclick="switchView('withdrawals', this)">
      <i class="fas fa-money-bill-transfer nav-icon"></i> Withdrawals
      <span id="withdraw-count-badge" style="margin-left:auto;background:var(--red);color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;">0</span>
    </div>

    <div class="nav-section-label" style="margin-top:8px;">Settings</div>
    <div class="nav-item" onclick="switchView('settings', this)">
      <i class="fas fa-sliders nav-icon"></i> App Settings
    </div>
  </nav>
  <div class="sidebar-footer">
    <div class="admin-badge">
      <div class="admin-avatar">A</div>
      <div class="admin-info">
        <p>Super Admin</p>
        <span>CapacityHub Corp.</span>
      </div>
    </div>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <header class="topbar">
    <div>
      <div class="topbar-title">CAPACITY<span>HUB</span> Dashboard</div>
    </div>
    <div class="topbar-right">
      <span class="topbar-badge"><i class="fas fa-circle" style="font-size:7px;color:var(--green)"></i> &nbsp;Live</span>
      <span style="font-size:12px;color:var(--muted);" id="current-time"></span>
    </div>
  </header>

  <div class="content">

    <!-- ═══ OVERVIEW ═══ -->
    <div id="view-overview" class="view active">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon orange"><i class="fas fa-users"></i></div>
            <span class="stat-badge up" id="users-growth">↑ 0%</span>
          </div>
          <div class="stat-value" id="stat-total-users">0</div>
          <div class="stat-label">Total Users</div>
        </div>
        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon green"><i class="fas fa-list-check"></i></div>
          </div>
          <div class="stat-value" id="stat-total-tasks">0</div>
          <div class="stat-label">Active Tasks</div>
        </div>
        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon blue"><i class="fas fa-inbox"></i></div>
          </div>
          <div class="stat-value" id="stat-pending">0</div>
          <div class="stat-label">Pending Submissions</div>
        </div>
        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon red"><i class="fas fa-naira-sign"></i></div>
          </div>
          <div class="stat-value" id="stat-paid">₦0</div>
          <div class="stat-label">Total Rewards Paid</div>
        </div>
      </div>

      <div class="section-header">
        <div>
          <div class="section-title">Recent Users</div>
          <div class="section-sub">Latest registrations on the platform</div>
        </div>
        <button class="btn btn-outline btn-sm" onclick="switchView('users', document.querySelector('[onclick*=users]'))">View All</button>
      </div>
      <div class="table-card" id="overview-users-table">
        <div class="empty-state"><i class="fas fa-user-slash"></i><p>No users yet</p></div>
      </div>
    </div>

    <!-- ═══ USERS ═══ -->
    <div id="view-users" class="view">
      <div class="section-header">
        <div>
          <div class="section-title">All Users</div>
          <div class="section-sub">Manage registered users</div>
        </div>
      </div>
      <div class="table-card">
        <div class="table-toolbar">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search by name, phone, UID..." id="user-search" oninput="renderUsersTable()">
          </div>
          <button class="btn btn-orange btn-sm" onclick="openAddUserModal()"><i class="fas fa-plus"></i> Add Demo User</button>
        </div>
        <div id="users-table-body">
          <div class="empty-state"><i class="fas fa-user-slash"></i><p>No users registered yet</p></div>
        </div>
      </div>
    </div>

    <!-- ═══ CREATE TASK ═══ -->
    <div id="view-create-task" class="view">
      <div class="section-header">
        <div>
          <div class="section-title">Create New Task</div>
          <div class="section-sub">Publish a task for users to complete and earn rewards</div>
        </div>
      </div>
      <div class="form-card">
        <div class="form-grid">
          <div class="form-group full">
            <label class="form-label">Task Title</label>
            <input type="text" class="form-input" id="task-title-input" placeholder="e.g. Install Meta Earth Wallet & Complete KYC">
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select class="form-select" id="task-category-input">
              <option value="Apps Install">Apps Install</option>
              <option value="AI">AI</option>
              <option value="Crypto">Crypto</option>
              <option value="Betting">Betting</option>
              <option value="Education">Education</option>
              <option value="Forex">Forex</option>
              <option value="Gaming">Gaming</option>
              <option value="Simple Task">Simple Task</option>
              <option value="Web3">Web3</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Reward (₦)</label>
            <input type="number" class="form-input" id="task-reward-input" placeholder="e.g. 500">
          </div>
          <div class="form-group full">
            <label class="form-label">Task Description</label>
            <textarea class="form-textarea" id="task-desc-input" placeholder="Describe exactly what the user needs to do, step by step. Include any important warnings or referral codes here. This field has unlimited space."></textarea>
            <span class="form-hint">Be as detailed as possible. Users will see this when they open the task.</span>
          </div>
          <div class="form-group">
            <label class="form-label">Invitation / Referral Code (Optional)</label>
            <input type="text" class="form-input" id="task-refcode-input" placeholder="e.g. y92x8cjd">
          </div>
          <div class="form-group">
            <label class="form-label">Task Status</label>
            <select class="form-select" id="task-status-input">
              <option value="active">Active — Visible to users</option>
              <option value="draft">Draft — Hidden from users</option>
            </select>
          </div>
          <div class="form-group full">
            <label class="form-label">Warning / Important Note (Optional)</label>
            <textarea class="form-textarea" style="min-height:80px;" id="task-warning-input" placeholder="Any warnings users must see before starting this task..."></textarea>
          </div>
        </div>
        <div class="divider"></div>
        <div style="display:flex;gap:12px;">
          <button class="btn btn-orange" onclick="publishTask()"><i class="fas fa-paper-plane"></i> Publish Task</button>
          <button class="btn btn-outline" onclick="clearTaskForm()"><i class="fas fa-rotate-left"></i> Clear Form</button>
        </div>
      </div>
    </div>

    <!-- ═══ MANAGE TASKS ═══ -->
    <div id="view-manage-tasks" class="view">
      <div class="section-header">
        <div>
          <div class="section-title">Manage Tasks</div>
          <div class="section-sub">Edit, activate or remove tasks</div>
        </div>
        <button class="btn btn-orange btn-sm" onclick="switchView('create-task', document.querySelectorAll('.nav-item')[3])">
          <i class="fas fa-plus"></i> New Task
        </button>
      </div>
      <div id="tasks-grid-container">
        <div class="empty-state"><i class="fas fa-list-check"></i><p>No tasks created yet. Create your first task!</p></div>
      </div>
    </div>

    <!-- ═══ SUBMISSIONS ═══ -->
    <div id="view-submissions" class="view">
      <div class="section-header">
        <div>
          <div class="section-title">Task Submissions</div>
          <div class="section-sub">Review, approve or decline user submissions</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-outline btn-sm" onclick="filterSubmissions('all')" id="filter-all">All</button>
          <button class="btn btn-outline btn-sm" onclick="filterSubmissions('pending')" id="filter-pending">Pending</button>
          <button class="btn btn-outline btn-sm" onclick="filterSubmissions('approved')" id="filter-approved">Approved</button>
          <button class="btn btn-outline btn-sm" onclick="filterSubmissions('declined')" id="filter-declined">Declined</button>
        </div>
      </div>
      <div id="submissions-container">
        <div class="empty-state"><i class="fas fa-inbox"></i><p>No submissions yet</p></div>
      </div>
    </div>

    <!-- ═══ WITHDRAWALS ═══ -->
    <div id="view-withdrawals" class="view">
      <div class="section-header">
        <div>
          <div class="section-title">Withdrawal Requests</div>
          <div class="section-sub">Review and approve user withdrawal requests</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-outline btn-sm" onclick="filterWithdrawals('all')" id="wf-all">All</button>
          <button class="btn btn-outline btn-sm" onclick="filterWithdrawals('pending')" id="wf-pending">Pending</button>
          <button class="btn btn-outline btn-sm" onclick="filterWithdrawals('approved')" id="wf-approved">Approved</button>
          <button class="btn btn-outline btn-sm" onclick="filterWithdrawals('declined')" id="wf-declined">Declined</button>
        </div>
      </div>
      <div id="withdrawals-container">
        <div class="empty-state"><i class="fas fa-money-bill-transfer"></i><p>No withdrawal requests yet</p></div>
      </div>
    </div>

    <!-- ═══ SETTINGS ═══ -->
    <div id="view-settings" class="view">
      <div class="section-header">
        <div>
          <div class="section-title">App Settings</div>
          <div class="section-sub">Control live rates and app-wide configurations</div>
        </div>
      </div>

      <!-- USD Rate Card -->
      <div class="form-card" style="max-width:520px;">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
          <div class="stat-icon orange" style="width:48px;height:48px;flex-shrink:0;"><i class="fas fa-dollar-sign"></i></div>
          <div>
            <div class="section-title" style="margin-bottom:2px;">Dollar Rate (USD → NGN)</div>
            <div class="section-sub">This rate applies to all balances, swaps and portfolio calculations across the app in real time.</div>
          </div>
        </div>
        <div class="divider" style="margin:0 0 20px;"></div>
        <div class="form-group" style="margin-bottom:16px;">
          <label class="form-label">Current Rate: 1 USD = ₦<span id="current-rate-display">—</span></label>
          <div style="display:flex;gap:10px;align-items:center;">
            <input type="number" id="rate-input" class="form-input" placeholder="e.g. 1600" style="max-width:220px;">
            <button class="btn btn-orange" onclick="saveRate()"><i class="fas fa-save"></i> Save Rate</button>
          </div>
          <span class="form-hint" style="margin-top:6px;display:block;">Enter the current market rate. Changing this updates the app immediately for all users.</span>
        </div>
        <div id="rate-success" class="hidden" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:10px 14px;font-size:12px;font-weight:700;color:#16a34a;">
          <i class="fas fa-check-circle"></i> Rate updated successfully. App will reflect the new rate within seconds.
        </div>
      </div>
    </div>

  </div><!-- /content -->
</div><!-- /main -->

<!-- TOAST CONTAINER -->
<div class="toast-container" id="toast-container"></div>

<!-- ═══ MODALS ═══ -->

<!-- User Detail Modal -->
<div class="modal-overlay" id="user-modal">
  <div class="modal">
    <div class="modal-title" id="um-name">User Details</div>
    <div class="modal-sub" id="um-uid">—</div>
    <div id="um-body"></div>
    <div class="modal-footer">
      <button class="btn btn-red btn-sm" onclick="deleteUser()"><i class="fas fa-trash"></i> Delete Account</button>
      <button class="btn btn-orange btn-sm" onclick="openChangePassword()"><i class="fas fa-key"></i> Change Password</button>
      <button class="btn btn-outline btn-sm" onclick="closeModal('user-modal')">Close</button>
    </div>
  </div>
</div>

<!-- Change Password Modal -->
<div class="modal-overlay" id="pw-modal">
  <div class="modal">
    <div class="modal-title">Change Password</div>
    <div class="modal-sub" id="pw-modal-sub">Update login password for this user</div>
    <div class="form-group">
      <label class="form-label">New Password</label>
      <div class="pw-field">
        <input type="password" class="form-input" id="new-pw-input" placeholder="Enter new password" style="padding-right:40px;">
        <button class="pw-toggle" onclick="togglePw('new-pw-input', this)"><i class="fas fa-eye"></i></button>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline btn-sm" onclick="closeModal('pw-modal')">Cancel</button>
      <button class="btn btn-orange btn-sm" onclick="savePassword()"><i class="fas fa-save"></i> Save Password</button>
    </div>
  </div>
</div>

<!-- Add Demo User Modal -->
<div class="modal-overlay" id="add-user-modal">
  <div class="modal">
    <div class="modal-title">Add Demo User</div>
    <div class="modal-sub">Manually register a user for testing</div>
    <div class="form-grid" style="gap:16px;">
      <div class="form-group"><label class="form-label">Full Name</label><input type="text" class="form-input" id="nu-name" placeholder="John Doe"></div>
      <div class="form-group"><label class="form-label">Phone Number</label><input type="text" class="form-input" id="nu-phone" placeholder="08012345678"></div>
      <div class="form-group"><label class="form-label">Password</label><input type="password" class="form-input" id="nu-pw" placeholder="Password"></div>
      <div class="form-group"><label class="form-label">Country</label><input type="text" class="form-input" id="nu-country" placeholder="Nigeria"></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline btn-sm" onclick="closeModal('add-user-modal')">Cancel</button>
      <button class="btn btn-orange btn-sm" onclick="addDemoUser()"><i class="fas fa-plus"></i> Add User</button>
    </div>
  </div>
</div>

<!-- Screenshot Lightbox -->
<div class="modal-overlay" id="lightbox-modal" onclick="closeModal('lightbox-modal')">
  <div style="max-width:700px;width:100%;">
    <img id="lightbox-img" src="" style="width:100%;border-radius:16px;max-height:85vh;object-fit:contain;" alt="Proof Screenshot">
    <p style="text-align:center;color:rgba(255,255,255,0.5);font-size:11px;margin-top:10px;">Click anywhere to close</p>
  </div>
</div>

<!-- Add Submission (demo) Modal -->
<div class="modal-overlay" id="add-submission-modal">
  <div class="modal">
    <div class="modal-title">Add Demo Submission</div>
    <div class="modal-sub">Simulate a user submitting a completed task</div>
    <div class="form-grid" style="gap:16px;">
      <div class="form-group">
        <label class="form-label">Select User</label>
        <select class="form-select" id="sub-user-select"></select>
      </div>
      <div class="form-group">
        <label class="form-label">Select Task</label>
        <select class="form-select" id="sub-task-select"></select>
      </div>
      <div class="form-group full">
        <label class="form-label">User Note</label>
        <textarea class="form-textarea" style="min-height:70px;" id="sub-note" placeholder="What the user said about the submission..."></textarea>
      </div>
      <div class="form-group full">
        <label class="form-label">Screenshot Proof (URL or leave blank)</label>
        <input type="text" class="form-input" id="sub-screenshot" placeholder="https://... or leave blank for placeholder">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline btn-sm" onclick="closeModal('add-submission-modal')">Cancel</button>
      <button class="btn btn-orange btn-sm" onclick="addDemoSubmission()"><i class="fas fa-paper-plane"></i> Submit</button>
    </div>
  </div>
</div>

<script>
// ══════════════════════════════════════════
// FIREBASE CONFIG — must be at top before load
// ══════════════════════════════════════════
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyA8YXmSSGn5K7Z2ZjdAA4S-BojJ4qXbt18",
    authDomain: "capacityhub-1b18b.firebaseapp.com",
    projectId: "capacityhub-1b18b",
    storageBucket: "capacityhub-1b18b.firebasestorage.app",
    messagingSenderId: "471709122625",
    appId: "1:471709122625:web:038b5fc706399e1ba3c6c0",
    measurementId: "G-S88WVXX810"
};

let db_fire = null;
let fsUsers = null;
let fsMeta  = null;

// ─── STATE ───
let DB = {
  users: [],
  tasks: [],
  submissions: [],
  withdrawals: [],
  totalPaid: 0,
  usd_rate: 1500
};

let activeUserId = null;
let submissionFilter = 'all';

// ─── INIT ───
window.addEventListener('load', () => {
  // Init Firebase
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    db_fire = firebase.firestore();
    fsUsers = db_fire.collection('users');
    fsMeta  = db_fire.collection('meta').doc('adminDB');
    if (firebase.analytics) firebase.analytics();
  } catch(e) { console.warn('Firebase init:', e); }

  loadDB();
  renderAll();
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(() => { loadDB(); renderAll(); }, 4000);

  if (!fsMeta) return;

  // Pull meta (tasks, submissions, withdrawals, rate) from Firestore
  fsMeta.get().then(snap => {
    if (snap && snap.exists) {
        const data = snap.data();
        DB.tasks = data.tasks || DB.tasks;
        DB.submissions = data.submissions || DB.submissions;
        DB.withdrawals = data.withdrawals || DB.withdrawals;
        DB.usd_rate = data.usd_rate || DB.usd_rate;
        DB.totalPaid = data.totalPaid || DB.totalPaid;
        localStorage.setItem('ch_admin_db', JSON.stringify(DB));
        renderAll();
    }
  }).catch(e => console.warn('Firestore meta get:', e));

  // Pull ALL users from Firestore users collection
  fsUsers.get().then(snap => {
    if (!snap) return;
    snap.forEach(doc => {
        const u = doc.data();
        const existing = DB.users.find(x => x.uid === u.uid);
        if (!existing) DB.users.push(u);
        else Object.assign(existing, u);
    });
    localStorage.setItem('ch_admin_db', JSON.stringify(DB));
    renderAll();
  }).catch(e => console.warn('Firestore users get:', e));

  // Real-time listener on meta doc
  fsMeta.onSnapshot(snap => {
    if (snap && snap.exists) {
        const data = snap.data();
        DB.tasks = data.tasks || DB.tasks;
        DB.submissions = data.submissions || DB.submissions;
        DB.withdrawals = data.withdrawals || DB.withdrawals;
        DB.usd_rate = data.usd_rate || DB.usd_rate;
        DB.totalPaid = data.totalPaid || DB.totalPaid;
        if (!DB.users) DB.users = [];
        if (!DB.withdrawals) DB.withdrawals = [];
        localStorage.setItem('ch_admin_db', JSON.stringify(DB));
        renderAll();
    }
  }, e => console.warn('Firestore meta snapshot:', e));

  // Real-time listener on users collection — catches new signups instantly
  fsUsers.onSnapshot(snap => {
    if (!snap) return;
    snap.docChanges().forEach(change => {
        if (change.type === 'added' || change.type === 'modified') {
            const u = change.doc.data();
            const existing = DB.users.find(x => x.uid === u.uid);
            if (!existing) DB.users.push(u);
            else Object.assign(existing, u);
        }
        if (change.type === 'removed') {
            const u = change.doc.data();
            DB.users = DB.users.filter(x => x.uid !== u.uid);
        }
    });
    localStorage.setItem('ch_admin_db', JSON.stringify(DB));
    renderAll();
  }, e => console.warn('Firestore users snapshot:', e));

  // Seed demo task if Firestore has none
  setTimeout(() => {
    if (DB.tasks.length === 0) {
        DB.tasks.push({
            id: uid(),
            title: 'Install Meta Earth Wallet & Complete KYC',
            category: 'Apps Install',
            reward: 500,
            desc: 'Meta Earth is a wallet giving new users who register, do face verification and advanced KYC (1 MEC) $8. Register with the invitation code, complete KYC with your plastic national ID card, take a screenshot and submit here.',
            warning: 'The national ID card must be the plastic/small one. You MUST use the invitation code or you will not qualify.',
            refcode: 'y92x8cjd',
            status: 'active',
            created: new Date().toLocaleDateString('en-NG')
        });
        saveDB();
        renderAll();
    }
  }, 2000);
});

function uid() { return Math.random().toString(36).substr(2, 9); }

function saveDB() {
    localStorage.setItem('ch_admin_db', JSON.stringify(DB));
    if (!fsMeta) { setTimeout(saveDB, 1000); return; }

    // Strip base64 screenshots — store only metadata in Firestore meta doc
    const safeSubmissions = (DB.submissions || []).map(s => ({
        id: s.id, userId: s.userId, userName: s.userName || '',
        taskId: s.taskId, note: s.note || '',
        screenshot: s.screenshot && s.screenshot.startsWith('data:') ? '[image_uploaded]' : (s.screenshot || ''),
        status: s.status, date: s.date
    }));

    const safeWithdrawals = (DB.withdrawals || []).map(w => ({
        id: w.id, userId: w.userId, userName: w.userName || '',
        userPhone: w.userPhone || '', type: w.type,
        amount: w.amount, accNum: w.accNum || '', accName: w.accName || '',
        bankName: w.bankName || '', network: w.network || '',
        walletAddress: w.walletAddress || '', status: w.status, date: w.date
    }));

    const safeDB = {
        tasks: DB.tasks || [],
        usd_rate: DB.usd_rate || 1500,
        totalPaid: DB.totalPaid || 0,
        submissions: safeSubmissions,
        withdrawals: safeWithdrawals
    };

    fsMeta.set(safeDB, { merge: true })
        .then(() => console.log('Firestore meta saved ✅'))
        .catch(e => console.error('Firestore saveDB error:', e));

    // Write each user to their own Firestore doc
    (DB.users || []).forEach(u => {
        if (u.uid) {
            const safeUser = { ...u };
            // Strip history base64 if any
            if (safeUser.history) {
                safeUser.history = safeUser.history.slice(0, 50); // keep last 50 entries
            }
            fsUsers.doc(u.uid).set(safeUser, { merge: true })
                .catch(e => console.error('Firestore user write error:', e));
        }
    });
}

function loadDB() {
    const d = localStorage.getItem('ch_admin_db');
    if (d) DB = JSON.parse(d);
    if (!DB.users) DB.users = [];
    if (!DB.tasks) DB.tasks = [];
    if (!DB.submissions) DB.submissions = [];
    if (!DB.withdrawals) DB.withdrawals = [];
    if (!DB.totalPaid) DB.totalPaid = 0;
    if (!DB.usd_rate) DB.usd_rate = 1500;
}

// ─── CLOCK ───
function updateClock() {
  document.getElementById('current-time').textContent =
    new Date().toLocaleString('en-NG', { weekday:'short', day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' });
}

// ─── NAVIGATION ───
function switchView(id, el) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('view-' + id).classList.add('active');
  if (el) el.classList.add('active');
  renderAll();
}

// ─── RENDER ALL ───
function renderAll() {
  renderStats();
  renderOverviewTable();
  renderUsersTable();
  renderTasksGrid();
  renderSubmissions();
  renderWithdrawals();
  renderSettings();
  updatePendingBadge();
}

// ─── STATS ───
function renderStats() {
  document.getElementById('stat-total-users').textContent = DB.users.length;
  document.getElementById('stat-total-tasks').textContent = DB.tasks.filter(t => t.status === 'active').length;
  const pending = DB.submissions.filter(s => s.status === 'pending').length;
  document.getElementById('stat-pending').textContent = pending;
  document.getElementById('stat-paid').textContent = '₦' + DB.totalPaid.toLocaleString('en-NG');
}

function updatePendingBadge() {
  const p = DB.submissions.filter(s => s.status === 'pending').length;
  document.getElementById('pending-count-badge').textContent = p;
}

// ─── OVERVIEW TABLE ───
function renderOverviewTable() {
  const el = document.getElementById('overview-users-table');
  const recent = [...DB.users].slice(-5).reverse();
  if (!recent.length) { el.innerHTML = '<div class="empty-state"><i class="fas fa-user-slash"></i><p>No users yet</p></div>'; return; }
  el.innerHTML = buildUsersTableHTML(recent);
}

// ─── USERS TABLE ───
function renderUsersTable() {
  const q = (document.getElementById('user-search')?.value || '').toLowerCase();
  let users = DB.users.filter(u =>
    u.name.toLowerCase().includes(q) ||
    u.phone.includes(q) ||
    u.uid.toLowerCase().includes(q)
  );
  const el = document.getElementById('users-table-body');
  if (!el) return;
  if (!users.length) { el.innerHTML = '<div class="empty-state"><i class="fas fa-user-slash"></i><p>No users found</p></div>'; return; }
  el.innerHTML = buildUsersTableHTML(users);
}

function buildUsersTableHTML(users) {
  return `<table>
    <thead><tr>
      <th>User</th><th>Phone</th><th>Password</th><th>Country</th><th>UID</th><th>Status</th><th>Actions</th>
    </tr></thead>
    <tbody>
    ${users.map(u => `
      <tr>
        <td><div class="user-cell">
          <div class="user-avatar">${u.name[0].toUpperCase()}</div>
          <div><div class="user-name">${u.name}</div><div class="user-meta">${u.created}</div></div>
        </div></td>
        <td>${u.phone}</td>
        <td><span style="font-family:monospace;background:var(--bg);padding:3px 8px;border-radius:6px;font-size:11px;">${maskPw(u.password)}</span></td>
        <td><i class="fas fa-location-dot" style="color:var(--orange);margin-right:5px;font-size:10px;"></i>${u.country}</td>
        <td><span style="font-size:10px;font-family:monospace;color:var(--muted);">${u.uid}</span></td>
        <td><span class="status-badge active"><span class="status-dot"></span>Active</span></td>
        <td><div class="action-btns">
          <button class="btn btn-outline btn-sm" onclick="openUserModal('${u.id}')"><i class="fas fa-eye"></i></button>
          <button class="btn btn-red btn-sm" onclick="confirmDeleteUser('${u.id}')"><i class="fas fa-trash"></i></button>
        </div></td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function maskPw(pw) {
  if (!pw) return '—';
  if (pw.length <= 2) return '••••';
  return pw[0] + '•'.repeat(Math.min(pw.length - 2, 6)) + pw[pw.length - 1];
}

// ─── USER MODAL ───
function openUserModal(id) {
  const u = DB.users.find(x => x.id === id);
  if (!u) return;
  activeUserId = id;
  document.getElementById('um-name').textContent = u.name;
  document.getElementById('um-uid').textContent = u.uid;
  document.getElementById('um-body').innerHTML = `
    <div class="detail-row"><span class="detail-label">Phone</span><span class="detail-value">${u.phone}</span></div>
    <div class="detail-row"><span class="detail-label">Password</span><span class="detail-value" style="font-family:monospace;">${u.password || '—'}</span></div>
    <div class="detail-row"><span class="detail-label">Country</span><span class="detail-value">${u.country}</span></div>
    <div class="detail-row"><span class="detail-label">Registered</span><span class="detail-value">${u.created}</span></div>
    <div class="detail-row"><span class="detail-label">NGN Balance</span><span class="detail-value" style="color:var(--orange);font-weight:700;">₦${(u.wallet_balance || 0).toLocaleString('en-NG', {minimumFractionDigits:2})}</span></div>
    <div class="detail-row"><span class="detail-label">USDT Balance</span><span class="detail-value">${(u.usdt_balance || 0).toFixed(2)} USDT</span></div>
    <div class="detail-row"><span class="detail-label">Tasks Done</span><span class="detail-value">${DB.submissions.filter(s => s.userId === id && s.status === 'approved').length}</span></div>
  `;
  openModal('user-modal');
}

function deleteUser() {
  if (!activeUserId) return;
  DB.users = DB.users.filter(u => u.id !== activeUserId);
  DB.submissions = DB.submissions.filter(s => s.userId !== activeUserId);
  saveDB(); renderAll(); closeModal('user-modal');
  toast('User account deleted.', 'error');
}

function confirmDeleteUser(id) {
  activeUserId = id;
  const u = DB.users.find(x => x.id === id);
  if (confirm(`Delete account for ${u?.name}? This cannot be undone.`)) deleteUser();
}

function openChangePassword() {
  document.getElementById('new-pw-input').value = '';
  closeModal('user-modal');
  openModal('pw-modal');
}

function savePassword() {
  const pw = document.getElementById('new-pw-input').value.trim();
  if (!pw) { toast('Please enter a new password.', 'error'); return; }
  const u = DB.users.find(x => x.id === activeUserId);
  if (!u) return;
  u.password = pw;
  saveDB(); renderAll(); closeModal('pw-modal');
  toast(`Password updated for ${u.name}.`, 'success');
}

// ─── ADD DEMO USER ───
function openAddUserModal() { openModal('add-user-modal'); }

function addDemoUser() {
  const name = document.getElementById('nu-name').value.trim();
  const phone = document.getElementById('nu-phone').value.trim();
  const password = document.getElementById('nu-pw').value.trim();
  const country = document.getElementById('nu-country').value.trim() || 'Nigeria';
  if (!name || !phone) { toast('Name and phone are required.', 'error'); return; }
  const user = {
    id: uid(),
    uid: `UID-${Math.floor(10000000 + Math.random() * 90000000)}`,
    name, phone, password, country,
    wallet_balance: 0, usdt_balance: 0, redemption_balance: 0,
    created: new Date().toLocaleDateString('en-NG')
  };
  DB.users.push(user);
  saveDB(); renderAll(); closeModal('add-user-modal');
  ['nu-name','nu-phone','nu-pw','nu-country'].forEach(id => document.getElementById(id).value = '');
  toast(`User "${name}" added.`, 'success');
}

// ─── TASKS ───
function renderTasksGrid() {
  const el = document.getElementById('tasks-grid-container');
  if (!el) return;
  if (!DB.tasks.length) {
    el.innerHTML = '<div class="empty-state"><i class="fas fa-list-check"></i><p>No tasks yet. Create your first task!</p></div>';
    return;
  }
  el.innerHTML = `<div class="tasks-grid">${DB.tasks.map(t => `
    <div class="task-card">
      <div class="task-card-header">
        <span class="task-category">${t.category}</span>
        <span class="status-badge ${t.status === 'active' ? 'approved' : 'inactive'}">${t.status}</span>
      </div>
      <div class="task-reward">₦${Number(t.reward).toLocaleString()} <span>reward</span></div>
      <div class="task-title">${t.title}</div>
      <div class="task-desc">${t.desc}</div>
      <div class="task-footer">
        <span class="task-meta"><i class="fas fa-calendar" style="margin-right:4px;"></i>${t.created}</span>
        <div class="action-btns">
          <button class="btn btn-outline btn-sm" onclick="toggleTaskStatus('${t.id}')">
            <i class="fas fa-${t.status === 'active' ? 'pause' : 'play'}"></i>
          </button>
          <button class="btn btn-red btn-sm" onclick="deleteTask('${t.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>`).join('')}</div>`;
}

function publishTask() {
  const title = document.getElementById('task-title-input').value.trim();
  const desc = document.getElementById('task-desc-input').value.trim();
  const reward = parseFloat(document.getElementById('task-reward-input').value);
  if (!title || !desc || !reward) { toast('Title, description and reward are required.', 'error'); return; }
  const task = {
    id: uid(),
    title,
    category: document.getElementById('task-category-input').value,
    reward,
    desc,
    warning: document.getElementById('task-warning-input').value.trim(),
    refcode: document.getElementById('task-refcode-input').value.trim(),
    status: document.getElementById('task-status-input').value,
    created: new Date().toLocaleDateString('en-NG')
  };
  DB.tasks.push(task);
  saveDB(); renderAll(); clearTaskForm();
  toast(`Task "${title}" published!`, 'success');
  switchView('manage-tasks', document.querySelectorAll('.nav-item')[4]);
}

function clearTaskForm() {
  ['task-title-input','task-desc-input','task-reward-input','task-warning-input','task-refcode-input'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('task-category-input').selectedIndex = 0;
  document.getElementById('task-status-input').selectedIndex = 0;
}

function toggleTaskStatus(id) {
  const t = DB.tasks.find(x => x.id === id);
  if (!t) return;
  t.status = t.status === 'active' ? 'draft' : 'active';
  saveDB(); renderAll();
  toast(`Task ${t.status === 'active' ? 'activated' : 'paused'}.`);
}

function deleteTask(id) {
  if (!confirm('Delete this task?')) return;
  DB.tasks = DB.tasks.filter(t => t.id !== id);
  saveDB(); renderAll();
  toast('Task deleted.', 'error');
}

// ─── SUBMISSIONS ───
function renderSubmissions() {
  const el = document.getElementById('submissions-container');
  if (!el) return;
  let subs = submissionFilter === 'all' ? DB.submissions : DB.submissions.filter(s => s.status === submissionFilter);
  subs = [...subs].reverse();

  // Update filter buttons
  ['all','pending','approved','declined'].forEach(f => {
    const btn = document.getElementById('filter-' + f);
    if (btn) {
      btn.className = 'btn btn-sm ' + (submissionFilter === f ? 'btn-orange' : 'btn-outline');
    }
  });

  if (!subs.length) {
    el.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>No submissions in this category</p></div>';
    return;
  }

  el.innerHTML = subs.map(s => {
    const user = DB.users.find(u => u.id === s.userId);
    const task = DB.tasks.find(t => t.id === s.taskId);
    return `
    <div class="submission-card" id="sub-${s.id}">
      <div class="submission-screenshot" onclick="viewScreenshot('${s.screenshot || ''}')">
        ${s.screenshot
          ? `<img src="${s.screenshot}" alt="proof" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" onerror="this.parentElement.innerHTML='<div class=\\'placeholder\\'><i class=\\'fas fa-image\\'></i><br>View Proof</div>'">`
          : `<div class="placeholder"><i class="fas fa-image" style="font-size:20px;color:var(--muted);display:block;margin-bottom:4px;"></i><span>No screenshot</span></div>`}
      </div>
      <div class="submission-body">
        <div class="submission-header">
          <div>
            <div class="submission-user">${user?.name || 'Unknown User'}</div>
            <div class="submission-task">Task: ${task?.title || 'Unknown Task'} &nbsp;·&nbsp; ${s.date}</div>
          </div>
          <div>
            <span class="status-badge ${s.status}">${s.status}</span>
          </div>
        </div>
        <div class="submission-reward">₦${Number(task?.reward || 0).toLocaleString()}</div>
        ${s.note ? `<div class="submission-detail" style="margin-top:8px;">"${s.note}"</div>` : ''}
        ${s.status === 'pending' ? `
        <div class="submission-actions">
          <button class="btn btn-green btn-sm" onclick="approveSubmission('${s.id}')"><i class="fas fa-check"></i> Approve & Pay</button>
          <button class="btn btn-red btn-sm" onclick="declineSubmission('${s.id}')"><i class="fas fa-times"></i> Decline</button>
        </div>` : `<div style="font-size:11px;color:var(--muted);margin-top:6px;">
          ${s.status === 'approved' ? '<i class="fas fa-check-circle" style="color:var(--green);"></i> Reward paid to user wallet' : '<i class="fas fa-times-circle" style="color:var(--red);"></i> Submission declined'}
        </div>`}
      </div>
    </div>`;
  }).join('');

  // Add a demo submission button at the bottom if users and tasks exist
  if (DB.users.length && DB.tasks.length) {
    el.innerHTML += `<div style="text-align:center;margin-top:16px;">
      <button class="btn btn-outline btn-sm" onclick="openAddSubmissionModal()"><i class="fas fa-plus"></i> Add Demo Submission</button>
    </div>`;
  }
}

function filterSubmissions(f) {
  submissionFilter = f;
  renderSubmissions();
}

function approveSubmission(id) {
  const s = DB.submissions.find(x => x.id === id);
  if (!s || s.status !== 'pending') return;
  const task = DB.tasks.find(t => t.id === s.taskId);
  const user = DB.users.find(u => u.id === s.userId || u.uid === s.userId);
  if (!task || !user) return;

  s.status = 'approved';
  const reward = Number(task.reward);
  user.wallet_balance = (user.wallet_balance || 0) + reward;
  DB.totalPaid = (DB.totalPaid || 0) + reward;

  // Push deposit notification — main app polls and detects this
  if (!user.history) user.history = [];
  user.history.unshift({
    title: `✅ Task Reward: ${task.title}`,
    amount: reward,
    type: 'plus',
    date: new Date().toLocaleString('en-NG', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
  });

  saveDB(); renderAll();
  toast(`✅ ₦${reward.toLocaleString()} deposited to ${user.name}'s wallet!`, 'success');
}

function declineSubmission(id) {
  const s = DB.submissions.find(x => x.id === id);
  if (!s || s.status !== 'pending') return;
  s.status = 'declined';
  saveDB(); renderAll();
  toast('Submission declined.', 'error');
}

// ─── ADD DEMO SUBMISSION ───
function openAddSubmissionModal() {
  const userSel = document.getElementById('sub-user-select');
  const taskSel = document.getElementById('sub-task-select');
  userSel.innerHTML = DB.users.map(u => `<option value="${u.id}">${u.name}</option>`).join('');
  taskSel.innerHTML = DB.tasks.map(t => `<option value="${t.id}">${t.title} (₦${t.reward})</option>`).join('');
  document.getElementById('sub-note').value = '';
  document.getElementById('sub-screenshot').value = '';
  openModal('add-submission-modal');
}

function addDemoSubmission() {
  const userId = document.getElementById('sub-user-select').value;
  const taskId = document.getElementById('sub-task-select').value;
  const note = document.getElementById('sub-note').value.trim();
  const screenshot = document.getElementById('sub-screenshot').value.trim();
  if (!userId || !taskId) { toast('Select a user and task.', 'error'); return; }
  const sub = {
    id: uid(), userId, taskId, note, screenshot,
    status: 'pending',
    date: new Date().toLocaleDateString('en-NG')
  };
  DB.submissions.push(sub);
  saveDB(); renderAll(); closeModal('add-submission-modal');
  toast('Submission added — ready to review!', 'success');
  switchView('submissions', document.querySelectorAll('.nav-item')[5]);
}

// ─── SCREENSHOT LIGHTBOX ───
function viewScreenshot(url) {
  if (!url) return;
  document.getElementById('lightbox-img').src = url;
  openModal('lightbox-modal');
}

// ─── MODAL HELPERS ───
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ─── TOGGLE PW ───
function togglePw(inputId, btn) {
  const inp = document.getElementById(inputId);
  const show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  btn.innerHTML = show ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
}

// ─── TOAST ───
function toast(msg, type = 'info') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<i class="fas fa-${type==='success'?'check-circle':type==='error'?'exclamation-circle':'info-circle'}"></i> ${msg}`;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

let withdrawalFilter = 'all';

function filterWithdrawals(f) {
  withdrawalFilter = f;
  renderWithdrawals();
}

function renderWithdrawals() {
  const el = document.getElementById('withdrawals-container');
  if (!el) return;

  ['all','pending','approved','declined'].forEach(f => {
    const btn = document.getElementById('wf-' + f);
    if (btn) btn.className = 'btn btn-sm ' + (withdrawalFilter === f ? 'btn-orange' : 'btn-outline');
  });

  let list = DB.withdrawals || [];
  if (withdrawalFilter !== 'all') list = list.filter(w => w.status === withdrawalFilter);

  const pendingCount = (DB.withdrawals || []).filter(w => w.status === 'pending').length;
  const badge = document.getElementById('withdraw-count-badge');
  if (badge) badge.textContent = pendingCount;

  if (!list.length) {
    el.innerHTML = '<div class="empty-state"><i class="fas fa-money-bill-transfer"></i><p>No withdrawal requests in this category</p></div>';
    return;
  }

  el.innerHTML = list.map(w => {
    const isUSDT = w.type === 'USDT';
    const statusColor = w.status === 'approved' ? 'approved' : w.status === 'declined' ? 'declined' : 'pending';
    return `
    <div class="submission-card" id="wd-${w.id}">
      <div style="width:56px;height:56px;border-radius:14px;background:${isUSDT ? 'rgba(38,161,123,0.1)' : 'rgba(249,115,22,0.1)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:22px;">
        ${isUSDT ? '<i class="fas fa-dollar-sign" style="color:#26A17B;"></i>' : '<span style="color:var(--orange);font-weight:900;font-size:18px;">₦</span>'}
      </div>
      <div class="submission-body">
        <div class="submission-header">
          <div>
            <div class="submission-user">${w.userName || '—'}</div>
            <div class="submission-task">${w.userPhone || '—'} · ${w.date}</div>
          </div>
          <span class="status-badge ${statusColor}">${w.status}</span>
        </div>
        <div class="submission-reward" style="margin-bottom:10px;">${isUSDT ? w.amount + ' USDT' : '₦' + Number(w.amount).toLocaleString('en-NG')}</div>
        <div style="background:var(--bg);border-radius:10px;padding:12px;margin-bottom:14px;font-size:12px;line-height:1.8;">
          ${isUSDT ? `
            <div><span style="font-weight:700;color:var(--slate);min-width:120px;display:inline-block;">Network</span>${w.network || '—'}</div>
            <div><span style="font-weight:700;color:var(--slate);min-width:120px;display:inline-block;">Wallet Address</span><span style="font-family:monospace;word-break:break-all;">${w.walletAddress || '—'}</span></div>
          ` : `
            <div><span style="font-weight:700;color:var(--slate);min-width:120px;display:inline-block;">Account No.</span>${w.accNum || '—'}</div>
            <div><span style="font-weight:700;color:var(--slate);min-width:120px;display:inline-block;">Account Name</span>${w.accName || '—'}</div>
            <div><span style="font-weight:700;color:var(--slate);min-width:120px;display:inline-block;">Bank</span>${w.bankName || '—'}</div>
          `}
          <div><span style="font-weight:700;color:var(--slate);min-width:120px;display:inline-block;">User ID</span><span style="font-family:monospace;font-size:11px;">${w.userId || '—'}</span></div>
        </div>
        ${w.status === 'pending' ? `
        <div class="submission-actions">
          <button class="btn btn-green btn-sm" onclick="approveWithdrawal('${w.id}')"><i class="fas fa-check"></i> Approve Payment</button>
          <button class="btn btn-red btn-sm" onclick="declineWithdrawal('${w.id}')"><i class="fas fa-times"></i> Decline & Refund</button>
        </div>` : `
        <div style="font-size:11px;color:var(--muted);margin-top:4px;">
          ${w.status === 'approved'
            ? '<i class="fas fa-check-circle" style="color:var(--green);"></i> Payment approved'
            : '<i class="fas fa-times-circle" style="color:var(--red);"></i> Declined — balance refunded to user'}
        </div>`}
      </div>
    </div>`;
  }).join('');
}

function approveWithdrawal(id) {
  const w = DB.withdrawals.find(x => x.id === id);
  if (!w || w.status !== 'pending') return;
  w.status = 'approved';
  const user = DB.users.find(u => u.uid === w.userId || u.id === w.userId);
  if (user) {
    if (!user.history) user.history = [];
    user.history.unshift({
      title: `✅ Withdrawal Approved: ${w.type === 'USDT' ? w.amount + ' USDT' : '₦' + Number(w.amount).toLocaleString()}`,
      amount: w.amount,
      type: 'minus',
      date: new Date().toLocaleString('en-NG', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
    });
  }
  saveDB(); renderAll();
  toast(`Withdrawal approved for ${w.userName}!`, 'success');
}

function declineWithdrawal(id) {
  const w = DB.withdrawals.find(x => x.id === id);
  if (!w || w.status !== 'pending') return;
  w.status = 'declined';
  const user = DB.users.find(u => u.uid === w.userId || u.id === w.userId);
  if (user) {
    const field = w.type === 'USDT' ? 'usdt_balance' : 'wallet_balance';
    user[field] = (user[field] || 0) + Number(w.amount);
    if (!user.history) user.history = [];
    user.history.unshift({
      title: `↩️ Withdrawal Declined & Refunded: ${w.type === 'USDT' ? w.amount + ' USDT' : '₦' + Number(w.amount).toLocaleString()}`,
      amount: w.amount,
      type: 'plus',
      date: new Date().toLocaleString('en-NG', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
    });
  }
  saveDB(); renderAll();
  toast(`Declined. Balance refunded to ${w.userName}.`, 'error');
}

function saveRate() {
  const val = parseFloat(document.getElementById('rate-input').value);
  if (!val || val <= 0) { toast('Please enter a valid rate.', 'error'); return; }
  DB.usd_rate = val;
  saveDB();
  renderSettings();
  const s = document.getElementById('rate-success');
  s.classList.remove('hidden');
  setTimeout(() => s.classList.add('hidden'), 4000);
  toast(`Rate updated: 1 USD = ₦${val.toLocaleString()}`, 'success');
}

function renderSettings() {
  const rate = DB.usd_rate || 1500;
  const display = document.getElementById('current-rate-display');
  const input = document.getElementById('rate-input');
  if (display) display.textContent = Number(rate).toLocaleString();
  if (input) input.placeholder = rate;
}
</script>
</body>
</html>
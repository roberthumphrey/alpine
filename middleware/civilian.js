export default function ({ store, redirect }) {
    const departments = store.state.auth.user.departments;
    const hasCivRole = departments.filter(department => department.name === 'Civilian Operations');

    if (hasCivRole.length > 0) return;
    else return redirect('/dashboard');
}
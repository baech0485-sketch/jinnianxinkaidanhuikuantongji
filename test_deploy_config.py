from pathlib import Path


def test_pages_workflow_publishes_daily_dashboard_as_site_root():
    project_root = Path(__file__).resolve().parent.parent
    workflow = (project_root / ".github" / "workflows" / "deploy-pages.yml").read_text(encoding="utf-8")

    assert "cp -r daily-dashboard/* dist/" in workflow
    assert "cp index.html dist/index.html" not in workflow
